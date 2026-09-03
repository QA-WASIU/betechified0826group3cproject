const express = require("express");

const router = express.Router();

const {
  createExpense,
  getExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense
} = require("../controllers/expense.controller");

// Create an expense
router.post("/", createExpense);

// Get all expenses
router.get("/", getExpenses);

// Get one expense
router.get("/:id", getExpenseById);

// Update an expense
router.put("/:id", updateExpense);

// Delete an expense
router.delete("/:id", deleteExpense);

module.exports = router;0
0

