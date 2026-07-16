import jwt from 'jsonwebtoken';


export const isAuthenticated = async(req,res,next)=>{
    try{
       const token = req.cookies.token

       if(!token){
        return res.status(401).json({success:false,message:"Please login first"})
       }

       const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
       req.user = decoded
       next();
    }
    catch(error){
        return res.status(500).json({success:false,message:"Invalid Token"});
    }
}