import {Button, Stack, TextField} from "@mui/material";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {useState} from "react";

export const SearchForm = ({onFetch}: { onFetch: (doi: string) => void }) => {
    const [inputDoi, setInputDoi] = useState("");

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={2} direction="row">
                <DatePicker label="From"/>
                <DatePicker label="To"/>
                <TextField value={inputDoi}
                           onChange={(e) => setInputDoi(e.target.value)}
                           label="DOI"
                           variant="outlined" />
                <Button onClick={() => onFetch(inputDoi)}
                        variant="contained">
                    Fetch article
                </Button>
            </Stack>
        </LocalizationProvider>
    )
}