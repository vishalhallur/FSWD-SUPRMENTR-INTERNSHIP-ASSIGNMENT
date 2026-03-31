const express = require("express");
const app = express();

const PORT = 3000;

// Sample Data
const books = [
  { id: 1, name: "Atomic Habits", authorId: 1 },
  { id: 2, name: "Rich Dad Poor Dad", authorId: 2 }
];

const authors = [
  { id: 1, name: "James Clear" },
  { id: 2, name: "Robert Kiyosaki" }
];

// Routes

// Home
app.get("/", (req, res) => {
  res.send("Welcome to Bookstore API");
});

// Get all books
app.get("/books", (req, res) => {
  res.json(books);
});

// Get single book
app.get("/books/:id", (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  if (!book) return res.send("Book not found");
  res.json(book);
});

// Get all authors
app.get("/authors", (req, res) => {
  res.json(authors);
});

// Get single author
app.get("/authors/:id", (req, res) => {
  const author = authors.find(a => a.id == req.params.id);
  if (!author) return res.send("Author not found");
  res.json(author);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});