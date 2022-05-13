// cai nay dung de doc du lieu
const { MongoDataSource } = require('apollo-datasource-mongodb');

// cai nay dung de mutation du lieu
const CommentModel = require('../../db/models/comment');

class Comment extends MongoDataSource {
    
}

module.exports = Comment;
