import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from "@apollo/server/standalone";
import {resolvers} from "./resolvers/resolvers";
import {ArticlesDataSource} from "./datasources/articles";
import {typeDefs} from "./schema";

interface ContextValue {
    dataSources: {
        articleDS: ArticlesDataSource;
    };
}
const dataSources = () => ({
    articleDS: new ArticlesDataSource()
})
// Initialize the Apollo server with the schema and resolvers
const server = new ApolloServer<ContextValue>({typeDefs, resolvers});

// Start the server

const {url} = await startStandaloneServer(server, {
    context: async ({req}) => {
        // const {cache} = server;
        return {
            dataSources: {
                articleDS: new ArticlesDataSource()
            },
            listen: {port: 4000}
        }
    }
    // listen: {port: 4000}
});

console.log(`🚀 Server ready at ${url}`);
