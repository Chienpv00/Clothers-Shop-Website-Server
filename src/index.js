const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const schema = require("./GraphQL/schema");
const http = require("http");
// const MongoDB = require("./Service/dataSources/index");

async function startApolloServer(schema) {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        schema,
    });

    await server.start();
    server.applyMiddleware({app});

    await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:${4000}${server.graphqlPath}`);

}
startApolloServer(schema);
