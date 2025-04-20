const File = require('../models/File');
const path = require('path');

exports.uploadFile = async (req, res) => {
    try {
      console.log("📩 Upload request received");
  
      const { citizenId, description } = req.body;
  
      if (!req.file) {
        console.warn("⚠️ No file found in request");
        return res.status(400).json({ message: "No file uploaded" });
      }
  
      const newFile = new File({
        fileName: req.file.originalname,
        filePath: req.file.path,
        fileType: req.file.mimetype,
        citizen: citizenId,
        description,
      });
  
      await newFile.save();
      console.log("✅ File saved to DB:", newFile);
      res.status(201).json(newFile);
    } catch (err) {
      console.error("❌ Error uploading file:", err);
      res.status(500).json({ message: err.message });
    }
  };