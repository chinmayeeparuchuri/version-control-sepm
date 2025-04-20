// server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require('./routes/auth');
const citizenRoutes = require('./routes/citizens');
const fileRoutes = require('./routes/files');

const app = express();
const PORT = process.env.PORT || 5001;

// TEMP DEBUG
console.log("🔐 JWT_SECRET loaded as:", process.env.JWT_SECRET);

// Logging incoming requests
app.use((req, res, next) => {
  console.log(`➡️  ${req.method} ${req.url}`);
  next();
});

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/auth', authRoutes);
app.use('/api/citizens', citizenRoutes);
app.use('/api/upload', fileRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("✅ API is running...");
});

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected at:", process.env.MONGO_URI);
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });