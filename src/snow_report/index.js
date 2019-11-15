const {ApolloServer} = require('apollo-server');
const {buildFederatedSchema} = require('@apollo/federation')

const {resolvers} = require('./resolvers');
const {typeDefs} = require('./type_defs');
const loaders = require('./dataloader');
const models = require('./models');

// models.sequelize.sync({force: true});

const server = new ApolloServer({
  schema: buildFederatedSchema([{typeDefs, resolvers}]),
  context: () => ({
    snowReportLoader: loaders.createSnowReportLoader(),
    subAreaReportLoader: loaders.createSubAreaSnowReportLoader(),
    subAreaLoader: loaders.createSubAreasLoader(),
    seasonTotalLoader: loaders.createSeasonTotalsLoader(),
    readingsLoader: loaders.createReadingsLoader(),
    models: models
  })
});

server.listen({port: 4002}).then(({url}) => {
  console.log(`Snow Report Server ready at ${url}`);
});
