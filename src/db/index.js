const mongoose = require('mongoose');

const connect = async () => {
    try {
        const db = await mongoose.connect('mongodb://localhost:27017/clothes');
        console.log('🚀🚀 Connection successfully!!!');
        return db;
    } catch (error) {
        console.log('🚀 error occur with message: ', error);
    }
};

module.exports = { connect };
