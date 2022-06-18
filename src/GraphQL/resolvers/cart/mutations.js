const CartModel = require('../../../db/models/cart');
const UserModel = require('../../../db/models/user');


const cartMutations = {
    addToCart: async (_, { prodId, quantity}, { id, role, dataSources }) => {
        try {
            if (!id) {
                return null;
            }
            let newCart 
            // 1.a 2.a, truyen tham so trung prodid, trung size , quantity > 0
            
            //1.c Them moi cart
            newCart = await dataSources.cart.addCart(id, prodId)
            console.log("🚀 ~ file: mutations.js ~ line 17 ~ addToCart: ~ newCart", newCart)
            if (newCart) {
                return {
                    code: 200, 
                    success: true,
                    message: 'add new cart successfully',
                    cart: newCart
                }
            }
            return {
                code: 200,
                success: false,
                message: 'failed, please check logic in server!',
            }
        } catch (error) {
            console.log('🚀 ~ file: mutations.js ~ line 65 ~ addToCart: ~ error', error);
            return {
                code: 404,
                success: false,
                message: 'failed, please check log!',
            };
        }
    },
};

module.exports = cartMutations
