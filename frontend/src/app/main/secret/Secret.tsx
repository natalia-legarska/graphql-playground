import {ApolloError} from "@apollo/client";
import {Box, Typography} from "@mui/material";

interface SecretProps {
    data: any;
    error: ApolloError | undefined;
}

export const Secret:React.FC<SecretProps> = ({data, error}) => {
    if (error) return <Typography color="error">Error: {error.message}</Typography>;
    if (!data) return <Typography>No data</Typography>;

    return (
        <>
            <Box>
                <Typography variant="body1">Secret data: {data?.secretQuery}</Typography>
            </Box>
        </>
    )
}