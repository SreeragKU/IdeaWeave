import mongoose from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
      max: 20000,
    },
    postedBy: { type: ObjectId, ref: "User" },
    postId: { type: ObjectId, ref: "Post", autopopulate: { select: "commentCount" } }, // Update to include autopopulate
  },
  { timestamps: true }
);

// Middleware to update the associated post's comment count
commentSchema.post("save", async function (doc) {
  try {
    const Post = mongoose.model("Post");
    const post = await Post.findOneAndUpdate(
      { _id: doc.postId },
      { $inc: { commentCount: 1 } },
      { new: true }
    );
    if (!post) {
      throw new Error("Associated post not found");
    }
  } catch (err) {
    console.error("Error updating comment count:", err);
  }
});

commentSchema.plugin(require("mongoose-autopopulate"));

export default mongoose.model("Comment", commentSchema);
