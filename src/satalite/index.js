const {ApolloServer} = require('apollo-server');
const {buildFederatedSchema} = require('@apollo/federation')

const {resolvers} = require('./resolvers');
const {typeDefs} = require('./type_defs');
const {loaders} = require('./dataloader');

const server = new ApolloServer({
  schema: buildFederatedSchema([{typeDefs, resolvers}]),
  context: () => ({
    loaders: loaders
  })
});

server.listen({port: 4003}).then(({url}) => {
  console.log(`Satalite Server ready at ${url}`);
});
