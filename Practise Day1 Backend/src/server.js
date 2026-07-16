import express from "express";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'


dotenv.config();
const app = express();

app.use(cookieParser());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api/users",userRoutes);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log("server is running on port:", PORT);
    });
  } catch (error) {
    console.log("Server connection error : ", error.message);
  }
};

startServer();
