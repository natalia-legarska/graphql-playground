import './App.css';
import {ThemeProvider} from "@mui/material";
import React from "react";
import {Main} from "./main/Main";
import Nav from "./nav/Nav";
import {theme} from "../theme";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Nav></Nav>
            <Main></Main>
        </ThemeProvider>
    );
}
