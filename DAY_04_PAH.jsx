import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import React, { useState } from "react";
import "../App.css";

export default function SimpleDialogDemo() {
  const [val, setVal] = useState(false);

  function handle() {
    setVal(true);
  }

  function handleclose() {
    setVal(false);
  }

  return (
    <div>
      <h1>DIALOG BOX USING MUI </h1>
      <Button variant="contained" onClick={handle}>
        open
      </Button>
      <Dialog open={val}>
        <div>
          <DialogTitle className="hel">Login</DialogTitle>
          <List>
            <ListItem>
              <TextField
                variant="standard"
                fullWidth
                label="Username"
              ></TextField>
            </ListItem>
            <ListItem>
              <TextField
                variant="standard"
                fullWidth
                label="Password"
              ></TextField>
            </ListItem>
          </List>
          <DialogActions>
            <Button variant="contained" onClick={handleclose}>
              CANCEL
            </Button>
            <Button variant="contained" onClick={handleclose}>
              LOGIN
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
