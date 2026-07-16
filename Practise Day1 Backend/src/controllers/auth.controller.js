import authModel from "../models/auth.model.js";
import bcrypt from "bcrypt";


export const signup = async(req,res)=>{
    try{
         
        const {name,email,password} = req.body;
       const existingUser = await authModel.findOne({email});
       if(existingUser){
        return res.status(400).json({success:false,message:"User already exists"})
       }

       const hashPassword = await bcrypt.hash(password, 10);

        const user = await authModel.create({
          name,
          email,
          password: hashPassword,
        });

        return res.status(200).json({success:true,message:"User signup successfully",user});

    }
    catch(error){
        return res.status(500).json({success:false,message:error.message});
    }
}

export const login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        
        const user = await authModel.findOne({email});
        if(!user){
            return res.status(401).json({success:false,message:"Invalid Crediantials"})
        }

        const comparePassword = await bcrypt.compare(password,user.password);
        if(!comparePassword){
            return res.status(401).json({success:true,message:"Invalid Crediantials"})
        }

        return res.status(200).json({success:true,message:"Login Successful",user});
    }
    catch(error){
        return res.status(500).json({success:false,message:error.message});
    }
}