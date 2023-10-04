import express from "express";
const router = express.Router();

import {create} from "../controllers/category";

import { requireSignin, isAdmin } from "../middlewares";

router.post('/category', requireSignin, isAdmin, create);

export default router;
