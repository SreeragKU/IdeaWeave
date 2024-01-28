import expressJwt from "express-jwt";
import config from "../config";
import User from "../models/user";
import Post from "../models/post";
import Media from "../models/media";
import Comment from "../models/comment";

export const requireSignin = expressJwt({
  secret: config.JWT_SECRET,
  algorithms: ['HS256'],
  getToken: function fromHeaderOrQuerystring(req) {
      if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
          return req.headers.authorization.split(' ')[1];
      } else if (req.query && req.query.token) {
          return req.query.token;
      }
      return null;
  }
});

export const checkUserRole = (requiredRole) => async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);

    if (user.role !== requiredRole) {
      return res.status(403).send("Unauthorized");
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

export const isAdmin = checkUserRole("Admin");
export const isAuthor = checkUserRole("Author");
export const isSubscriber = checkUserRole("Subscriber");

export const canCreateRead = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    switch (user.role) {
      case "Admin":
        next();
        break;
      case "Author":
        next();
        break;
      default:
        return res.status(403).send("Unauthorized");
    }
  } catch (err) {
    console.log(err);
  }
};

export const canUpdateDeletePost = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    const post = await Post.findById(req.params.postId);
    switch (user.role) {
      case "Admin":
        next();
        break;
      case "Author":
        if (post.postedBy.toString() !== user._id.toString()) {
          return res.status(403).send("Unauthorized");
        } else {
          next();
        }
        break;
      default:
        return res.status(403).send("Unauthorized");
    }
  } catch (err) {
    console.log(err);
  }
};

export const canDeleteMedia = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    const media = await Media.findById(req.params.id);
    switch (user.role) {
      case "Admin":
        next();
        break;
      case "Author":
        if (media.postedBy.toString() !== req.user._id.toString()) {
          return res.status(403).send("Unauthorized");
        } else {
          next();
        }
        break;
    }
  } catch (err) {
    console.log(err);
  }
};

export const canUpdateDeleteComment = async (req, res, next) => {
  try {
    const { commentId } = req.params;
    const comment = await Comment.findById(commentId);

    const user = await User.findById(req.user._id);

    switch (user.role) {
      case "Admin":
        next();
        break;
      case "Author":
        if (comment.postedBy.toString() === req.user._id.toString()) {
          next();
        }
        break;
      case "Subscriber":
        if (comment.postedBy.toString() === req.user._id.toString()) {
          next();
        }
        break;
      default:
        return res.status(403).send("Unauthorized");
    }
  } catch (err) {
    console.log(err);
  }
};
