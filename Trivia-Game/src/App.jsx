import { useState } from "react";
import "./BackgroundStyles.css";
import { Button, Stack } from "@mui/material";
import "./App.css";

function App() {
  const options = [
    { label: "Security", category: "Security" },
    { label: "Privacy", category: "Privacy" },
    { label: "Authentication", category: "Authentication" },
    { label: "Passwords", category: "Passwords" },
    { label: "Authentication", category: "Authentication" },
    { label: "Malware", category: "Malware" },
  ];

  return (
    <div>
      <h1>Information Security Trivia!</h1>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {options.map((option) => (
          <Button
            size="medium"
            variant="contained"
            onClick={() => {
              alert(option.category);
            }}
          >
            {option.label}
          </Button>
        ))}
      </Stack>
    </div>
  );
}

export default App;
