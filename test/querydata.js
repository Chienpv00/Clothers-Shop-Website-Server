const ProductModel = require('../src/db/models/product');
const OrderModel = require('../src/db/models/order');

// define

const docs = new OrderModel({
    productId: [1, 2, 3],
    totalPrice: 100000,
    timeConfirm: '2022/6/18',
    userId: '62aafb1b9c1fd7bb21bcb7c6',
    address: 'So nha X, Phuong Y, TP. HCM',
    status: false,
    payment: false,
    pickPack: false,
    delivered: false,
    cancelMes: null,
});

docs.save();
