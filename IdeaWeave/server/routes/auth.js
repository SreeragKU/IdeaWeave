const express = require("express");
const router = express.Router();
import { requireSignin, isAdmin } from "../middlewares";

import {
  signup,
  signin,
  forgotPassword,
  resetPassword,
  currentUser,
} from "../controllers/auth";

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.get("/current-admin", requireSignin, isAdmin, currentUser);

module.exports = router;
