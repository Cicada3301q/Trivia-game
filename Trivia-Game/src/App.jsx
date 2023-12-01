import { useState } from "react";
import "./BackgroundStyles.css";
import { Button, Stack } from "@mui/material";
import * as ReactDOM from "react-dom";
import PKIImage from './assets/PKI-1000.png';
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
  const MockquizDataDigitalSignatures = [
    {
      questionText: "Digital Signatures can easily be forged using fake keys for the signature",
      options: ["True", "False"],
      correctAnswer: "False",
      category: "Digital-Signatures",
      points: 100,
    },
    {
      questionText: "What do digital signatures allow a reader of a message to do?",
      options: ["Acknowledge and prove that the message was received", "Sign a received message and send it back", "Authenticate or verify the message", "Allow a governing body to prove that a message is genuine"],
      correctAnswer: "Authenticate or verify the message",
      category: "Digital-Signatures",
      points: 200,
    },
    {
      questionText: "Assume that a digital signature can be compared to a safe with a padlock attached to it. How does this padlock function, given that there is one owner of it, and anybody can have access to it?",
      options: ["Anybody can close the padlock and only the owner can open it", "Anybody can open the padlock and only the owner can close it", "Anybody can open and close the padlock", "None of the above"],
      correctAnswer: "Anybody can open the padlock and only the owner can close it",
      category: "Digital-Signatures",
      points: 400,
    },
    {
      questionText: "A Man-In-The-Middle Attack is a type of cyberattack on digital communications and regards digital signatures. How does the attacker tamper with communications and signatures of a reader, assuming they need to intercept these?",
      options: ["Communications are interrupted and the attacker shuts down all access to message contents", "The attacker modifies messages and digital signatures of the message without tampering with any communication between two parties", "The attacker reroutes communications under their control, then modifies the digital signature to trick the reader", "The attacker reroutes communications under their control, then modifies messages without touching the digital signature of the message"],
      correctAnswer: "The attacker reroutes communications under their control, then modifies messages without touching the digital signature of the message",
      category: "Digital-Signatures",
      points: 800,
    },
    {
      questionText: "A Man-In-The-Middle Attack is a type of cyberattack on digital communications and regards digital signatures. This form of attack can typically take advantage of Diffie-Hellman Key Exchange (recall DHKE in public key cryptography). What is the solution to foiling this type of attack?",
      options: ["Sign everything with publicly known keys and use private keys to authenticate", "Change the shared private keys DHKE uses with both parties", "Use Authenticated DHKE on digital signatures", "There is no plausible protection against this attack"],
      correctAnswer: "Use Authenticated DHKE on digital signatures",
      category: "Digital-Signatures",
      points: 1000,
    },
  ]
  const MockquizDataPKI = [
    {
      questionText: "What is Pretty Good Privacy primarily used for?",
      options: ["SMS texting", "Email", "Social media platforms", "HTTPS-based websites"],
      correctAnswer: "Email",
      category: "PKI",
      points: 100,
    },
    {
      questionText: "What does a Digital Certificate NOT contain?",
      options: ["Signature of a Certificate Authority", "A public key", "A private key", "An identity"],
      correctAnswer: "A private key",
      category: "PKI",
      points: 200,
    },
    {
      questionText: "Can a certificate be self-signed? Why or why not?",
      options: ["Yes, if a root certificate authority is created", "Yes, your self-signed certificate will be approved by an official certificate authority", "No, it is impossible to self-sign a digital certificate", "No, you cannot create an authorized certificate without getting permission from official certificate authorities"],
      correctAnswer: "Yes, if a root certificate authority is created",
      category: "PKI",
      points: 400,
    },
    {
      questionText: "What happens during online certificate status protocol (OCSP) stapling?",
      options: ["Checks a certificate's serial number through the internet and verifies it matches", "Certificates get compromised during a Man-In-The-Middle attack on the certificate authority", "Checks a localized certificate revocation list file for an invalid certificate, then downloads and validates a new certificate from the certificate authority", "Websites request time-stamped validation from the certificate authority very frequently, and appends it"],
      correctAnswer: "Websites request time-stamped validation from the certificate authority very frequently, and appends it",
      category: "PKI",
      points: 800,
    },
    {
      questionText: "In the image above, which certificate authority verifies all issued digital certificates for the other 3?",
      options: ["Certified Agency CA Secured Server", "Corporate Certification Agency Root CA", "freesoftware.com", "Good Canadian Security Inc. Certification Authority"],
      correctAnswer: "Corporate Certification Agency Root CA",
      category: "PKI",
      image: PKIImage,
      points: 1000,
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
      <Route path="/Digital-Signatures" element={<Quiz quizData = {MockquizDataDigitalSignatures}/>}/>
      <Route path="/PKI" element={<Quiz quizData = {MockquizDataPKI}/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;