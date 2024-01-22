import mongoose from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

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

const draftSchema = new Schema(
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
    commentCount: { type: Number, default: 0 },
    publishDate: { type: Date }, 
    status: { type: String, default: "draft" }, 
  },
  { timestamps: true },
);

export default mongoose.model("Draft", draftSchema);
