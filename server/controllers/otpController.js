import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const serverOtp = async (req, res) => {
  const { email } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      service: "gmail",
      port: 587,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });
    const newOtp = Math.floor(1000 + Math.random() * 9000);

    await transporter.sendMail({
      from: "sudhigalaxy2@gmail.com",
      to: email,
      subject: "ChatBot Email Verification",
      html: `<p>Enter ${newOtp} in your App to Verify</p> <p>Expires in 2 mintutes </p>`,
    });
    console.log("email sent successfully");
    const result = {
      email,
      otp: newOtp,
    };
    const token = jwt.sign({ email: result.email, id: result.otp }, "test", {
      expiresIn: "120s",
    });
    res.status(200).json({ result: result, token });
  } catch (error) {
    console.log("email not sent!");
    console.log(error);
    return error;
  }
};
