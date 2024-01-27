export interface Article {
    DOI?: string | null;
    ISSN: string;
    URL: string;
    abstract?: string | null;
    accessed: string;
    author?: (Person)[] | null;
    citationKey: string;
    containerTitle: string;
    containerTitleShort?: string | null;
    editor?: (Person)[] | null;
    id: string;
    issue?: string | null;
    issued: string;
    language?: string | null;
    page?: string | null;
    source: string;
    title: string;
    titleShort?: string | null;
    type: string;
    volume: string;
}

export interface Person {
    family: string;
    given: string;
}
