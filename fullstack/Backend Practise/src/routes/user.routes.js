import express from "express";

import {
  createUser,
  getAllUsers,
  deleteUser,
  updateUser,
  getUserById
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/create", createUser);
router.get("/allUsers", getAllUsers);
router.get("/getUser/:id", getUserById);
router.delete("/delete/:id", deleteUser);
router.put("/update/:id",updateUser);

export default router;
