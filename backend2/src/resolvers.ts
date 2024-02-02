import {ArticlesService} from "./articlesService";

export const resolvers = (service: ArticlesService) => ({
    Query: {
        article: async (_, {id}) => {
            return await service.articleById(id);
        },
        secretQuery: (parent, args, context) => {
            if (!context.user) {
                throw new Error("Unauthorized");
            }
            return "This is protected data";
        }
    },
});
