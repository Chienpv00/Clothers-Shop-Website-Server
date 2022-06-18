const CartModel = require('../../../db/models/cart');
const ProductModel = require('../../../db/models/product');

const cartFields = {
    Cart: {
        product: async ({prodId}, _ ) => {
            const res = await ProductModel.findOne({id: prodId})
            return res
        }   
    }

};

module.exports = cartFields
