const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    password: String,
    status: Number,
},{
    timestamp: true
});

module.exports = mongoose.model('Users',UsersSchema);