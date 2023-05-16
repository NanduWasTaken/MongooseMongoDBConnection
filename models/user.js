const mongoose = require('mongoose');

const User = new mongoose.Schema({
    username: { type: String },
    email: { type: String, unique: true, required: true },
    money: { type: String, required: true }
});

module.exports = mongoose.model('newUser', User);
