const CartModel = require('../../../db/models/cart');
const UserModel = require('../../../db/models/user');


const cartMutations = {
    addToCart: async (_, { prodId, quantity, size }, { id, role }) => {
        try {
            if (!id) {
                return null;
            }

            const user = await UserModel.findById(id);

            // neu san pham da co trong cart thi tang so luong len 1
            if (user.cartId.includes(prodId)) {
                await UserModel.findByIdAndUpdate(id, {cartId: [...user.cartId]})
            }
            const res = await UserModel.findByIdAndUpdate(id, { cartId: [...user.cartId, prodId] });
            return {
                code: 200,
                success: true,
                message: 'success!',
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
};

module.exports = cartMutations
