import userModel from "../models/user.model.js";
import bcrypt from 'bcrypt';


export const createUser = async(req,res)=>{
    try{
      const { name,email,password} = req.body;

      const existingUser = await userModel.findOne({email});
      if(existingUser){
        return res.status(400).json({success:false,message:"User already exists"})
      }
        
      const hashPassword = await bcrypt.hash(password,10)
      const user = await userModel.create({
        name,email,password:hashPassword
      })
      
      return res.status(200).json({success:true,message:"User created successfully",user})

     }
    catch(error){
        return res.status(500).json({success:false,message:error.message})
    }
}

export const allUser = async(req,res)=>{
 try{
         const users = await userModel.find().select("-password");
         return res.status(200).json({success:true,message:"All Users",users})
 }
 catch(error){
    return res.status(500).json({success:false,message:error.message});
 }
}

export const deleteUser = async(req,res)=>{
    try{
        const user = await userModel.findByIdAndDelete(req.params.id);
        return res.status(200).json({success:true,message:"User deleted successfully"});
    }
    catch(error){
        return res.status(500).json({success:false,message:error.message})
    }
}

export const updateUser = async(req,res)=>{
    try{
      const user = await userModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
      return res.status(200).json({success:true,message:"User updated successfully",user});
    }
    catch(error){
        return res.status(500).json({success:false,message:error.message})
    }
}