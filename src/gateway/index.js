const {ApolloServer} = require('apollo-server');
const {ApolloGateway} = require('@apollo/gateway');

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
    apiKey: "service:weekend-warrior-scorer:hbBzrJuw9MYQIq7bn-S9YA",
    schemaTag: "current"
  }
});

server.listen({port: 4000}).then(({url}) => {
  console.log(`Gateway server ready at ${url}`);
});
