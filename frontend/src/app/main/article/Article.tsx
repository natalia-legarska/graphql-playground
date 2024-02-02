import {ApolloError} from "@apollo/client";
import {Box, Typography} from "@mui/material";

interface ArticleProps {
    doi: string;
    data: any;
    error: ApolloError | undefined;
}

export const Article: React.FC<ArticleProps> = ({doi, data, error}) => {
    if (error) return <Typography color="error">Error: {error.message}</Typography>;
    if (!data) return <Typography>No data</Typography>;

    return (
        <>
            <Box>
                <Typography variant="subtitle2">{doi}</Typography>
                <Typography variant="body1">bibtex: {data?.article?.bibtex}</Typography>
            </Box>
        </>
    )
}