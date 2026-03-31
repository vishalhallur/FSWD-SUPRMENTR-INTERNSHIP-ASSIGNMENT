let tasks = require("../models/taskModel");

// GET all
exports.getTasks = (req, res) => {
  res.json(tasks);
};

// GET one
exports.getTask = (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (!task) return res.send("Task not found");
  res.json(task);
};

// POST
exports.createTask = (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ error: "Title required" });
  }

  const newTask = {
    id: tasks.length + 1,
    title: req.body.title
  };

  tasks.push(newTask);
  res.json(newTask);
};

// PUT
exports.updateTask = (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (!task) return res.send("Task not found");

  task.title = req.body.title;
  res.json(task);
};

// DELETE
exports.deleteTask = (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.send("Task deleted");
};