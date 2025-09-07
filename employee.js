const express = require('express');
const router = express.Router();
const SalarySlip = require('../models/SalarySlip');
const Expense = require('../models/Expense');
const { isAuthenticated, isEmployee } = require('../middleware/auth');

// Submit an expense
router.post('/expense', isAuthenticated, isEmployee, async (req, res) => {
  const expense = new Expense({ ...req.body, employee: req.user._id });
  await expense.save();
  res.send(expense);
});

// View salary slips
router.get('/salary-slips', isAuthenticated, isEmployee, async (req, res) => {
  const slips = await SalarySlip.find({ employee: req.user._id });
  res.send(slips);
});

// View expense history
router.get('/expenses', isAuthenticated, isEmployee, async (req, res) => {
  const expenses = await Expense.find({ employee: req.user._id });
  res.send(expenses);
});

module.exports = router;
