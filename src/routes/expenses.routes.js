const express = require("express");
const {
  addExpense,
  listExpenses,
  fetchExpense,
  updateExpense,
  deleteExpense,
} = require("../controllers/expenses.controller");
const router = express.Router();

router.post("/create", addExpense);
router.get("/all", listExpenses);
router.get("/single", fetchExpense);
router.put("/update", updateExpense);
router.delete("/delete", deleteExpense);

module.exports = router;
