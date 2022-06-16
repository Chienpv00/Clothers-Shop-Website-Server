const productQueries = {
    getProduct: async (_, {id}, {dataSources}) => {
        const product = await dataSources.product.getProduct(id);
        return product;
    },
    getProductType: async (_, {type, limit}, {dataSources})=>{
        const productArr = await dataSources.product.getProductType(type, limit);
        return productArr;
    },
    getProductCat: async (_, {category, limit}, {dataSources})=>{
        const productArr = await dataSources.product.getProductCat(category, limit)
        return productArr
    },

    getProductsForHome: async(_, __, {dataSources, id, role})=>{
        console.log(role)
        const dataNew = await dataSources.product.getProductType('new', 5)
        const dataHot = await dataSources.product.getProductType('hot', 5)
        const dataNewImport = await dataSources.product.getProductType('newImport', 5)

        return [dataNew, dataHot, dataNewImport]
    }
};

module.exports = productQueries;
