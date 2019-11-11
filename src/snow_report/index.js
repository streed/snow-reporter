const {ApolloServer} = require('apollo-server');
const {buildFederatedSchema} = require('@apollo/federation')

const {resolvers} = require('./resolvers');
const {typeDefs} = require('./type_defs');
const {createSnowReportLoader, createSubAreaSnowReportLoader} = require('./dataloader');
const models = require('./models');

// models.sequelize.sync({force: true});

const server = new ApolloServer({
  schema: buildFederatedSchema([{typeDefs, resolvers}]),
  context: () => ({
    snowReportLoader: createSnowReportLoader(),
    subAreaReportLoader: createSubAreaSnowReportLoader(),
    models: models
  })
});

server.listen({port: 4002}).then(({url}) => {
  console.log(`Snow Report Server ready at ${url}`);
});
