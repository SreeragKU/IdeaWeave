import express from "express";
import formidable from "express-formidable";
const router = express.Router();

// middleware
import {
  requireSignin,
  isAdmin,
  canCreateRead,
  canDeleteMedia,
  canUpdateDeletePost,
  canUpdateDeleteComment,
} from "../middlewares";
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
  createComment,
  comments,
  commentCount,
  updateComment,
  removeComment,
  userComments,
  getNumbers,
  postsPage,
  createDraft,
  drafts,
  draftPage,
  removeDraft,
  editDraft,
  draftsByAuthor,
  singleDraft,
  createDraftPost,
  addToLibrary,
  getLibrary,
  hideComment,
  allComments
} from "../controllers/post";

router.post("/upload-image", requireSignin, canCreateRead, uploadImage);
router.post("/upload-image-file", formidable(), requireSignin, uploadImageFile);
router.post("/create-post", requireSignin, canCreateRead, createPost);
router.post("/create-draft-post/:postId",  requireSignin, canCreateRead, createDraftPost)
router.post("/create-draft", requireSignin, canCreateRead, createDraft);
router.get("/drafts/:page", drafts);
router.get("/drafts-page/:page", draftPage);
router.get("/posts/:page", posts);
router.get("/posts-page/:page", postsPage);
router.get("/post/:slug", singlePost);
router.get("/draft/:slug", singleDraft);
router.get("/media", requireSignin, canCreateRead, media);
router.get("/post-by-author", requireSignin, postByAuthor);
router.get("/draft-by-author", requireSignin, draftsByAuthor);
router.delete("/media/:id", requireSignin, canDeleteMedia, removeMedia);
router.delete("/post/:postId", requireSignin, canUpdateDeletePost, removePost);
router.delete("/draft/:postId", requireSignin, canUpdateDeletePost, removeDraft);
router.put("/edit-post/:postId", requireSignin, canUpdateDeletePost, editPost);
router.put("/edit-draft/:postId", requireSignin, canUpdateDeletePost, editDraft);
router.get("/post-count", postCount);
router.get("/posts-for-admin", requireSignin, isAdmin, postsForAdmin);
router.post("/comment/:postId", requireSignin, createComment);
router.put('/hide-comment/:id', requireSignin, isAdmin, hideComment);
router.post("/add-to-library/:postId", requireSignin, addToLibrary);
router.get("/get-library/:userId", requireSignin, getLibrary);
router.get("/comments/:page", requireSignin, isAdmin, comments);
router.get("/all-comments/:page", requireSignin, isAdmin, allComments);
router.get("/user-comments", requireSignin, userComments);
router.get("/comment-count", commentCount);
router.get('/numbers', getNumbers)
router.put(
  "/comment/:commentId",
  requireSignin,
  canUpdateDeleteComment,
  updateComment
);
router.delete(
  "/comment/:commentId",
  requireSignin,
  canUpdateDeleteComment,
  removeComment
);

export default router;
