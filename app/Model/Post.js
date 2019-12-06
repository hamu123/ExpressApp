const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    user_id: String,
    slug: String,
    title: String,
    body: Text,
},{
    timestamp: true
});

module.exports = mongoose.model('Post',PostSchema);