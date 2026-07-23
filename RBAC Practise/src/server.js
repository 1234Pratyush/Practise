import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
const app = express();

app.use(cookieParser());
app.use(express.json());

const PORT = process.env.PORT;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running  on port : ${PORT}`);
    });
  } catch (error) {
    console.log("Server connection error : ", error.message);
  }
};

startServer();
