const { ApolloServer } = require("apollo-server");
const schema = require('./GraphQL/schema');
const MongoDB = require("./Service/dataSources/index");

async function startApolloServer(schema) {
    const server = new ApolloServer({
        schema,
        dataSources: () => {
            return {
                mongoDB: new MongoDB(),
            };
        },
    });

    const { url, port } = await server.listen({
        port: process.env.PORT || 4000,
    });
    console.log(`
      🚀  Server is running
      🔉  Listening on port ${port}
      📭  Query at ${url}
    `);
}

startApolloServer(schema);
