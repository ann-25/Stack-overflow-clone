import express from "express";
import { serverOtp } from "../controllers/otpController.js";
const router = express.Router();
router.post("/otp", serverOtp);
export default router;
