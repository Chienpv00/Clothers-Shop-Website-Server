const productQueries = require('./product/query')
const userMutations = require('./user/mutations')
const userQueries = require('./user/queries')
const commentQueries = require('./comment/queries')
<<<<<<< Updated upstream
const authMutations = require('./auth/mutations')
const authQueries = require('./auth/queries')
=======
>>>>>>> Stashed changes

// resolvers chain
const commentFields = require('./comment/fields')
const productFields = require('./product/field')

const resolvers = {
    Query: {
        ...productQueries,
        ...userQueries,
        ...commentQueries,
<<<<<<< Updated upstream
        ...authQueries
    },
    Mutation: {
        ...userMutations,
        ...authMutations
=======
    },
    Mutation: {
        ...userMutations
>>>>>>> Stashed changes
    },

    ...productFields,
    ...commentFields
}

module.exports = resolvers;
