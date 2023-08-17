import express from "express";
import {
  subscriptionControl,
  subcriptionCheckControll,
} from "../controllers/SubscriptionController.js";
const router = express.Router();

router.post("/subscribed", subscriptionControl);
router.post("/subscriptionCheck", subcriptionCheckControll);

export default router;
