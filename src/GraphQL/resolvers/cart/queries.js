const CartModel = require('../../../db/models/cart');

const cartQueries = {
    getCart: async (_, ___, {id}) => {
        try {
            const res = await CartModel.find({userId: id});
            return res;
        } catch (error) {
            console.log('🚀 ~ file: queries.js ~ line 10 ~ getCart: ~ error', error);
            return null;
        }
    },
    getCartLength: async (_, __, {id}) => { 
        try {
            const res = await CartModel.find({userId: id});
            if (res) return res.length

            return 0
        } catch (error) {
        console.log("🚀 ~ file: queries.js ~ line 17 ~ getCartLength: ~ error", error)
            return 0;
        }
     }
};

module.exports = cartQueries
