import User from "../model/user.model.js";


export const signup = async(req,res)=>{
    try{
      const {name,email,password} = req.body;
      if(!name || !email || !password){
        return res.status(400).json({success:false,message:"All fields are required"})
      }

      

    }
    catch(error){
        return res.status(500).json({status:false,message:error.message});
    }
}