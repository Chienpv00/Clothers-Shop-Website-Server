const CartModel = require('../../../db/models/cart');
const ProductModel = require('../../../db/models/product');

const cartFields = {
    Cart: {
        product: async ({ prodId }, _, { dataSources }) => {
            const result = [];

            await prodId.map((value) => {
                result.push(dataSources.product.getProduct(value));
            });
            return result;
        },
    },
};

module.exports = cartFields;
