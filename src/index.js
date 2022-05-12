const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const schema = require('./GraphQL/schema');
const http = require('http');
const db = require('./db');
const ProductModel = require('./db/models/product.js')
const Product = require('./Service/dataSources/product')

async function startApolloServer(schema, Product, ProductModel) {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        schema,
        dataSources: ()=>{
            return {
                product: new Product(ProductModel)
            }
        }
    });

    await db.connect();

    await server.start();
    server.applyMiddleware({ app });

    await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:${4000}${server.graphqlPath}`);
}
startApolloServer(schema, Product, ProductModel);
