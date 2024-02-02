import {gql, useQuery} from "@apollo/client";
import {Box, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {LoadingBackdrop} from "../loading-backdrop/LoadingBackdrop";

const GET_ARTICLE_QUERY = gql`
    query GetArticle($id: ID!) {
        article(id: $id) {
            bibtex
            dates
        }
    }
`;

export const Article = ({doi}: { doi: string }) => {
    const [open, setOpen] = useState(false);
    const [delayedOpen, setDelayedOpen] = useState(false);

    const {loading, error, data} = useQuery(GET_ARTICLE_QUERY, {
        variables: {id: doi},
        skip: !doi
    });

    useEffect(() => {
        let timer: any;
        const backdropTimeout = 500;

        if (loading) {
            setOpen(true);
            timer = setTimeout(() => setDelayedOpen(false), backdropTimeout);
            setDelayedOpen(true);
        } else {
            timer = setTimeout(() => {
                setOpen(false);
                setDelayedOpen(false);
            }, backdropTimeout);
        }
        return () => clearTimeout(timer);
    }, [loading]);

    if (error) return <Typography color="error">Error: {error.message}</Typography>;
    if (!data) return <Typography>No data</Typography>;

    return (
        <>
            <LoadingBackdrop open={open || delayedOpen} handleClose={() => {}}/>
            <Box>
                <Typography variant="h5">{doi}</Typography>
                <Typography variant="body1">bibtex: {data?.article?.bibtex}</Typography>
            </Box>
        </>
    )
}