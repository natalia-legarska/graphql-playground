import {ApolloServer} from "apollo-server";
import {typeDefs} from "./typeDefs";
import {resolvers} from "./resolvers";
import {DataCiteService} from "./articlesService";

const dataService = new DataCiteService();
const server = new ApolloServer({ typeDefs, resolvers: resolvers(dataService) });

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
