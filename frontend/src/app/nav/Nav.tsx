import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";

const token = "hardcoded_token";

export default function Nav() {
    const isLoggedIn = localStorage.getItem('authToken');

    const handleLogin = () => {
        localStorage.setItem('authToken', token);
        window.location.reload();
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        window.location.reload();
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        GraphQL Task
                    </Typography>
                    {isLoggedIn ? (
                        <Button color="inherit" onClick={handleLogout}>Logout</Button>
                    ) : (
                        <Button color="inherit" onClick={handleLogin}>Login</Button>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}