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

    type AccessLogItem {
        timestamp: String
        operationName: String
        userId: String
    }

    type Query {
        article(id: ID!): Article
        secretQuery: String
        accessLogs: [AccessLogItem]
    }
`;