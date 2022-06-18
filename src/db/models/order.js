const { Schema, model } = require('mongoose');

const OrderSchema = new Schema({
    productId: { type: Array, required: true },
    totalPrice: { type: Number, required: true },
    timeConfirm: { type: Date},
    userId: {type: String, required: true},
    address: {type: String, required: true},
    status: {type: Boolean, required: true},
    payment: {type: Boolean, required: true},
    pickPack: {type: Boolean, required: true},
    delivered: {type: Boolean, required: true},
    cancelMes: {type: String},
    created: {
        type: Date,
        default: Date.now
      }
});

module.exports = model('Order', OrderSchema);
