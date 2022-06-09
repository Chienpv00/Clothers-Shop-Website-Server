const ProductModel = require('../src/db/models/product');

const test = async () => {
    return await ProductModel.find({});
};

console.log(test);
