const {ApolloServer} = require('apollo-server');
const {buildFederatedSchema} = require('@apollo/federation')

const {resolvers} = require('./resolvers');
const {typeDefs} = require('./type_defs');
const {createDarkSkyLoader} = require('./dataloader');

const server = new ApolloServer({
  schema: buildFederatedSchema([{typeDefs, resolvers}]),
  context: () => ({
    darkSkyLoaderWrapper: createDarkSkyLoader()
  })
});

server.listen({port: 4001}).then(({url}) => {
  console.log(`Forecast Server ready at ${url}`);
});
