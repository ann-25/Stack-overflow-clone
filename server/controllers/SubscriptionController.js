import subscriptions from "../models/subscriptionsModel.js";

export const subscriptionControl = async (req, res) => {
  const { id, amount } = req.body;
  try {
    const subscribedOrNot = await subscriptions.findOne({ id });

    if (subscribedOrNot.amount != amount) {
      const subscribedData = await subscriptions.findByIdAndUpdate(id, {
        $set: { amount: amount, subcription: "true" },
      });

      res.status(200).json({ result: subscribedData });
    } else {
      res.status(500).json({ result: "something Wrong" });
    }
  } catch (error) {
    console.log(error);
  }
};
export const subcriptionCheckControll = async (req, res) => {
  const { email } = req.body;

  try {
    const subscribedOrNot = await subscriptions.findOne({ email });
    if (subscribedOrNot) {
      res.status(200).json({ result: subscribedOrNot });
    } else {
      console.log("working");
    }
  } catch (error) {
    console.log("not subscribed");
  }
};
