import Website from "../models/website";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

export const contact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const emailData = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_FROM, 
      subject: "Email received from contact form",
      html: `
        <h3>Contact form message</h3>
        <p><u>Name</u></p>
        <p>${name}</p>
        <p><u>Email</u></p>
        <p>${email}</p>
        <p><u>Message</u></p>
        <p>${message}</p>
      `,
    };

    try {
      const data = await transporter.sendMail(emailData);
      console.log("Email sent:", data);
      res.json({ ok: true });
    } catch (err) {
      console.error(err);
      res.json({ ok: false });
    }
  } catch (err) {
    console.error(err);
    res.json({ ok: false });
  }
};

export const createPage = async (req, res) => {
  try {
    const { page } = req.body;
    const found = await Website.findOne({ page });

    if (found) {
      const updated = await Website.findOneAndUpdate({ page }, req.body, {
        new: true,
      });
      return res.json(updated);
    } else {
      const created = await new Website(req.body).save();
      return res.json(created);
    }
  } catch (err) {
    console.log(err);
  }
};

export const getPage = async (req, res) => {
  try {
    const { page } = req.params;
    const found = await Website.findOne({ page }).populate("fullWidthImage");
    return res.json(found);
  } catch (err) {
    console.log(err);
  }
};