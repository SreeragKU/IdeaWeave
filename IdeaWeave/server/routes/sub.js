const express = require("express");
const router = express.Router();
const { requireSignin } = require("../middlewares");
const { stripe } = require("../helpers/stripe");
const User = require("../models/user");
const nodemailer = require("nodemailer");

const SUBSCRIBER_ROLE = "Subscriber";

const updateUserRole = async (userId, newRole) => {
  try {
    await User.findByIdAndUpdate(userId, { role: newRole });
  } catch (error) {
    console.error("Error updating user role:", error);
  }
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

router.post("/session", requireSignin, async (req, res) => {
  try {
    const { priceId, userId, email } = req.body;
    let user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (!user.stripeCustomerId) {
      const customer = await stripe.customers.create({
        email: user.email,
      }, {
        apiKey: process.env.STRIPE_SECRET_KEY,
      });

      user.stripeCustomerId = customer.id;
    }

    user.subscriptionPlan = priceId;

    await user.save();

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      customer: user.stripeCustomerId,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/plans`,
    }, {
      apiKey: process.env.STRIPE_SECRET_KEY,
    });

    if (session && session.id) {
      await updateUserRole(userId, SUBSCRIBER_ROLE);

      // Send success email
      const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: user.email,
        subject: 'Subscription Successful',
        text: 'Thank you for subscribing. Your subscription is now active.',
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log('Success email sent successfully');
      } catch (error) {
        console.error('Error sending success email:', error);
      }
    }

    return res.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error("Error creating Stripe session:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});


router.get('/prices', requireSignin, async (req, res) => {
  try {
    const prices = await stripe.prices.list({
      apiKey: process.env.STRIPE_SECRET_KEY
    });
    return res.json(prices);
  } catch (error) {
    console.error("Error fetching prices:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get('/subscription/:userId', requireSignin, async (req, res) => {
  try {
    const userId = req.params.userId;
    
    const user = await User.findById(userId);

    if (!user || !user.stripeCustomerId) {
      return res.status(404).json({ error: "User or subscription not found" });
    }

    // Retrieve customer's subscriptions
    const subscriptions = await stripe.subscriptions.list({
      customer: user.stripeCustomerId,
    });

    if (subscriptions.data.length === 0) {
      return res.status(404).json({ error: "No active subscriptions found for the user" });
    }

    const currentSubscription = subscriptions.data[0];

    // Retrieve invoice details
    const invoice = await stripe.invoices.retrieve(currentSubscription.latest_invoice);

    const receiptDetails = {
      receiptNumber: invoice.number,
      amountPaid: invoice.amount_paid,
      currency: invoice.currency,
      paymentMethod: invoice.payment_intent ? invoice.payment_intent.payment_method : null,
      paymentStatus: invoice.status,
      paymentDate: new Date(invoice.created * 1000), 
    };

    const currentPeriodEnd = currentSubscription.current_period_end;
    const currentTime = Math.floor(Date.now() / 1000); 
    const remainingTimeInSeconds = currentPeriodEnd - currentTime;
    const remainingTimeInDays = Math.ceil(remainingTimeInSeconds / (24 * 60 * 60));

    return res.json({ remainingTimeInDays, receiptDetails });
  } catch (error) {
    console.error("Error retrieving subscription details:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;

