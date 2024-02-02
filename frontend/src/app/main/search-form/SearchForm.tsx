import {Autocomplete, Button, Stack, TextField} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {useState} from "react";

const doiList = [
    {label: '10.1016/j.chb.2021.106722', id: 1},
    {label: '10.1037/ppm0000219', id: 2},
    {label: '10.1145/3375629', id: 3},
];
export const SearchForm = ({onFetch}: { onFetch: (doi: string) => void }) => {
    const [inputDoi, setInputDoi] = useState("");

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={2} direction="row">
                {/*<DatePicker label="From"/>*/}
                {/*<DatePicker label="To"/>*/}
                <Autocomplete renderInput={(params) => <TextField {...params} label="DOI"/>}
                              options={doiList.map(option => option.label)}
                              onChange={(event, newValue) => {
                                  setInputDoi(newValue || "");
                              }}
                              disablePortal
                              sx={{width: 300}}
                              freeSolo
                />
                <Button onClick={() => onFetch(inputDoi)}
                        variant="contained">
                    Fetch article
                </Button>
            </Stack>
        </LocalizationProvider>
    )
}