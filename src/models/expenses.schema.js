const mongoose = require("mongoose");

const expensesSchema = new mongoose.Schema({
  // --- TEAMMATE'S EXISTING FIELDS (KEPT 100% INTACT) ---
  amount: {
    type: Number,
    required: [true, "Amount is required! How much did you spend?"], // ADDED custom error message
    min: [0.01, "Amount must be greater than 0"], // ADDED minimum validation
  },
  date: {
    type: Date,
    required: [true, "Date is required! When did you spend it?"], // ADDED custom error
  },
  category: {
    type: String,
    required: [true, "Category is required."], // ADDED custom error
    // ADDED enum: Restricts to only these 6 options!
    enum: ["Food", "Transport", "Shopping", "Bills", "Entertainment", "Other"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  deletedAt: {
    type: Date,
  },
  _timeStamp: {
    type: Date,
    default: Date.now,
  },

  // --- MY NEW CONTRIBUTIONS (ADDED BY TIMI) ---
  title: {
    type: String,
    required: [true, "Title is required! What did you buy?"], // Validation!
    trim: true, // Removes accidental spaces
    maxlength: [50, "Title cannot be longer than 50 characters."],
  },
  description: {
    type: String,
    trim: true,
    maxlength: [200, "Description is too long (max 200 characters)."],
  },
});

// --- EXPORT (KEPT EXACTLY AS THEY WROTE IT) ---
const Expenses = mongoose.model("Expenses", expensesSchema);
module.exports = Expenses;