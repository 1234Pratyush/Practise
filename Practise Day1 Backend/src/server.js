import express from "express";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import dotenv from 'dotenv';


dotenv.config();
const app = express();

app.use(cookieParser());
app.use(express.json());

const PORT = process.env.PORT || 3000;

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
