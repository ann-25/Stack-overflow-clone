import Razorpay from "razorpay";
export const createOrderId = async (req, res) => {
  const options = req.body;
  try {
    const instance = new Razorpay({
      key_id: process.env.KEY_ID,
      key_secret: process.env.KEY_SECRET,
    });
    instance.orders.create(options, function (err, order) {
      res.status(200).json({ result: order.id });
    });
  } catch (error) {
    res.status(500).json("something went wrong...at Creating order");
  }
};
