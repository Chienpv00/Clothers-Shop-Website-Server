// cai nay dung de doc du lieu
const { MongoDataSource } = require('apollo-datasource-mongodb');

// cai nay dung de mutation du lieu
const ProductModel = require('../../db/models/product');

class Product extends MongoDataSource {
    // get one product with id param
    async getProduct(id){
        const res = await this.findByFields({id: id})
        return res[0]
    }

    async getProductType(type, limit) {
        const query = await ProductModel.find({ type: type }).limit(limit).sort({ id: -1 });

        return query;
    }

    async getProductCat(category, limit) {
        const query = await ProductModel.find({ category: category }).limit(limit).sort({ id: -1 });
        return query;
    }

} 

module.exports = Product;
