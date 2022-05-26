const productQueries = require('./product/query')
const productFields = require('./product/field')

const resolvers = {
    Query: {
        ...productQueries
    },

    ...productFields
}

module.exports = resolvers;
