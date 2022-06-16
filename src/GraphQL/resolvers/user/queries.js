const UserModel = require('../../../db/models/user');

const userQueries = {
    checkLogin: async (_, { email, password }, { dataSources }) => {
        try {
            const res = await dataSources.user.checkLogin(email, password);
            console.log(res);

            if (res.length)
                return {
                    code: 200,
                    success: true,
                    message: 'login successfully!',
                    user: res[0],
                };
            else
                return {
                    code: 200,
                    success: false,
                    message: 'wrong password || email',
                };
        } catch (error) {
            console.log(error);
            return {
                code: 404,
                success: false,
                message: 'please check log show in server!',
            };
        }
    },

    getAllUsers: async (_, __, {dataSources}) => { 
        
        const allUser = dataSources.user.getAllUsers();
        return allUser
     },

     getUser: async (_, __, {dataSources, role, id}) => { 
        if (!role) return null
        const user = await UserModel.findById(id)
        return user
    }
};

module.exports = userQueries;
