import User from "../models/user";
import { hashPassword, comparePassword } from "../helpers/auth";
import jwt from "jsonwebtoken";
import nanoid from "nanoid";
import nodemailer from "nodemailer";

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "Gmail", // Use Gmail as the email service
  auth: {
    user: "ideaweave.official@gmail.com", // Your Gmail email address
    pass: "ideaweave@20", // Your Gmail password
  },
});

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  // find user by email
  const user = await User.findOne({ email });
  console.log("USER ===> ", user);
  if (!user) {
    return res.json({ error: "User not found" });
  }
  // generate code
  const resetCode = nanoid(5).toUpperCase();
  // save to db
  user.resetCode = resetCode;
  await user.save(); // Make sure to use await here to wait for the user to be saved
  // prepare email
  const emailData = {
    from: "ideaweave.official@gmail.com",
    to: user.email,
    subject: "Password reset code",
    text: `Your password reset code is: ${resetCode}`, // Plain text message
    // html: "<h1>Your password reset code is: {resetCode}</h1>", // HTML version
  };
  // send email
  try {
    const info = await transporter.sendMail(emailData);
    console.log("Email sent: %s", info.messageId);
    res.json({ ok: true });
  } catch (err) {
    console.error("Error sending email:", err);
    res.json({ ok: false });
  }
};

export const signup = async (req, res) => {
  try {
    // Your signup logic here...
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const signin = async (req, res) => {
  try {
    // Your signin logic here...
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const resetPassword = async (req, res) => {
  try {
    // Your resetPassword logic here...
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};