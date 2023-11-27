import React from "react";
import { Button, Stack } from "@mui/material";
import Quiz from './Quiz';
//import { useHistory } from "react-router-dom";

function App() {
    const options = [
      { label: "Security", category: "/Security" },
      { label: "Privacy", category: "/Privacy" },
      { label: "Authentication", category: "/Authentication" },
      { label: "Passwords", category: "/Passwords" },
      { label: "Authentication", category: "/Authentications" },
      { label: "Malware", category: "/Malware" },
      { label: "Digital Signatures", category: "/Digital-Signatures" },
      { label: "Public Key Infrastructure", category: "/PKI" },
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
          {options.map((option, index) => (
            <Button
              key={index}
              size="medium"
              variant="contained"
              onClick={() => {
                window.location.href=option.category
              }}
            >
              {option.label}
            </Button>
          ))}
          {/* <Quiz quizData={quizData} /> */}
        </Stack>
      </div>
    );
  }
  
  export default App;