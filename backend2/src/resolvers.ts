export const resolvers = {
    Query: {
        article: async (_, {id}) => {
            const response = await fetch('https://api.datacite.org/graphql', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query: `
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
                        }
                  `,
                    variables: {id},
                }),
            });
            const json = await response.json();

            const article = json.data.journalArticle;
            return {
                bibtex: article.bibtex,
                creators: article.creators.map(creator => ({
                    name: creator.name
                })),
                contributors: article.contributors.map(contributor => ({
                    name: contributor.name
                })),
                dates: article.dates.map(date => date.date),
                formats: article.formats
            };
        },
    },
};