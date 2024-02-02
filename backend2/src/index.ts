import {ApolloServer} from "apollo-server";
import {accessLogsPlugin} from "./accessLogPlugin";
import {DataCiteService} from "./articlesService";
import {resolvers} from "./resolvers";
import {typeDefs} from "./typeDefs";


interface User {
    id: string;
    name: string;
}

const myContext = ({req}) => {
    const token = req.headers.authorization || "";

    let user: User | null = null;
    if (token == "hardcoded_token") {
        user = {id: "1", name: "Test User"};
    }
    if (token == "very_secret_token") {
        user = {id: "2", name: "Very Serious Admin"};
    }

    return {user};
}

const dataService = new DataCiteService();

const server = new ApolloServer({
        typeDefs,
        resolvers: resolvers(dataService),
        context: myContext,
        plugins: [
            accessLogsPlugin
        ]
    }
);

server.listen().then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
});
