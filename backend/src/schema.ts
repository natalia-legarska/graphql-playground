export const typeDefs = `#graphql
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