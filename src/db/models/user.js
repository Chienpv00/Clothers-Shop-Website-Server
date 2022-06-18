const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: Number },
    fullName: { type: String, required: true },
    image: { type: String },
    enable: { type: Boolean, required: true },
    verificationCode: { type: String },
    role: { type: String, required: true },
    prodBoughtId: [Number],
    created: {
        type: Date,
        default: Date.now,
    },
});

module.exports = model('User', UserSchema);
