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

module.exports = router;
