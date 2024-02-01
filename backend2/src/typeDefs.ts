import {gql} from "apollo-server";

export const typeDefs = gql`
    type Person {
        name: String
    }

    type Article {
        id: ID!
        bibtex: String
        creators: [Person]
        contributors: [Person]
        dates: [String]
        formats: [String]
    }

    type Query {
        article(id: ID!): Article
    }
`;