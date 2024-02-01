import {ArticlesDataSource} from "../datasources/articles";

export const resolvers = {
    Query: {
        articles: (parent, args, { dataSources }, info) => {
            return dataSources.Article.getArticles();
        }
    },
}