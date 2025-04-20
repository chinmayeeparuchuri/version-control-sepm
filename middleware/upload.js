const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadDir = path.join(__dirname, '..', 'uploads');

// Ensure uploads directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
  console.log("📁 'uploads' folder created");
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

module.exports = upload;
