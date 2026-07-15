import express from 'express';
import dotnev from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import userRoutes from './routes/user.routes.js';
import cors from 'cors';


const app = express();
dotnev.config();
app.use(cors({
    origin: "http://localhost:5173/",
}));
app.use(express.json());
app.use(cookieParser());

const PORT=process.env.PORT || 3000

app.use("/api/users",userRoutes);

const startServer = async()=>{
    try{
        await connectDB();
   app.listen(PORT,()=>{
    console.log("server is running on port:",PORT);
   })
    }
    catch(error){
        console.log("Server connection error : ",error.message);
    }
}

startServer()