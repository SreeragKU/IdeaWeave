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
