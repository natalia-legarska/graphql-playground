import { ApolloServer, gql } from 'apollo-server';

// A sample schema
const typeDefs = gql`
    type Query {
        hello: String
    }
`;

// Resolvers define the technique for fetching the types in the schema
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
};

// Initialize the Apollo server with the schema and resolvers
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
