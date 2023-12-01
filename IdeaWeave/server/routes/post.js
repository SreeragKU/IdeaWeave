import express from "express";
import formidable from "express-formidable";
const router = express.Router();

// middleware
import { requireSignin, isAdmin, canCreateRead, canDeleteMedia, canUpdateDeletePost} from "../middlewares";
// controllers
import {
  uploadImage,
  createPost,
  posts,
  uploadImageFile,
  media,
  removeMedia,
  singlePost, 
  removePost,
  editPost,
  postByAuthor,
  postCount,
  postsForAdmin,
} from "../controllers/post";

router.post("/upload-image", requireSignin, canCreateRead, uploadImage);
router.post(
  "/upload-image-file",
  formidable(),
  requireSignin,
  uploadImageFile,
);
router.post("/create-post", requireSignin, canCreateRead, createPost);
router.get("/posts/:page", posts);
router.get("/post/:slug", singlePost);
router.get("/media", requireSignin, canCreateRead, media);
router.get("/post-by-author", requireSignin, postByAuthor);
router.delete("/media/:id", requireSignin, canDeleteMedia, removeMedia);
router.delete("/post/:postId", requireSignin, canUpdateDeletePost, removePost);
router.put("/edit-post/:postId", requireSignin, canUpdateDeletePost, editPost);
router.get("/post-count", postCount);
router.get("/posts-for-admin", requireSignin, isAdmin, postsForAdmin);

export default router;