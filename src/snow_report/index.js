const {ApolloServer} = require('apollo-server');
const {buildFederatedSchema} = require('@apollo/federation')

const {resolvers} = require('./resolvers');
const {typeDefs} = require('./type_defs');

const server = new ApolloServer({
  schema: buildFederatedSchema([{typeDefs, resolvers}])
});

server.listen({port: 4002}).then(({url}) => {
  console.log(`Snow Report Server ready at ${url}`);
});
