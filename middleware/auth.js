const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("🔐 Incoming Authorization Header:", authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Missing token" });
  }

  const token = authHeader.split(" ")[1];
  try {
    console.log("🔑 Verifying with secret:", process.env.JWT_SECRET);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("✅ Token verified:", decoded);
    req.user = decoded;
    next();
  } catch (err) {
    console.error("❌ Token verification failed:", err.message);
    return res.status(401).json({ message: "Invalid Token" });
  }
};
