import crypto from "crypto";

import {
  getAllExpenses,
  getExpenseById,
  addExpense,
  updateExpense,
  deleteExpense,
} from "../data/expenseStore.js";

// CREATE EXPENSE
export const createExpense = (req, res) => {
  try {
    const { amount, category, date, description } = req.body;

    // Validate required fields
    if (amount === undefined || amount === null || amount === "") {
      return res.status(400).json({
        message: "Amount is required",
      });
    }

    if (!category || category.trim() === "") {
      return res.status(400).json({
        message: "Category is required",
      });
    }

    // Create a new expense
    const expense = {
      id: crypto.randomUUID(),
      amount: Number(amount),
      category: category.trim(),
      date: date || new Date().toISOString(),
      description: description?.trim() || "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const newExpense = addExpense(expense);

    return res.status(201).json({
      message: "Expense created successfully",
      expense: newExpense,
    });
  } catch (error) {
    console.error("Create expense error:", error);

    return res.status(500).json({
      message: "Failed to create expense",
      error: error.message,
    });
  }
};


// GET ALL EXPENSES
export const getExpenses = (req, res) => {
  try {
    const expenses = getAllExpenses();

    return res.status(200).json({
      count: expenses.length,
      expenses,
    });
  } catch (error) {
    console.error("Get expenses error:", error);

    return res.status(500).json({
      message: "Failed to retrieve expenses",
      error: error.message,
    });
  }
};


// GET SINGLE EXPENSE
export const getExpense = (req, res) => {
  try {
    const { id } = req.params;

    const expense = getExpenseById(id);

    if (!expense) {
      return res.status(404).json({
        message: "Expense not found",
      });
    }

    return res.status(200).json({
      expense,
    });
  } catch (error) {
    console.error("Get expense error:", error);

    return res.status(500).json({
      message: "Failed to retrieve expense",
      error: error.message,
    });
  }
};


// UPDATE EXPENSE
export const updateExpenseById = (req, res) => {
  try {
    const { id } = req.params;

    const { amount, category, date, description } = req.body;

    // Check whether the expense exists
    const existingExpense = getExpenseById(id);

    if (!existingExpense) {
      return res.status(404).json({
        message: "Expense not found",
      });
    }

    // Validate amount if supplied
    if (
      amount !== undefined &&
      (amount === null || amount === "" || isNaN(Number(amount)))
    ) {
      return res.status(400).json({
        message: "Amount must be a valid number",
      });
    }

    // Validate category if supplied
    if (
      category !== undefined &&
      (!category || category.trim() === "")
    ) {
      return res.status(400).json({
        message: "Category cannot be empty",
      });
    }

    const updatedData = {
      ...(amount !== undefined && {
        amount: Number(amount),
      }),

      ...(category !== undefined && {
        category: category.trim(),
      }),

      ...(date !== undefined && {
        date,
      }),

      ...(description !== undefined && {
        description: description.trim(),
      }),

      updatedAt: new Date().toISOString(),
    };

    const updatedExpense = updateExpense(id, updatedData);

    return res.status(200).json({
      message: "Expense updated successfully",
      expense: updatedExpense,
    });
  } catch (error) {
    console.error("Update expense error:", error);

    return res.status(500).json({
      message: "Failed to update expense",
      error: error.message,
    });
  }
};


// DELETE EXPENSE
export const removeExpense = (req, res) => {
  try {
    const { id } = req.params;

    const deletedExpense = deleteExpense(id);

    if (!deletedExpense) {
      return res.status(404).json({
        message: "Expense not found",
      });
    }

    return res.status(200).json({
      message: "Expense deleted successfully",
      expense: deletedExpense,
    });
  } catch (error) {
    console.error("Delete expense error:", error);

    return res.status(500).json({
      message: "Failed to delete expense",
      error: error.message,
    });
  }
};