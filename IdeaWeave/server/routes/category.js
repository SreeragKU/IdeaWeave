import express from "express";
const router = express.Router();

import {create, category, removeCategory, updateCategory} from "../controllers/category";

import { requireSignin, isAdmin } from "../middlewares";

router.post('/category', requireSignin, isAdmin, create);
router.get('/category', category);
router.delete('/category/:slug', requireSignin, isAdmin, removeCategory);
router.put('/category/:slug', requireSignin, isAdmin, updateCategory);

export default router;
