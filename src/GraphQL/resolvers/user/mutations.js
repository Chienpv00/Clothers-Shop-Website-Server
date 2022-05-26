const UserModel = require('../../../db/models/user')

const userMutations = {
    createCus: async (_, {user}, {dataSources})=>{
        const user = dataSources.user.createUser(user)
        
    }
}