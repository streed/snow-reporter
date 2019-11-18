const {ApolloServer} = require('apollo-server');
const {buildFederatedSchema} = require('@apollo/federation')

const {resolvers} = require('./resolvers');
const {typeDefs} = require('./type_defs');
const {loaders} = require('./dataloader');

const PORT = process.env.PORT || 4003

const server = new ApolloServer({
  schema: buildFederatedSchema([{typeDefs, resolvers}]),
  context: () => ({
    loaders: loaders
  })
});

server.listen({port: PORT}).then(({url}) => {
  console.log(`Satalite Server ready at ${url}`);
});
