const express = require("express");
const router = express.Router();
import { requireSignin, isAdmin } from "../middlewares";

import {
  signup,
  signin,
  forgotPassword,
  resetPassword,
  currentUser,
  users,
  deleteUser,
} from "../controllers/auth";

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.get("/current-admin", requireSignin, isAdmin, currentUser);
router.get('/users', requireSignin, isAdmin, users);
router.delete('/user/:userId', requireSignin, isAdmin, deleteUser);

module.exports = router;
