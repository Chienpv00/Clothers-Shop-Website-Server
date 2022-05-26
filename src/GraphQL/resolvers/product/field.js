// handle resolver chain
const productFields = {
    Product : {
        comment: async ({commentId}, _, {dataSources}) => {
            // lay mang comment tu bang comments bang mang cac comment id
            return []
        }
    }
}

module.exports = productFields;