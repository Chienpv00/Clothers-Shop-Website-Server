const ProductModel = require('../src/db/models/product');
const OrderModel = require('../src/db/models/order');
const CartModel = require('../src/db/models/cart');

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

const test = async () => { 
    const getCartById = await CartModel.findOne({ userId: '62ad8b95bc6cda2a04f04629', prodId: [73] });
    console.log(getCartById)
 }

 test ()