const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const schema = require('./GraphQL/schema');
const http = require('http');
const db = require('./db');
var cors = require('cors');
const validateTokensMiddleware = require('./Service/middleware/validateTokensMiddleware');
// import model
const ProductModel = require('./db/models/product.js');
const UserModel = require('./db/models/user');
const OrderModel = require('./db/models/order');
const CommentModel = require('./db/models/comment');
const AuthModel = require('./db/models/auth');

// import class from dataSources
const Product = require('./Service/dataSources/product');
const User = require('./Service/dataSources/user');
const Order = require('./Service/dataSources/order');
const Comment = require('./Service/dataSources/comment');
const Auth = require('./Service/dataSources/auth');

async function startApolloServer(schema) {
    const app = express();
    app.use(cors({origin: '*', credentials: true}));
    app.use(express.static('public'));
    app.use(validateTokensMiddleware);
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        schema,
        csrfPrevention: true,
        dataSources: () => {
            return {
                product: new Product(ProductModel),
                user: new User(UserModel),
                order: new Order(OrderModel),
                comment: new Comment(CommentModel),
                auth: new Auth(AuthModel),
            };
        },
        context: async ({ req, res }) =>{
            if (req.user){
                return {id: req.user.id, role: req.user.role}
            } else {
                return {id: null, role: null}
            }
        },
    });

    await db.connect();

    await server.start();
    server.applyMiddleware({ app, cors: false });

    await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:${4000}${server.graphqlPath}`);
}
startApolloServer(schema);
