import {gql} from "apollo-server";

export const typeDefs = gql`
    type Person {
        name: String
    }

    type Article {
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