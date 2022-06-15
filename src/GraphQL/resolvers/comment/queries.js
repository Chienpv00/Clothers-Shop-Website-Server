const commentQueries = {
    getAllComments: async (_, __, {dataSources}) => { 
        const allComments = dataSources.comment.getAllComments();
        return allComments;
    }
}

module.exports = commentQueries
