const {ApolloServer} = require('apollo-server');
const {ApolloGateway} = require('@apollo/gateway');

const APOLLO_API_KEY = process.env.APOLLO_API_KEY;

const gateway = new ApolloGateway({
  serviceList: [
    {
      name: 'forecast', url: 'http://localhost:4001'
    },
    {
      name: 'ski-resorts', url: 'http://localhost:4002'
    }
  ]
});

const server = new ApolloServer({
  gateway,
  subscriptions: false,
  engine: {
    apiKey: APOLLO_API_KEY,
    schemaTag: "current"
  }
});

server.listen({port: 4000}).then(({url}) => {
  console.log(`Gateway server ready at ${url}`);
});
