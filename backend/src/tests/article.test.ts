import {ArticlesService} from "../articlesService";
import {Article} from "../models";
import {ApolloServer} from "apollo-server";
import {typeDefs} from "../typeDefs";
import {resolvers} from "../resolvers";

class MockArticlesService implements ArticlesService{
    static fakeArticle: Article = {
        bibtex: "test-bibtex",
        contributors: [],
        creators: [],
        dates: [],
        formats: []
    }

    async articleById(id: string): Promise<Article> {
        return MockArticlesService.fakeArticle;
    }
}

describe('Article query', () => {
    const ARTICLE_QUERY = `
      query GetArticle($id: ID!) {
        article(id: $id) {
          bibtex
          creators {
            name
          }
        }
      }
    `;

    let testServer: ApolloServer;

    beforeAll(() => {
        const dataService = new MockArticlesService();
        testServer = new ApolloServer({ typeDefs, resolvers: resolvers(dataService) });
    });

    it('should fetch a single article', async () => {
        const result = await testServer.executeOperation({
            query: ARTICLE_QUERY,
            variables: { id: "1"}
        });


        expect(result.errors).toBeUndefined();
        expect(result.data?.article).toEqual({
            "bibtex": "test-bibtex",
            "creators": []
        });
    });
});