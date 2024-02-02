import {Box, Container} from "@mui/material";
import React, { useState } from "react";
import {Article} from "./article/Article";
import {SearchForm} from "./search-form/SearchForm";

export function Main() {
    const [doi, setDoi] = useState("");

    return (
        <Container>
            <Box component="main" sx={{p: 3}}>
                <SearchForm onFetch={(newDoi: string) => setDoi(newDoi)} />
                <Article doi={doi} />
            </Box>
        </Container>
    );
}