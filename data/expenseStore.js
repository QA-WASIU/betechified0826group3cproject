let expenses = [];

export const getAllExpenses = () => {
  return expenses;
};

export const getExpenseById = (id) => {
  return expenses.find((expense) => expense.id === id);
};

export const addExpense = (expense) => {
  expenses.push(expense);
  return expense;
};

export const updateExpense = (id, updatedExpense) => {
  const index = expenses.findIndex((expense) => expense.id === id);

  if (index === -1) {
    return null;
  }

  expenses[index] = {
    ...expenses[index],
    ...updatedExpense,
  };

  return expenses[index];
};

export const deleteExpense = (id) => {
  const index = expenses.findIndex((expense) => expense.id === id);

  if (index === -1) {
    return null;
  }

  const deletedExpense = expenses[index];

  expenses.splice(index, 1);

  return deletedExpense;
};