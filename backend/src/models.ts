export  interface Article {
    bibtex: string;
    creators: Person[];
    contributors: Person[];
    dates: string[];
    formats: string[];
}

export interface Person {
    name: string;
}

export interface ArticleResponse {
    journalArticle: Article;
}