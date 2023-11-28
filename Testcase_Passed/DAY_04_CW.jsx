/*
  🎯 Day 4 CW

  Files to change:
    - FruitSurvey.js
    - App.js

  Steps to follow:
    - cd reactapp
    - npm install
    - npm i @mui/material @emotion/styled @emotion/react
    - Copy/paste the code
    - npm start

  That's all 👍
*/

// FruitSurvey.js
import React, { useState } from "react";
import { TextField, Autocomplete, Button, Box } from "@mui/material";

const Fruits = ["Apple", "Banana", "Cherry", "Durian", "Elderberry"];

const FruitSurvey = () => {
  const [name, setName] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <h1>Enter your name favourite friut :</h1>
      <TextField
        style={{ marginBottom: "10px" }}
        variant="standard"
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Name"
        data-testid="name"
      />
      <Autocomplete
        style={{ width: "250px", marginBottom: "10px" }}
        value={selectedValue}
        onChange={(_, newValue) => setSelectedValue(newValue)}
        options={Fruits}
        renderInput={(params) => (
          <TextField
            {...params}
            data-testid={`option-${selectedValue}`}
            label="Fruits"
            variant="outlined"
          />
        )}
        data-testid="autocomplete"
      />
      <Button
        type="submit"
        variant="contained"
        style={{ width: "150px" }}
        data-testid="button"
      >
        Submit
      </Button>
    </Box>
  );
};

export default FruitSurvey;

// App.js

import React from "react";
import FruitSurvey from "./FruitSurvey";

export default function App() {
  return <FruitSurvey />;
}
