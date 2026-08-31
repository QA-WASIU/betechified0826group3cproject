const mongoose = require("mongoose");
const expensesSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
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
});

//module.exports = mongoose.model("expenses", expensesSchema);
const Expenses = mongoose.model("Expenses", expensesSchema);
module.exports = Expenses;
