import { useState } from "react";
import "./BackgroundStyles.css";
import { Button, Stack } from "@mui/material";
import "./App.css";
import Quiz from './Quiz';

function App() {
  const options = [
    { label: "Security", category: "Security" },
    { label: "Privacy", category: "Privacy" },
    { label: "Authentication", category: "Authentication" },
    { label: "Passwords", category: "Passwords" },
    { label: "Authentication", category: "Authentication" },
    { label: "Malware", category: "Malware" },
  ];

  const quizData = [
    {
      questionText: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris",
      category: "Malware",
    },
    {
      questionText: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
      category: "Astronomy",
    },
    {
      questionText: "Who wrote the play 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
      correctAnswer: "William Shakespeare",
      category: "Literature",
    },
    {
      questionText: "What is the largest mammal in the world?",
      options: ["Elephant", "Whale Shark", "Giraffe", "Blue Whale"],
      correctAnswer: "Blue Whale",
      category: "Biology",
    },
    {
      questionText: "Which gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      correctAnswer: "Carbon Dioxide",
      category: "Botany",
    },
    {
      questionText: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      correctAnswer: "Canberra",
      category: "Geography",
    },
    // Add more questions here...
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
              <Quiz quizData={quizData} />;
            }}
          >
            {option.label}
          </Button>
        ))}
        <Quiz quizData={quizData} />
      </Stack>
    </div>
  );
}

export default App;
