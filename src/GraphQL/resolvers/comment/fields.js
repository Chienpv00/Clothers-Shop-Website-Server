const commentFields = {
    Comment: {
        reply: async ({commentsId}, _, dataSources) => { 
            const res = [];
            // commentsId.map(value => {
            //     const comment = await dataSources.comment.getCommentById(value)
            //     res.push(comment[0])
            // });

            return res;
         }
    }
}

module.exports = commentFields
