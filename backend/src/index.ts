import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from "@apollo/server/standalone";

const articlesDataSet = await import("./data/emoji-articles-export.json", {
    assert: {type: 'json'}
});

// A sample schema
const typeDefs = `#graphql    
type Person{
    family: String
    given: String
}

type Article {
    DOI: String
    ISSN: String
    URL: String
    abstract: String
    accessed: String
    author: [Person]
    citationKey: String
    containerTitle: String
    containerTitleShort: String
    editor: [Person]
    id: String
    issue: String 
    issued: String
    language: String 
    page: String
    source: String
    title: String
    titleShort: String 
    type: String
    volume: String
}

type Query {
    articles: [Article]
#    authors: [Person]
}
`;

// Resolvers define the technique for fetching the types in the schema
const resolvers = {
    Query: {
        articles: () => articlesDataSet.default
    },
};

// Initialize the Apollo server with the schema and resolvers
const server = new ApolloServer({typeDefs, resolvers});

// Start the server

const {url} = await startStandaloneServer(server, {
    listen: {port: 4000}
});

console.log(`🚀 Server ready at ${url}`);
