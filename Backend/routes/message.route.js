import express from "express";
import { isAuthenticated } from "../middleware/auth.js";
import {
  deleteMessage,
  getAllMessages,
  sendMessage,
} from "../controllers/message.controller.js";

const router = express.Router();

router.post("/send", sendMessage);
router.delete("/delete/:id", isAuthenticated, deleteMessage);
router.get("/getall", isAuthenticated, getAllMessages);

export default router;
