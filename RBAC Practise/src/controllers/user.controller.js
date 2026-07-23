import User from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const ifExist = await User.findOne({ email });
    if (ifExist) {
      return res
        .status(401)
        .json({ success: false, message: "User already exist,Please log-in" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const data = await User.create({
      name,
      email,
      password: hashPassword,
      role,
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        name: data.name,
        email: data.email,
        role: data.role,
      },
    });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid Crediantials,Please try again",
      });
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid Crediantials,Please try again ",
      });
    }

    const token = await jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      samesite: "strict",
    });
    return res.status(200).json({
      success: true,
      message: "User logged-in successfully",
      data: {
        name: user.name,
        email: user.email,
        role: user.role,
        token,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      samesite: "strict",
    });
    return res
      .status(200)
      .json({ success: true, message: "Logout successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
