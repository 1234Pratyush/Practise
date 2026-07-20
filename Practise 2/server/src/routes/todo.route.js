import express from 'express';
import { isAuthenticated } from '../middlewares/auth.middleware.js';

import {
  create,
  getAllTodo,
  deleteTodo,
} from "../controllers/todo.controller.js";
const router = express.Router();

router.post("/create", isAuthenticated,create);
router.get("/alltodo", isAuthenticated, getAllTodo);
router.delete("/deleteTodo/:id", isAuthenticated, deleteTodo);

export default router;

