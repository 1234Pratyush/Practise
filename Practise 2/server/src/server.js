import express from 'express';
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import authRouter from './routes/auth.route.js';
import todoRouter from './routes/todo.route.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());

const PORT=process.env.PORT

app.use('/api/auth',authRouter);
app.use("/api/todo", todoRouter);

const startServer = async()=>{
    try{
       await connectDB();
    app.listen(PORT,()=>{
        console.log("Server is running on port",PORT)
    })
    }
    catch(error){
        console.log("Server connection error : ",error.message)
    }
}

startServer();