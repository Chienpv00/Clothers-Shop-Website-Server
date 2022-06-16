const { Schema, model } = require('mongoose');

const AuthSchema = new Schema({
    token: String
});

module.exports = model('Auth', AuthSchema);
