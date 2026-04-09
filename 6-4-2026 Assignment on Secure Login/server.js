const express = require("express");
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

// connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/authDB")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err));

// use routes
app.use("/api", authRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000 🚀");
});