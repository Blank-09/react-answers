import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";

const fruits = [
  { label: "Apple" },
  { label: "Banana" },
  { label: "Cherry" },
  { label: "Durian" },
  { label: "ElderBerry" },
];

function Form() {
  const [name, setName] = useState("");
  // Updated state variable
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [greet, setGreet] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Hello, ${name}! Your favorite fruit is ${selectedFruit.label}.`
    );
    setGreet(`Hello, ${name}! Your favorite fruit is ${selectedFruit.label}.`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Typography variant="h2">Enter your favourite fruit:</Typography>
        <br />
        <TextField
          variant="standard"
          id="name"
          label="Name:"
          value={name}
          type="Name"
          autoComplete="current-password"
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />
        <br />

        <Autocomplete
          id="autocomplete"
          options={fruits}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => (
            <TextField {...params} label="Choose a fruit" />
          )}
          onChange={(_, value) => setSelectedFruit(value)} // Store the selected value in state
          value={selectedFruit}
        />

        <Button
          data-testid="button"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          SUBMIT
        </Button>

        {greeting && <Typography variant="body1">{greeting}</Typography>}
        <Button
          variant="contained"
          type="submit"
          id="button"
          style={{ marginTop: "10px" }}
        >
          Submit
        </Button>
      </form>
      <Typography variant="body1" style={{ marginTop: "10px" }}>
        {greet}
      </Typography>
    </div>
  );
}

export default App;
