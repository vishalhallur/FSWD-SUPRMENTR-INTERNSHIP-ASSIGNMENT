const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");
const checkRole = require("../middleware/roleMiddleware");

// USER route
router.get("/user", verifyToken, (req, res) => {
  res.json({ message: "Welcome User ✅" });
});

// ADMIN route
router.get("/admin", verifyToken, checkRole("admin"), (req, res) => {
  res.json({ message: "Welcome Admin 👑" });
});

module.exports = router;