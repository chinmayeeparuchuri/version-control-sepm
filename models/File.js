const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  fileName: { type: String, required: true },
  filePath: { type: String, required: true },
  fileType: { type: String },
  uploadDate: { type: Date, default: Date.now },
  description: { type: String },
  citizen: { type: mongoose.Schema.Types.ObjectId, ref: "Citizen", required: true }
});

module.exports = mongoose.model("File", fileSchema);

