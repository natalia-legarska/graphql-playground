import {Backdrop, Box, Button, CircularProgress, Container, Stack, TextField} from "@mui/material";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";

export function Main() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <Container>
            <Box component="main" sx={{p: 3}}>
                <Stack spacing={2} direction="row">

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker label="From"/>
                        <DatePicker label="To"/>
                    </LocalizationProvider>

                    <TextField id="outlined-basic" label="DOI" variant="outlined"/>
                    <Button variant="contained">Fetch article</Button>
                </Stack>

                <Button onClick={handleOpen}>Show backdrop</Button>
                <Backdrop
                    sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                    open={open}
                    onClick={handleClose}>
                    <CircularProgress color="inherit"/>
                </Backdrop>
            </Box>
        </Container>
    );
}