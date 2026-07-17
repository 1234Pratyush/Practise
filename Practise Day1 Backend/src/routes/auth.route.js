import express from 'express';
import { signup, login, logout } from "../controllers/auth.controller.js";

const authroutes = express.Router();

authroutes.post("/signup", signup);
authroutes.post("/login", login);
authroutes.post("/logout", logout);

export default authroutes

