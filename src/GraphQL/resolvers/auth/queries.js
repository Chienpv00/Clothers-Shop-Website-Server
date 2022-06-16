const UserModel = require('../../../db/models/user');

const authQueries = {
    loggedInUser: async (_, __, { req }) => {
        if (isEmpty(req.user)) throw new AuthenticationError('Must authenticate');
        const user = await UserModel.find({id: req.user.id})
        return user;
    },
};

module.exports = authQueries;
