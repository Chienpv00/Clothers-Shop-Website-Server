const productQueries = require('./product/query')

const resolvers = {
    Query: {
        ...productQueries
    }

}

module.exports = resolvers;
