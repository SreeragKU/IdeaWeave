// server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
require('dotenv').config();
const { DATABASE } = require("./config");
import categoryRoutes from "./routes/category";
import uploadRoutes from "./routes/post";
import websiteRoutes from "./routes/website";
const authRoutes = require("./routes/auth");

const app = express();

// Connect to the database
mongoose
  .connect(DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.error("DB CONNECTION ERROR:", err);
    process.exit(1); // Exit the application on DB connection failure
  });

// Middleware
app.use(express.json({ limit: "4mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

// Route Middlewares
app.use("/api", authRoutes);
app.use("/api", categoryRoutes);
app.use("/api", uploadRoutes);
app.use("/api", websiteRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
