import express from "express";
import formidable from "express-formidable";
const router = express.Router();

// middleware
import { requireSignin, isAdmin } from "../middlewares";
// controllers
import {
  uploadImage,
  createPost,
  posts,
  uploadImageFile,
  media,
  removeMedia,
} from "../controllers/post";

router.post("/upload-image", requireSignin, isAdmin, uploadImage);
router.post("/create-post", requireSignin, isAdmin, createPost);
router.post(
  "/upload-image-file",
  formidable(),
  requireSignin,
  isAdmin,
  uploadImageFile
);
router.get("/posts", posts);
router.get("/media", requireSignin, isAdmin, media);
router.delete("/api/media/:id", requireSignin, isAdmin, removeMedia);
export default router;
