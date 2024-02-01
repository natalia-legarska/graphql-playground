import {Article, ArticleResponse} from "./models";

export interface ArticlesService {
    articleById(id: string): Promise<any>;
}

export class DataCiteService implements ArticlesService {
    baseUrl = 'https://api.datacite.org/graphql';

    async articleById(id: string): Promise<Article> {
        const query = `
            query GetJournalArticle($id: ID!) {
                journalArticle(id: $id){                       
                  bibtex
                  creators{
                    name
                  }
                  contributors {
                    name
                  }
                  dates {
                    date
                  }
                  formats
                }
            }`;
        const variables = { id };

        const result: ArticleResponse = await this.fetchFromApi(this.baseUrl, query, variables);

        return this.mapResultToArticle(result.journalArticle);
    }

    async fetchFromApi(url:string, query: string, variables: Object) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: query,
                variables: variables,
            }),
        });
        return (await response.json()).data;
    }

    mapResultToArticle(result): Article {
        return {
            bibtex: result.bibtex,
            creators: result.creators.map(creator => ({
                name: creator.name
            })),
            contributors: result.contributors.map(contributor => ({
                name: contributor.name
            })),
            dates: result.dates.map(dateObj => dateObj.date),
            formats: result.formats
        };
    }
}