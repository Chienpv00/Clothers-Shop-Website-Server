const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const schema = require('./GraphQL/schema');
const http = require('http');
const db = require('./db');

// import model
const ProductModel = require('./db/models/product.js')
const UserModel = require('./db/models/user')
const OrderModel = require('./db/models/order')
const CommentModel = require('./db/models/comment')

// import class from dataSources
const Product = require('./Service/dataSources/product')
const User =require('./Service/dataSources/user')
const Order =require('./Service/dataSources/order')
const Comment =require('./Service/dataSources/comment')



async function startApolloServer(schema ) {
    const app = express();
    app.use(express.static('public'))
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        schema,
        dataSources: ()=>{
            return {
                product: new Product(ProductModel),
                user: new User(UserModel),
                order: new Order(OrderModel),
                comment: new Comment(CommentModel)
            }
        },
        
    });

    await db.connect();

    await server.start();
    server.applyMiddleware({ app });

    await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:${4000}${server.graphqlPath}`);
}
startApolloServer(schema);
