const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { hashPassword, comparePassword } = require("../helpers/auth");
const nanoid = require("nanoid");
const nodemailer = require("nodemailer");
const { JWT_SECRET, EMAIL_FROM, EMAIL_APP_PASSWORD } = require("../config");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_FROM, 
    pass: EMAIL_APP_PASSWORD, 
  },
});

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Password validation
    if (
      !password ||
      password.length < 8 ||
      !/[0-9]/.test(password) ||
      !/[^A-Za-z0-9]/.test(password) ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password)
    ) {
      return res.json({
        error:
          "Password must be 8+ characters with numbers, special characters, uppercase, and lowercase letters.",
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
      console.error(err);
    }
  } catch (err) {
    console.error(err);
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

  // prepare email using EMAIL_FROM from config.js
  const emailData = {
    from: EMAIL_FROM,
    to: user.email,
    subject: "Password Reset Request",
    text: `Dear ${user.name},\n\n`
        + "We received a request to reset your password. Please use the following code to reset your password:\n\n"
        + `Reset Code: ${resetCode}\n\n`
        + "If you did not make this request, please disregard this email. Your account's security is important to us.\n\n"
        + "Sincerely,\n"
        + "The IdeaWeave Team", 
    html: `<p>Dear ${user.name},</p>
          <p>We received a request to reset your password. Please use the following code to reset your password:</p>
          <p><strong>Reset Code:</strong> ${resetCode}</p>
          <p>If you did not make this request, please disregard this email. Your account's security is important to us.</p>
          <p>Sincerely,<br>The IdeaWeave Team</p>`, 
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
    // Password validation
    if (
      !password ||
      password.length < 8 ||
      !/[0-9]/.test(password) ||
      !/[^A-Za-z0-9]/.test(password) ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password)
    ) {
      return res.json({
        error:
          "Password must be 8+ characters with numbers, special characters, uppercase, and lowercase letters.",
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

exports.currentUser = async (req, res) => {
  try {
    //const user = await User.findById(req.user._id);
    res.json({ ok: true });
  } catch (error) {
    console.log(error);
  }
};
