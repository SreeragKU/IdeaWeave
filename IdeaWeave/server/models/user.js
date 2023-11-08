const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
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
    default: "Subscriber",
  },
  image: {
    public_id: "",
    url: "",
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
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
