const express = require("express");
const router = express.Router();


// Import your authentication controllers
import { signup, signin, forgotPassword, resetPassword } from "../controllers/auth";

// Define your authentication routes
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

module.exports = router;
