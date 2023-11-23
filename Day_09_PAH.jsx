import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Paper,
  CssBaseline,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Home = () => (
  <Container>
    <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
      <Typography variant="h2">Home Page</Typography>
      <Typography variant="body1">Welcome to the Home Page!</Typography>
    </Paper>
  </Container>
);

const About = () => (
  <Container>
    <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
      <Typography variant="h2">About Page</Typography>
      <Typography variant="body1">
        Learn more about us on the About Page.
      </Typography>
    </Paper>
  </Container>
);

const Contact = () => (
  <Container>
    <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
      <Typography variant="h2">Contact Page</Typography>
      <Typography variant="body1">
        Contact us through the Contact Page.
      </Typography>
    </Paper>
  </Container>
);

const theme = createTheme();

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My Router App</Typography>
          <nav>
            <ul
              style={{ listStyle: "none", display: "flex", marginLeft: "auto" }}
            >
              <li style={{ margin: "0 10px" }}>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  Home
                </Link>
              </li>
              <li style={{ margin: "0 10px" }}>
                <Link
                  to="/about"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  About
                </Link>
              </li>
              <li style={{ margin: "0 10px" }}>
                <Link
                  to="/contact"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </ThemeProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
