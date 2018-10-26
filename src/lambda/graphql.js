const { ApolloServer, gql } = require('apollo-server-lambda');
import fetch from 'node-fetch';

const typeDefs = gql`
  type Query {
    address(id: String!): String
  }
`;

const resolvers = {
  Query: {
    address: (parent, args) => {
      const { id } = args
      const apiCall = fetch(`https://api.etherscan.io/api?module=account&action=balance&address=${id}&tag=latest&apikey=${"8SIYM6JVM2H2248TJ1B1I3PDB4KX154KAJ"}`)
                            .then(res => res.json()
                            .then(data => data.result))
      return apiCall
    }
    // dogPhotoUrl: (root, args, context) =>
    //   'https://images.dog.ceo/breeds/pomeranian/n02112018_1090.jpg'
  }
};

export const handler = new ApolloServer({
    cors: {
    origin: '*',
    credentials: true,
  },
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
}).createHandler();