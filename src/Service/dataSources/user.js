// cai nay dung de doc du lieu
const { MongoDataSource } = require('apollo-datasource-mongodb');

// cai nay dung de mutation du lieu
const UserModel = require('../../db/models/user.js');

class User extends MongoDataSource {
    
}

module.exports = User;
