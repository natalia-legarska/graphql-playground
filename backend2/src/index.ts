import {ApolloServer} from "apollo-server";
import {typeDefs} from "./typeDefs";
import {resolvers} from "./resolvers";
import {DataCiteService} from "./articlesService";

interface User {
    id: string;
    name: string;
}

const dataService = new DataCiteService();
const server = new ApolloServer({
    typeDefs,
    resolvers: resolvers(dataService),
    context: ({req}) => {
        const token = req.headers.authorization || "";

        let user: User | null = null;
        if (token == "hardcoded_token") {
            user = {id: "1", name: "Test User"};
        }

        return {user};
    }
});

server.listen().then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
});
