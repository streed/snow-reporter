const {ApolloServer} = require('apollo-server');
const {ApolloGateway} = require('@apollo/gateway');

const APOLLO_API_KEY = process.env.APOLLO_API_KEY;

const PORT = process.env.PORT || 4000;

const gateway = new ApolloGateway({
  serviceList: [
    {
      name: 'forecast', url: 'http://localhost:4001'
    },
    {
      name: 'snow-reprots', url: 'http://localhost:4002'
    },
    {
      name: 'satalites', url: 'http://localhost:4003'
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

server.listen({port: PORT, host: "0.0.0.0"}).then(({url}) => {
  console.log(`Gateway server ready at ${url}`);
});
