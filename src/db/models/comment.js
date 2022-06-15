const { Schema, model } = require('mongoose');

const CommentSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    userId: { type: Number, required: true },
    content: { type: String, required: true },
    start: { type: Number, required: true },
    commentsId: { type: Array },
});

module.exports = model('Comment', CommentSchema);
