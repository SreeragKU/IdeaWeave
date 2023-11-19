import mongoose from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

// Define chapter schema
const chapterSchema = new Schema(
  {
    chapter: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    content: {
      type: String, 
      required: true,
    },
  },
  { _id: false }
);

// Define volume schema
const volumeSchema = new Schema(
  {
    volume: {
      type: String,
      required: true,
    },
    chapters: [chapterSchema],
  },
  { _id: false }
);

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String, 
      required: true,
    },
    volumes: [volumeSchema],
    categories: [{ type: ObjectId, ref: "Category" }],
    published: { type: Boolean, default: true },
    postedBy: { type: ObjectId, ref: "User" },
    coverImage: { type: ObjectId, ref: "Media" },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Post", postSchema);
