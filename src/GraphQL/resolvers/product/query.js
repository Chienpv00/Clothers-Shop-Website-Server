const resolvers = {
    Query: {
        getSanPham: async (_, { type, limit }, { dataSources }) => {
            return dataSources.mongoDB.getSanPham(type, limit);
        },
    },
};
