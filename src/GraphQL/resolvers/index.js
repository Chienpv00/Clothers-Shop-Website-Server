const productQueries = require('./product/query')
const userMutations = require('./user/mutations')
const userQueries = require('./user/queries')
const commentQueries = require('./comment/queries')
const authMutations = require('./auth/mutations')
const authQueries = require('./auth/queries')

// resolvers chain
const commentFields = require('./comment/fields')
const productFields = require('./product/field')

const resolvers = {
    Query: {
        ...productQueries,
        ...userQueries,
        ...commentQueries,
        ...authQueries
    },
    Mutation: {
        ...userMutations,
        ...authMutations
    },

    ...productFields,
    ...commentFields
}

module.exports = resolvers;
