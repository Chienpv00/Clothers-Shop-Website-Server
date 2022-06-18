const CartModel = require("../../db/models/cart");

class Cart {
    async addCart(id, prodId){
        const cartItem = new CartModel({
            userId: id,
            prodId: [prodId],
            quantity: 1,
        })

        const res = await cartItem.save()
        return res
    }
}

module.exports = Cart