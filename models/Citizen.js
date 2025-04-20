const mongoose = require("mongoose");

const citizenSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  dob: { type: Date, required: true },
  idNumber: { type: String, required: true, unique: true }, // Aadhaar or PAN
  uploadedFiles: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }]
});

module.exports = mongoose.model("Citizen", citizenSchema);
