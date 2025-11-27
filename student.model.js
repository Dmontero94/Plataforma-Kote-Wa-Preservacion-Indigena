const mongoose = require('mongoose');

let studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    language: { type: String, required: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model('Student', studentSchema, 'students');