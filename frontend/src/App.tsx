import './App.css';
import {Backdrop, Box, Button, CircularProgress, Stack, TextField, ThemeProvider} from "@mui/material";
import React from "react";
import Nav from "./Nav";
import {theme} from "./theme";

export default function App() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };


    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Nav></Nav>

                <Box component="main" sx={{p: 3}}>
                    <Stack spacing={2} direction="row">
                        <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
                        <Button variant="contained">Fetch article</Button>
                    </Stack>

                    <Button onClick={handleOpen}>Show backdrop</Button>
                    <Backdrop
                        sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                        open={open}
                        onClick={handleClose}
                    >
                        <CircularProgress color="inherit"/>
                    </Backdrop>
                </Box>

            </div>
        </ThemeProvider>
    );
}
