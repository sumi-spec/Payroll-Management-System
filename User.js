// models/User.js
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String, // hash in real app
  role: { type: String, enum: ['admin','employee'], default: 'employee' },
});
module.exports = mongoose.model('User', userSchema);

// models/SalarySlip.js
const mongoose = require('mongoose');
const salarySlipSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  month: String,
  amount: Number,
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('SalarySlip', salarySlipSchema);

// models/Expense.js
const mongoose = require('mongoose');
const expenseSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  month: String,
  amount: Number,
  description: String,
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Expense', expenseSchema);
