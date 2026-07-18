import jwt from 'jsonwebtoken';
import Auth from '../models/auth.model.js';

export const isAuthenticated = async(req,res,next)=>{
    try{
     const token = req.cookies.token;

     if(!token){
        return res.status(401).json({success:false,message:"Please login first"});

     }

     const decoded = jwt.verify(token,process.env.SECRET_KEY)
     req.user = await Auth.findById(decoded._id).select("-password");
     if (!user) {
       return res.status(401).json({
         success: false,
         message: "User not found",
       });
     }
     req.user= user;
     next();
    }
    catch(error){
        return res.status(401).json({success:false,message:"Invalid or expired token"})
    }
}