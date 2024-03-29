const mongoose = require('mongoose');

const NewsLetterSchema = new mongoose.Schema({
    name: String,
    email: String,
},{
    timestamp: true
});

NewsLetterSchema.index({email: 1},{unique: true});

module.exports = mongoose.model('NewsLetter',NewsLetterSchema);