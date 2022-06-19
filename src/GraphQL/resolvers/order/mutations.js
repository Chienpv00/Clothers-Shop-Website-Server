const OrderModel  = require('../../../db/models/order');

const orderMutatons = {
    addOrder: async (_, {prodIdArr,address , method, total}, {id}) =>{
        console.log("🚀 ~ file: mutations.js ~ line 5 ~ addOrder: ~ total", total)
        console.log("🚀 ~ file: mutations.js ~ line 5 ~ addOrder: ~ method", method)
        console.log("🚀 ~ file: mutations.js ~ line 5 ~ addOrder: ~ address", address)
        console.log("🚀 ~ file: mutations.js ~ line 5 ~ addOrder: ~ prodIdArr", prodIdArr)
        try {
            const newOrder = new OrderModel({
                productId: prodIdArr,
                totalPrice: total,
                timeConfirm: null,
                userId: id,
                address: address,
                method: method,
                status: false,
                payment: false,
                pickPack: false,
                delivered: false,
                cancelMes: null
            })
            const res = await newOrder.save()
            return {
                code: 200,
                success: true,
                message: 'success!',
            }
        } catch (error) {
        console.log("🚀 ~ file: mutations.js ~ line 8 ~ addOrder: ~ error", error)
            return {
                code: 404,
                success: false,
                message: 'Error from server, please check log!'
            }
        }
    }
}

module.exports = orderMutatons