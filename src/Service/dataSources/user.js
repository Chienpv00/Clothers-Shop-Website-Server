// cai nay dung de doc du lieu
const { MongoDataSource } = require('apollo-datasource-mongodb');

// cai nay dung de mutation du lieu
const UserModel = require('../../db/models/user.js');

class User extends MongoDataSource {
    async createUser({ fullName, password, email}){
        const newUser = new UserModel({
            email: email,
            password: password,
            phone: null,
            fullName: fullName,
            image: null,
            enable: true,
            verificationCode: false,
            role: 'USER',
            cartId: [],
            prodBoughtId: [],
        })
        console.log("🚀 ~ file: user.js ~ line 21 ~ User ~ createUser ~ newUser", newUser)

        const res =  await newUser.save()
        console.log("🚀 ~ file: user.js ~ line 24 ~ User ~ createUser ~ res", res)
        return res
    }

    async checkExist(email) {
        const userRaw = await this.findByFields({email: email})
        userRaw.length === 0 ? false : true
    }

    async checkLogin(email, password){
        const raw = await this.findByFields({email: email, password: password})
        return raw;
    }

    async getAllUsers(){
        const raw = await this.findByFields({})
        return raw
    }
}

module.exports = User;
