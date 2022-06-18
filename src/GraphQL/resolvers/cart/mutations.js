const CartModel = require('../../../db/models/cart');
const UserModel = require('../../../db/models/user');

const cartMutations = {
    addToCart: async (_, { prodId, quantity }, { id, role, dataSources }) => {
        // quantity = 1
        // prodId = 73
        try {
            if (!id) {
                return null;
            }

            // 1.a 2.a, truyen tham so trung prodid , quantity > 0
            const getCartById = await CartModel.findOne({ userId: id, prodId: [prodId] });
            if (!getCartById) {
                const newCart = await dataSources.cart.addCart(id, prodId);
                if (newCart) {
                    return {
                        code: 200,
                        success: true,
                        message: 'add new cart successfully',
                        cart: newCart,
                    };
                }
            }

            if (quantity >= 0) {
                const res = await CartModel.findOneAndUpdate(
                    { userId: id, prodId: [prodId] },
                    { quantity: getCartById.quantity + 1 }
                );
                const result = await CartModel.findOne({ userId: id, prodId: [prodId] });
                return {
                    code: 200,
                    success: true,
                    message: 'increase quantity successfully',
                    cart: result,
                };
            }

            // giam so luong cart
            if (quantity < 0) {
                if (getCartById.quantity === 1) {
                    return {
                        code: 200,
                        success: false,
                        message: 'quantity == 1',
                    };
                }
                const res = await CartModel.findOneAndUpdate(
                    { userId: id, prodId: [prodId] },
                    { quantity: getCartById.quantity - 1 }
                );
                const result = await CartModel.findOne({ userId: id, prodId: [prodId] });
                return {
                    code: 200,
                    success: true,
                    message: 'decrease quantity in cart successfully',
                    cart: result,
                };
            }

            //1.c Them moi cart

            return {
                code: 200,
                success: false,
                message: 'failed, please check logic in server!',
            };
        } catch (error) {
            console.log('🚀 ~ file: mutations.js ~ line 65 ~ addToCart: ~ error', error);
            return {
                code: 404,
                success: false,
                message: 'failed, please check log!',
            };
        }
    },

    removeCart: async (_, { prodId }) => {
        try {
            const res = await CartModel.findOneAndRemove({ prodId: [prodId] });
            return {
                code: 200,
                success: true,
                message: 'remove cart successfully',
                cart: res,
            };
        } catch (error) {
            console.log('🚀 ~ file: mutations.js ~ line 81 ~ removeCart: ~ error', error);
            return {
                code: 404,
                success: false,
                message: 'failed, please check log!',
            };
        }
    },
};

module.exports = cartMutations;
