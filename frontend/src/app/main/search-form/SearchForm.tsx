import {Button, Stack, TextField} from "@mui/material";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {useState} from "react";

export const SearchForm = ({ onFetch }: { onFetch: (doi: string) => void }) => {
    const [doi, setDoi] = useState('');

    const handleDoiChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDoi(event.target.value);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={2} direction="row">
                <DatePicker label="From"/>
                <DatePicker label="To"/>
                <TextField id="outlined-basic" label="DOI" variant="outlined" value={doi}
                           onChange={handleDoiChange}/>
                <Button variant="contained" onClick={() => onFetch(doi)}>Fetch article</Button>
            </Stack>
        </LocalizationProvider>
    )
}