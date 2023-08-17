import express from "express";
import { createOrderId } from "../controllers/orderController.js";
const router = express.Router();

router.post("/createOrder", createOrderId);

export default router;
