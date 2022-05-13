const { Schema, model } = require('mongoose');

const OrderSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    productId: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    timeOrder: { type: String, required: true },
    userId: {type: Number, required: true},
    status: {type: Boolean, required: true},
    cancelMes: {type: String}
});

module.exports = model('Order', OrderSchema);
