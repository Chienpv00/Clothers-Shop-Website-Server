const CartModel = require('../../../db/models/cart');

const cartQueries = {
    getCart: async (_, ___, {}) => {
        try {
            const res = await CartModel.find({});
            return res;
        } catch (error) {
            console.log('🚀 ~ file: queries.js ~ line 10 ~ getCart: ~ error', error);
            return null;
        }
    },
};

module.exports = cartQueries
