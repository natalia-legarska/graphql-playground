import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql', // Adres twojego serwera GraphQL
});

const authLink = setContext((_, { headers }) => {
    const token = "hardcoded_token";
    return {
        headers: {
            ...headers,
            authorization: token ? token : "",
        }
    }
});

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink) // todo change to get from config (?)
})