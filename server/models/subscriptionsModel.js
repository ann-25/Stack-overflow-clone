import mongoose from "mongoose";

const subscriptionsSchema = mongoose.Schema(
  {
    email: { type: String, required: true },
    joinedOn: { type: Date, default: Date.now },
    amount: { type: String, required: true },
    subcription: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("subscriptions", subscriptionsSchema);
