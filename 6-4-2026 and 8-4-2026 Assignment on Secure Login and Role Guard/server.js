const express = require("express");
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedRoutes");

const app = express();

app.use(express.json());

// MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/roleDB")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err));

// routes
app.use("/api", authRoutes);
app.use("/api", protectedRoutes);

// start server
app.listen(3000, () => {
  console.log("Server running on port 3000 🚀");
});