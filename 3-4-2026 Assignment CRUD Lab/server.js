const express = require("express");
const mongoose = require("mongoose");
const Task = require("./models/Task");

const app = express();


app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/taskDB")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err));


app.post("/tasks", async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});


app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});


app.get("/tasks/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
});


app.put("/tasks/:id", async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedTask);
});



app.delete("/tasks/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});


app.listen(3000, () => {
  console.log("Server running on port 3000 🚀");
});