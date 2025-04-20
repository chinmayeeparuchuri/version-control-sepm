const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload'); // ✅ uses configured multer
const auth = require('../middleware/auth');
const fileController = require('../controllers/fileController');

// Use the upload middleware
router.post('/', auth, upload.single('file'), fileController.uploadFile);

module.exports = router;
