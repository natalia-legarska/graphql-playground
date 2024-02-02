import {gql, useLazyQuery} from "@apollo/client";
import {Box, Container} from "@mui/material";
import React, {useState} from "react";
import {Article} from "./article/Article";
import {LoadingBackdrop} from "./loading-backdrop/LoadingBackdrop";
import {SearchForm} from "./search-form/SearchForm";

const GET_ARTICLE_QUERY = gql`
    query GetArticle($id: ID!) {
        article(id: $id) {
            bibtex
            dates
        }
    }
`;

export function Main() {
    const [doi, setDoi] = useState("");
    const [fetchArticle, {loading, data, error}] = useLazyQuery(GET_ARTICLE_QUERY);

    const handleFetchClick = (doi:string) => {
        if (doi) {
            fetchArticle({variables: {id: doi}});
            setDoi(doi);
        }
    };

    return (
        <Container>
            <Box component="main" sx={{p: 3}}>
                <SearchForm onFetch={handleFetchClick}/>
                <Article doi={doi} data={data} error={error}/>
                <LoadingBackdrop open={loading} handleClose={() => {
                }}/>
            </Box>
        </Container>
    );
}