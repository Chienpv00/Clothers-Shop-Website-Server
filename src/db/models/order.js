const { Schema, model } = require('mongoose');

const OrderSchema = new Schema({
    productId: { type: Array},
    totalPrice: { type: Number},
    timeConfirm: { type: Date},
    userId: {type: String},
    address: {type: String},
    method: Number,
    status: {type: Boolean},
    payment: {type: Boolean},
    pickPack: {type: Boolean},
    delivered: {type: Boolean},
    cancelMes: {type: String},
    created: {
        type: Date,
        default: Date.now
      }
});

module.exports = model('Order', OrderSchema);
