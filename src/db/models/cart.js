const { Schema, model } = require('mongoose');

const CartSchema = new Schema({
    userId: {type: String, required: true},
    prodId: [Number],
    quantity: {type: Number, default: 1},
});

module.exports = model('Cart', CartSchema);
