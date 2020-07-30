const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:270117/MCQDb');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    email : String,
    password : String
});

module.exports = mongoose.model('user', userSchema, 'usersCollection');