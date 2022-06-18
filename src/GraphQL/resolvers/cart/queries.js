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
    getCartLength: async (_, __) => { 
        try {
            const res = await CartModel.find({});
            if (res) return res.length

            return 0
        } catch (error) {
        console.log("🚀 ~ file: queries.js ~ line 17 ~ getCartLength: ~ error", error)
            return 0;
        }
     }
};

module.exports = cartQueries
