import express from "express";
const router = express.Router();
import {create} from "../controllers/category";

router.post('/category', create);

export default router;
