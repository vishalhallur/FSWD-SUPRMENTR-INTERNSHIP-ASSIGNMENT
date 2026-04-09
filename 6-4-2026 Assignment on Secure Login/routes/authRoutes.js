const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

// SECRET KEY
const SECRET = "mysecretkey";

// ================= SIGNUP =================
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword
  });

  res.json({ message: "User registered ✅" });
});

// ================= LOGIN =================
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.json({ message: "User not found ❌" });

  // compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.json({ message: "Wrong password ❌" });

  // create token
  const token = jwt.sign({ id: user._id }, SECRET);

  res.json({ message: "Login successful ✅", token });
});

module.exports = router;