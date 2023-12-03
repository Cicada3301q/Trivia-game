import React from "react";
import { Button, Stack } from "@mui/material";
import Quiz from './Quiz';
//import { useHistory } from "react-router-dom";

function App() {
    const options = [
      { label: "Security", category: "/Security" },
      { label: "Passwords", category: "/Passwords" },
      { label: "Password Storage", category: "/PasswordsStorage" },
      { label: "Authorization", category: "/Authorization" },
      { label: "Linux", category: "/Linux" },
      { label: "Computer Representation of Data", category: "/Comp-data" },
      { label: "Malware", category: "/Malware" },
      { label: "Cryptography", category: "/Cryptography" },
      { label: "Digital Signatures", category: "/Digital-Signatures" },
      { label: "Public Key Infrastructure", category: "/PKI" },
      { label: "Web Security", category: "/WebSecurity" },
      { label: "Play All", category: "/All" },
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