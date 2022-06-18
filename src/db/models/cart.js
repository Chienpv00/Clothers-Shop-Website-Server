const { Schema, model } = require('mongoose');

const CartSchema = new Schema({
    userId: {type: String, required: true},
    prodId: [Number],
    quantity: {type: Number, default: 1},
    size: [String]
});

module.exports = model('Cart', CartSchema);
