import "../App.css";

import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Nav from "../components/Nav";
import Home from "../pages/Home";
import Footer from "../components/Footer";

export default function RouterComponent() {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#16C2D5",
      },
      secondary: {
        main: "#16C2D5",
      },
      text: {
        primary: "#33374C",
        secondary: "#2D539E",
        disabled: "#ADB1C4",
      },
      error: {
        main: "#FC7374",
      },
      background: {
        paper: "#f9fbfd",
        default: "#fcfcfc",
      },
    },

    typography: {
      fontFamily: "Oswald",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <Nav />
        <Switch>
          <Route exact component={Home} path="/" />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
