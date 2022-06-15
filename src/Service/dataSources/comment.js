// cai nay dung de doc du lieu
const { MongoDataSource } = require('apollo-datasource-mongodb');

// cai nay dung de mutation du lieu
const CommentModel = require('../../db/models/comment');

class Comment extends MongoDataSource {
    async getAllComments(){
        const raw = await this.findByFields({});
        return raw
    }

    async getCommentById(id){
        const raw = await this.findByFields({id: id})
        return raw;
    }
}

module.exports = Comment;
