/*
  🎯 Day 4 PAH

  Files to change:
    - LoginButton.js
    - App.js

  Steps to follow:
    - cd reactapp
    - npm install
    - npm i @mui/material @emotion/styled @emotion/react
    - Copy/paste the code
    - npm start

  That's all 👍
*/


// LoginButton.js
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

const LoginButton = () => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);

    handleClose();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button data-testid="login" onClick={handleOpen} variant="outlined">
        Login
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            data-testid="username"
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            data-testid="password"
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button data-testid="cancel" onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button data-testid="dia-login" onClick={handleLogin} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LoginButton;


// App.js

import React from "react";
import LoginButton from "./LoginButton";

function App() {
  return (
    <div>
      <LoginButton />
    </div>
  );
}

export default App;