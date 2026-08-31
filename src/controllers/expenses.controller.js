const Expenses = require("../models/expenses.schema");

//Put request
exports.addExpense = (req, res) => {
  const { amount, date, category } = req.body;
  if (!amount || !date || !category) {
    res.status(500).json({ message: "Error adding expense" });
  } else {
    res.status(201).json({ message: "Expense added successfully" });
  }
};
//Get request, list all expenses
exports.listExpenses = (req, res) => {
  const { amount, date, category } = req.body;
  Expenses(amount, date, category, (err, data) => {
    if (!amount || date || category) {
      res.status(500).json({ message: "Error listing expenses" });
    } else {
      res.status(200).json({ message: "Expenses listed successfully", data });
    }
  });
};
//Get request, list single expense
exports.fetchExpense = (req, res) => {
  const { amount, date, category } = req.body;
  Expenses(amount, date, category, (err, data) => {
    if (err) {
      res.status(500).json({ message: "Error listing expenses" });
    } else {
      res.status(200).json({ message: "Expenses listed successfully", data });
    }
  });
};
//Patch request, update an existing expense
exports.updateExpense = (req, res) => {
  const { amount, date, category } = req.body;
  updateExpense(amount, date, category, (err, data) => {
    if (err) {
      res.status(500).json({ message: "Error updating expense" });
    } else {
      res.status(200).json({ message: "Expense updated successfully" });
    }
  });
};
//Delete request, delete an existing expense
exports.deleteExpense = (req, res) => {
  const { amount, date, category } = req.body;
  deleteExpense(amount, date, category, (err, data) => {
    if (err) {
      res.status(500).json({ message: "Error deleting expense" });
    } else {
      res.status(200).json({ message: "Expense deleted successfully" });
    }
  });
};
