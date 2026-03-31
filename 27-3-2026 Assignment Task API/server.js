const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.json());

let tasks = [
  { id: 1, title: "Learn React" },
  { id: 2, title: "Learn Node" }
];

// GET all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// GET single task
app.get("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (!task) return res.send("Task not found");
  res.json(task);
});

// POST create task
app.post("/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title
  };
  tasks.push(newTask);
  res.json(newTask);
});

// PUT update task
app.put("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (!task) return res.send("Task not found");

  task.title = req.body.title;
  res.json(task);
});

// DELETE task
app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.send("Task deleted");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});