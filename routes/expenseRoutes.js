import express from 'express';
import {
  createExpense,
  getExpenses,
  getExpense,
  updateExpenseById,
  removeExpense,
} from '../controllers/expenseController.js';

const router = express.Router();


router.post('/', createExpense);
router.get('/', getExpenses);
router.get('/:id', getExpense);
router.put('/:id', updateExpenseById);
router.delete('/:id', removeExpense);

export default router;