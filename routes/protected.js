// routes/protected.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");

// Example protected route
router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({
    message: `Welcome, ${req.user.role} with ID ${req.user.id}`,
    success: true,
  });
});

module.exports = router;
