const UserModel = require('../../../db/models/user');

const userMutations = {
    createCus: async (_, { user }, { dataSources }) => {
        try {
            const res = await dataSources.user.createUser(user);
            return {
                code: 200,
                success: true,
                message: 'Create user successfully',
                user: res,
            };
        } catch (error) {
            if (error.code == 11000) {
                return {
                    code: 200,
                    success: false,
                    message: 'email already exists',
                };
            }
            return {
                code: 404,
                success: false,
                message: 'error from server: ' + error,
            };
        }
    },

    login: (_, {email, password}, {dataSources}) => { 
        return true
     }
};

module.exports = userMutations;
