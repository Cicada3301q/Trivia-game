import { useState } from "react";
import "./BackgroundStyles.css";
import { Button, Stack } from "@mui/material";
import * as ReactDOM from "react-dom";
import Quiz from "./Quiz";
// import Test from "./Test";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import "./App.css";
import StartPage from "./StartPage";
//import { BrowserRouter, Route, Link, Switch} from "react-router-dom";

function App() {

  const MockquizDataMalware = [
    {
      questionText: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris",
      category: "Malware",
    },
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
  ]

  const MockquizDataSecurity = [
    {
      questionText: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris",
      category: "Malware",
    },
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
  ]
  const MockquizDataPrivacy = [
    {
      questionText: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris",
      category: "Malware",
    },
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
  ]
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartPage/>}/>
      <Route path="/Security" element={<Quiz quizData = {MockquizDataSecurity}/>}/>
      <Route path="/Privacy" element={<Quiz quizData = {MockquizDataPrivacy}/>}/>
      <Route path="/Authentication" element={<Quiz/>}/>
      <Route path="/Malware" element={<Quiz quizData = {MockquizDataMalware}/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;