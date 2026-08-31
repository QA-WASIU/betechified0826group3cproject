const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./src/config/db");
const expenseRouter = require("./src/routes/expenses.routes");

dotenv.config();
const app = express();

app.use(express.json());
app.use(morgan("dev"));
const PORT = process.env.PORT || 3800;
//Home Page
app.get("/", (req, res) => {
  res.send("Welcome to Expense Tracker API");
});

app.use("/api/expense", expenseRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
