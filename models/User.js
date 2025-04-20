// models/User.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uniqueId: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false, // not required for emergency users maybe
  },
  role: {
    type: String,
    enum: ["admin", "user", "emergency"],
    required: true,
  },
  name: String,
  email: String,
});

module.exports = mongoose.model("User", userSchema);
