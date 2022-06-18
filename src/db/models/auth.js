const { Schema, model } = require('mongoose');

const AuthSchema = new Schema({
    accessToken: String,
    refreshToken: String,
    userId: String,
    created: {
        type: Date,
        default: Date.now
      }
});

module.exports = model('Auth', AuthSchema);
