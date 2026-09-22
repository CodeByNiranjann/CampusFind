const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// Read items.json
const filePath = path.join(__dirname, "data", "items.json");

const items = JSON.parse(fs.readFileSync(filePath, "utf-8"));

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "CampusFind Backend is running"
  });
});

// Get all items
app.get("/items", (req, res) => {
  res.json(items);
});

// Get questions based on category
app.get("/questions/:category", (req, res) => {
  const category = req.params.category.toLowerCase();

  const item = items.find(
    (item) => item.category.toLowerCase() === category
  );

  if (!item) {
    return res.json({
      message: "No questions found for this category"
    });
  }

  res.json({
    category: item.category,
    questions: item.questions
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});