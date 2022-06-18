const productQueries = require('./product/query')
const productFields = require('./product/field')

const userMutations = require('./user/mutations')
const userQueries = require('./user/queries')

const commentQueries = require('./comment/queries')
const commentFields = require('./comment/fields')

const authMutations = require('./auth/mutations')
const authQueries = require('./auth/queries')

const cartQueries = require('./cart/queries');
const cartFields = require('./cart/fields');
const cartMutations = require('./cart/mutations')
// resolvers chain

const resolvers = {
    Query: {
        ...productQueries,
        ...userQueries,
        ...commentQueries,
        ...authQueries,
        ...cartQueries,
    },
    Mutation: {
        ...userMutations,
        ...authMutations,
        ...cartMutations
    },

    ...productFields,
    ...commentFields,
    ...cartFields
}

module.exports = resolvers;
