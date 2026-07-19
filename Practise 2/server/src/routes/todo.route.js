import express from 'express';
import { isAuthenticated } from '../middlewares/auth.middleware.js';

import { create } from '../controllers/todo.controller.js';
const router = express.Router();

router.post("/create", isAuthenticated,create);

export default router;

