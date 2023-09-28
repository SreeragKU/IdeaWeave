import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';

import ENV from '../config.js';

let nodeConfig = {
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: ENV.GMAIL_EMAIL, // Replace with your Gmail email address
      pass: ENV.GMAIL_PASSWORD, // Replace with your Gmail password or an App Password if you have 2-Step Verification enabled
    }
}

let transporter = nodemailer.createTransport(nodeConfig);

let MailGenerator = new Mailgen({
    theme: "default",
    product: {
        name: "Mailgen",
        link: 'https://mailgen.js'
    }
})

export const registerMail = async (req, res) => {
    const { username, userEmail, text, subject } = req.body;

    // body of email
    var email = {
        body : {
            name: username,
            intro: text || 'Welcome to IdeaWeave! We\'re excited to have you on board.',
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        }
    }

    var emailBody = MailGenerator.generate(email);

    let message = {
        from: ENV.GMAIL_EMAIL,
        to: userEmail,
        subject : subject || "Signup Successful",
        html : emailBody
    }

    //send mail
    transporter.sendMail(message)
        .then(()=>{
            return res.status(201).json({msg: "You should receive an email from us."})
        })
        .catch(error => res.status(500).json({error}))
}
