const express = require('express');
const router = express.Router();
const SalarySlip = require('../models/SalarySlip');
const Expense = require('../models/Expense');
const { isAuthenticated, isAdmin } = require('../middleware/auth');

// Create a salary slip
router.post('/salary-slip', isAuthenticated, isAdmin, async (req, res) => {
  const slip = new SalarySlip(req.body);
  await slip.save();
  res.send(slip);
});

// Update salary slip
router.put('/salary-slip/:id', isAuthenticated, isAdmin, async (req, res) => {
  const slip = await SalarySlip.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(slip);
});

// View all expenses
router.get('/expenses', isAuthenticated, isAdmin, async (req, res) => {
  const expenses = await Expense.find().populate('employee');
  res.send(expenses);
});

module.exports = router;
