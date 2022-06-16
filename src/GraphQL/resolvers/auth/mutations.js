const UserModel = require('../../../db/models/user');
const setTokens = require('../../../Service/middleware/setTokens');

const authMutations = {
    login: async (_, { email, password }, { dataSources }) => {
        const user = await UserModel.findOne({ email: email });
        if (!user) return null;
        if (user.password !== password) return null;
        return setTokens(user);
    },
};

module.exports = authMutations;
