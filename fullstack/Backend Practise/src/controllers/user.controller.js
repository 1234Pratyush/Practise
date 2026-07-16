import User from "../models/user.model.js";


export const createUser = async(req,res)=>{
    try{
        const {fullName,email,phone,message} = req.body;

        const newUser = await User.create({
            fullName,email,phone,message
        })
        return res.status(201).json({
          success: true,
          message: "Form submitted sucessfully",
          data: newUser,
        });

    }
    catch(error){
     res.status(500).json({sucess:false,message:error.message});
    }
}

export const getAllUsers = async(req,res)=>{
    try{
   const users = await User.find();
   return res.status(200).json({success:true,data:users})
    }
    catch(error){
      return  res.status(500).json({success:false,message:error.message});
    }
}



export const deleteUser = async(req,res)=>{
    try{

        const deleteUser  = await User.findByIdAndDelete(req.params.id);
        return res.status(200).json({success:true,message:"User deleted successfully"}); 

    }
    catch(error){
        return res.status(500).json({success:false,message:error.message});
    }
}

export const updateUser = async(req,res)=>{
    try{
          const updateUser = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
          return res.status(200).json({
            success:true,
            message:"User updated successfully",
            data:updateUser})
    }
    catch(error){
        return res.status(500).json({success:false,message:error.message})
    }
}