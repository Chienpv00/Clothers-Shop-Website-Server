const productQueries = {
    getProduct: async (_, __, {dataSources}) => {
        const product = await dataSources.product.getProduct();
        return product;
    },
    getProductType: async (_, {type, limit}, {dataSources})=>{
        const productArr = await dataSources.product.getProductType(type, limit);
        return productArr;
    },
    getProductCat: async (_, {category, limit}, {dataSources})=>{
        const productArr = await dataSources.product.getProductCat(category, limit)
        return productArr
    } 
};

module.exports = productQueries;
