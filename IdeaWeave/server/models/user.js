const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      min: 8,
      max: 64,
    },
    role: {
      type: String,
      default: "Reader",
    },
    image: {
      type: ObjectId,
      ref: "Media",
    },
    website: {
      type: String,
      default: "",
    },
    resetCode: {
      type: String,
      default: "",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    posts: [
      {
        type: ObjectId,
        ref: "Post",
      },
    ],
    library: [
      {
        type: ObjectId,
        ref: "Post",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
