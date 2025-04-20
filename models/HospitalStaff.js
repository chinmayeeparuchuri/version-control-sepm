const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const hospitalStaffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  hospitalName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["doctor", "admin", "staff"], default: "staff" }
});

// Hash password before saving
hospitalStaffSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("HospitalStaff", hospitalStaffSchema);
