// User.js (rename to UserModel.js)
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema); // Update model name