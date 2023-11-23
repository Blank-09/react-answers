import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Tabs, Tab, Container, Typography } from "@mui/material";
import "./App.css";

const NavBar = () => {
  const [value, setValue] = useState(0);
  return (
    <AppBar position="static" sx={{ flexDirection: "row", bgcolor: "#fff8" }}>
      <Typography variant="h5" sx={{ px: 2, py: 1, color: "#000", mr: "auto" }}>
        Music World
      </Typography>

      <Tabs value={value}>
        <Tab onClick={() => setValue(0)} label="Home" component={Link} to="/" />
        <Tab
          onClick={() => setValue(1)}
          label="Singers"
          component={Link}
          to="/singers"
        />
        <Tab
          onClick={() => setValue(2)}
          label="Albums"
          component={Link}
          to="/albums"
        />
      </Tabs>
    </AppBar>
  );
};

const Home = () => {
  return (
    <Container sx={{ p: 5 }}>
      <Typography variant="h2">Welcome to Music World!</Typography>
    </Container>
  );
};

const Singers = () => {
  return (
    <Container sx={{ p: 5 }}>
      <Typography variant="h2">Singers</Typography>
      <ul>
        {Array(5)
          .fill()
          .map((_, i) => (
            <li>
              Singer {i + 1} - {1980 + Math.floor(Math.random() * 40)}
            </li>
          ))}
      </ul>
    </Container>
  );
};

const Albums = () => {
  return (
    <Container sx={{ p: 5 }}>
      <Typography variant="h2">Albums</Typography>
      <ul>
        <li>Album 1 - Singer</li>
        <li>Album 2 - Singer</li>
        <li>Album 3 - Singer</li>
      </ul>
    </Container>
  );
};

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singers" element={<Singers />} />
        <Route path="/albums" element={<Albums />} />
      </Routes>
    </Router>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
