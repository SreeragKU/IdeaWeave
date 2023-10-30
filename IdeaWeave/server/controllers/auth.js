const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { hashPassword, comparePassword } = require("../helpers/auth");
const nanoid = require("nanoid");
const nodemailer = require("nodemailer");
const { JWT_SECRET, EMAIL_FROM, EMAIL_APP_PASSWORD } = require("../config");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_FROM,
    pass: EMAIL_APP_PASSWORD,
  },
});

exports.sendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email || !email.trim() || !emailRegex.test(email)) {
      return res.json({
        error: "Valid email address is required",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser && !existingUser.completedRegistration) {
      // If the user exists and has not completed registration, delete the user data
      await existingUser.remove();
    }

    const generatedOtp = nanoid(5).toUpperCase();

    try {
      const user = await new User({
        email,
        resetCode: generatedOtp,
      }).save();

      const emailData = {
        from: EMAIL_FROM,
        to: email,
        subject: "Signup OTP",
        text: `Your OTP for signup: ${generatedOtp}`,
        html: `<p>Your OTP for signup: <strong>${generatedOtp}</strong></p>`,
      };

      await transporter.sendMail(emailData);

      res.json({
        success: true,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        error: "Failed to send OTP. Try again.",
      });
    }
  } catch (err) {
    console.error(err);
  }
};

exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        error: "User not found",
      });
    }

    if (user.resetCode !== otp) {
      return res.json({
        error: "Invalid OTP",
      });
    }

    user.resetCode = "";
    await user.save();

    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: "7d",
    });

    user.password = undefined;

    return res.json({
      token,
      user,
    });
  } catch (err) {
    console.log(err);
    return res.json({
      error: "Error. Try again.",
    });
  }
};

exports.signup = async (req, res) => {
  try {
    const { email, otp, name, password } = req.body;

    if (!email || !otp || !name || !password) {
      return res.json({
        error: "Please complete all registration stages",
      });
    }

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

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.json({
        error: "User not found. Please complete the previous stages.",
      });
    }

    if (!existingUser.isActive) {
      // Check if the user is disabled
      return res.json({
        error: "Account is disabled",
      });
    }

    existingUser.name = name;
    existingUser.password = await hashPassword(password);
    await existingUser.save();

    const token = jwt.sign({ _id: existingUser._id }, JWT_SECRET, {
      expiresIn: "7d",
    });

    existingUser.password = undefined;

    return res.json({
      token,
      user: existingUser,
    });
  } catch (err) {
    console.error(err);
    return res.json({
      error: "Error while saving user data. Try again.",
    });
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        error: "No user found",
      });
    }

    if (!user.isActive) { // Check if the user's account is disabled
      return res.json({
        error: "User is disabled. Please contact support for assistance.",
      });
    }

    // Check password
    const match = await comparePassword(password, user.password);

    if (!match) {
      return res.json({
        error: "Wrong password",
      });
    }

    // Create signed token
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
  const user = await User.findOne({ email });
  console.log("USER ===> ", user);
  if (!user) {
    return res.json({ error: "User not found" });
  }
  const resetCode = nanoid(5).toUpperCase();
  user.resetCode = resetCode;
  user.save();
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

exports.users = async (req, res) => {
  try {
    const all = await User.find().select('-password -secret  -resetCode');
    res.json(all);
  } catch (error) {
    console.log(error);
  }
};

const sendUserStatusNotification = async (user, isDisabled) => {
  const subject = isDisabled
    ? "Your Account Has Been Enabled"
    : "Your Account Has Been Disabled";

  const text = isDisabled
    ? "Your account has been enabled by the admin."
    : "Your account has been disabled by the admin. If you believe this is a mistake, please contact support for assistance.";

  const emailData = {
    from: EMAIL_FROM,
    to: user.email,
    subject,
    text: `Dear ${user.name},\n\n${text}\n\nSincerely,\nThe IdeaWeave Team`,
    html: `<p>Dear ${user.name},</p><p>${text}</p><p>Sincerely,<br>The IdeaWeave Team</p>`,
  };

  // Send email
  try {
    await transporter.sendMail(emailData);
  } catch (err) {
    console.log(err);
  }
};

exports.toggleUserStatus = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isDisabled = !user.isActive; // Toggle the isActive flag

    user.isActive = isDisabled;

    await user.save();

    // Send an email notification based on the user's status change
    sendUserStatusNotification(user, isDisabled);

    return res.json({ isActive: user.isActive });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error toggling user status" });
  }
};

