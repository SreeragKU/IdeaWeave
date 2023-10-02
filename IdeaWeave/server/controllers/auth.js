const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { hashPassword, comparePassword } = require("../helpers/auth");
const nanoid = require("nanoid");
const nodemailer = require("nodemailer");
const { JWT_SECRET } = require("../config"); 


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ideaweavep@gmail.com",
    pass: "ideaweave@20",
  },
});

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!password || password.length < 8) {
      return res.json({
        error: "Password is required and should be at least 8 characters long",
      });
    }
    if (!/[0-9]/.test(password)) {
      return res.json({
        error: "Password must contain at least one number",
      });
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
      return res.json({
        error: "Password must contain at least one special character",
      });
    }
    if (!/[A-Z]/.test(password)) {
      return res.json({
        error: "Password must contain at least one uppercase letter",
      });
    }
    if (!/[a-z]/.test(password)) {
      return res.json({
        error: "Password must contain at least one lowercase letter",
      });
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email || !emailRegex.test(email)) {
      return res.json({
        error: "Valid email address is required",
      });
    }

    const existEmail = await User.findOne({ email });
    if (existEmail) {
      return res.json({
        error: "Email is already taken",
      });
    }

    if (name) {
      const existName = await User.findOne({ name });
      if (existName) {
        return res.json({
          error: "Username is already taken",
        });
      }
      // Check for spaces in the name
      if (name.includes(" ")) {
        return res.json({
          error: "Username cannot contain spaces",
        });
      }
    }

    // Check for spaces in the email
    if (email.includes(" ")) {
      return res.json({
        error: "Email cannot contain spaces",
      });
    }

    const hashedPassword = await hashPassword(password);

    try {
      const user = await new User({
        name,
        email,
        password: hashedPassword,
      }).save();

      const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
        expiresIn: "7d",
      });

      const { password, ...rest } = user._doc;
      return res.json({
        token,
        user: rest,
      });
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check if our db has user with that email
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "No user found",
      });
    }
    // check password
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.json({
        error: "Wrong password",
      });
    }
    // create signed token
    const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
      expiresIn: "7d",
    });

    user.password = undefined;
    user.secret = undefined;
    res.json({
      token,
      user,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try again.");
  }
};

exports.forgotPassword = async (req, res) => {
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
  user.save();

  // prepare email
  const emailData = {
    from: "ideaweavep@gmail.com",
    to: user.email,
    subject: "Password reset code",
    text: `Your password reset code is: ${resetCode}`,
  };

  // send email
  try {
    await transporter.sendMail(emailData);
    res.json({ ok: true });
  } catch (err) {
    console.log(err);
    res.json({ ok: false });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { email, password, resetCode } = req.body;
    // find user based on email and resetCode
    const user = await User.findOne({ email, resetCode });
    // if user not found
    if (!user) {
      return res.json({ error: "Email or reset code is invalid" });
    }
    // if password is short
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be 6 characters long",
      });
    }
    // hash password
    const hashedPassword = await hashPassword(password);
    user.password = hashedPassword;
    user.resetCode = "";
    user.save();
    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
  }
};
