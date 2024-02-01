import {ArticlesService} from "./articlesService";

export const resolvers = (service: ArticlesService) => ({
    Query: {
        article: async (_, {id}) => {
            return await service.articleById(id);
        },
    },
});
