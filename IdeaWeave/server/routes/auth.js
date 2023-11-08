const express = require("express");
const router = express.Router();
const { requireSignin, isAdmin } = require("../middlewares");
const {
  signup,
  signin,
  forgotPassword,
  resetPassword,
  currentUser,
  users,
  toggleUserStatus,
  verifyOtp,
  sendOtp, 
  createUser,
} = require("../controllers/auth"); 

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/verify-otp", verifyOtp);
router.post("/send-otp", sendOtp);
router.get("/current-admin", requireSignin, isAdmin, currentUser);
router.get("/users", requireSignin, isAdmin, users);
router.put("/users/:userId/toggle", requireSignin, isAdmin, toggleUserStatus);
router.post("/create-user", requireSignin, isAdmin, createUser);

module.exports = router;
