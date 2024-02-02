import {gql, useLazyQuery} from "@apollo/client";
import {Box, Container, Typography} from "@mui/material";
import React, {useState} from "react";
import {Article} from "./article/Article";
import {LoadingBackdrop} from "./loading-backdrop/LoadingBackdrop";
import {SearchForm} from "./search-form/SearchForm";
import {Secret} from "./secret/Secret";

const GET_ARTICLE_QUERY = gql`
    query GetArticle($id: ID!) {
        article(id: $id) {
            bibtex
            dates
        }
    }
`;

const GET_SECRET_QUERY = gql`
    query {
        secretQuery
    }
`

export function Main() {
    const [doi, setDoi] = useState("");
    const [fetchArticle, {
        loading: loadingArticle,
        data: dataArticle,
        error: errorArticle
    }] = useLazyQuery(GET_ARTICLE_QUERY);
    const [fetchSecret, {
        loading: loadingSecret,
        data: dataSecret,
        error: errorSecret
    }] = useLazyQuery(GET_SECRET_QUERY);

    const handleFetchClick = (doi: string) => {
        if (doi) {
            fetchArticle({variables: {id: doi}});
            setDoi(doi);
        }
        fetchSecret({})
    };

    return (
        <Container>
            <Box component="main" sx={{p: 3}}>
                <SearchForm onFetch={handleFetchClick}/>
                <Box sx={{p: 3}}>
                    <header>
                        <Typography variant="h5">Article Query</Typography>
                    </header>
                    <Article doi={doi} data={dataArticle} error={errorArticle}/>
                </Box>

                <Box sx={{p: 3}}>
                    <header>
                        <Typography variant="h5">Secret Query</Typography>
                    </header>
                    <Secret data={dataSecret} error={errorSecret}/>
                </Box>

                <LoadingBackdrop open={loadingArticle || loadingSecret} handleClose={() => {
                }}/>
            </Box>
        </Container>
    );
}