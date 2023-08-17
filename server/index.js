import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/user.js";
import questionRoutes from "./routes/Questions.js";
import answerRoutes from "./routes/Answers.js";
import postRoutes from "./routes/post.js";
import orders from "./routes/orders.js";
import subscibe from "./routes/subscriptionRoute.js";
import otpRoutes from "./routes/otpRoutes.js";
import { Configuration, OpenAIApi } from "openai";

//open ai config
const app = express(); // now app is an express server.
dotenv.config();
const config = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});

const openai = new OpenAIApi(config);
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.options("*", cors());
mongoose.set("strictQuery", true);

app.get("/", (req, res) => {
  //request and response. No condition required.
  res.send("This is a stack overflow clone API");
});

app.use("/user", userRoutes); //userRouter is the middleware
app.use("/questions", questionRoutes);
app.use("/answer", answerRoutes);
app.use("/post", postRoutes);
app.use("/orderId", orders);
app.use("/subscriptions", subscibe);
app.use("/chat", otpRoutes);

app.post("/chat", async (req, res) => {
  const { prompt } = req.body;
  // const newInput = JSON.stringify(inputPrompt);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 170,
    temperature: 0,
    prompt: prompt,
  });
  res.send(response.data.choices[0].text);
});
/* API(Application Programming Interface) for authentication */

/*Connection */
const PORT = process.env.PORT || 5000;

const DATABASE_URL = process.env.CONNECTION_URL;

mongoose
  .connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));

//Now the server is ready to run
