const { Schema, model } = require('mongoose');

const CommentSchema = new Schema({
    userId: { type: Number, required: true },
    productId: { type: Number, required: true },
    content: { type: String, required: true },
    start: { type: Number, required: true },
    commentsId: { type: Array },
    created: {
        type: Date,
        default: Date.now
      }
});

module.exports = model('Comment', CommentSchema);
