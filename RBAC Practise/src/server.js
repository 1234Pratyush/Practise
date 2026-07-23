import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRouter from "./routes/user.route.js";

dotenv.config();
const app = express();

app.use(cookieParser());
app.use(express.json());

app.use("/api/user",userRouter);

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
