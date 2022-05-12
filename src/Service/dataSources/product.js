const { MongoDataSource } = require("apollo-datasource-mongodb");

class Product extends MongoDataSource {
    getProduct() {
        // truy xuat vao db
        // tra ve obj
        return {
            id: 1,
            title: 'test',
            oldPrice: 1000,
            newPrice: 1233,
            image: '2fsdfa',
            category: '23423',
            content: 'faadsf',
            type: '2342343',
            comment: ['23', '2']

        }

    }

    getProductType(type, limit){
        
    }
}

module.exports = Product;
