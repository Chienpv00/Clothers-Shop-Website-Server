// cai nay dung de doc du lieu
const { MongoDataSource } = require('apollo-datasource-mongodb');

// cai nay dung de mutation du lieu
const ProductModel = require('../../db/models/product');

class Product extends MongoDataSource {
    async getProduct() {
        const product = await this.findByFields({id: 1})
        return product[0]
    }

    getProductType(type, limit) {}
}

module.exports = Product;
