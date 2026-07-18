import express from 'express';
import { isAuthenticated } from '../middlewares/auth.middleware.js';

import {
  createUser,
  allUser,
  deleteUser,
  updateUser,
} from "../controllers/user.controller.js";

const router = express.Router();


router.post("/create", isAuthenticated,createUser);
router.get("/allUser",isAuthenticated, allUser);
router.delete("/delete/:id",isAuthenticated, deleteUser);
router.put("/update/:id", isAuthenticated,updateUser);

export default router