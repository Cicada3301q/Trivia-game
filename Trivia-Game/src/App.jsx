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

  const MockData = [
{ 
    questionText: " A string is made from a sequence of chars. Char is a datatype with the size of ____ byte. Fill in the blank.", 
    options: ["0", "0.1", "1", "3"], 
    correctAnswer: "1",
    category: "Computer Representation of Data",
    points: 100,
    },

    { 
    questionText: "What does the 0b prefix indicate? It indicates that the number  ______ .", 
    options: ["can be converted into binary numbers", "is written in binary", "is made up of bytes", "must consist of natural numbers"], 
    correctAnswer: " is written in binary",
    category: "Computer Representation of Data",
    points: 100,
    },

    { 
    questionText: " What does lsb = 1 mean?", 
    options: ["the rightmost bit is odd", "the rightmost bit is even", " the leftmost bit is odd", "the leftmost bit is even"], 
    correctAnswer: "the rightmost bit is odd",
    category: "Computer Representation of Data", 
    points: 200,
    },

    { 
    questionText: "What is a nybble also known as?", 
    options: ["oct digit", "stringtet", "quartet", "atari"], 
    correctAnswer: "quartet",
    category: "Computer Representation of Data", 
    points: 300,
    },

    { 
    questionText: "Convert the decimal 563 into binary", 
    options: ["0b1000100101", "0b1100010011", "0b1000011100", "0b1000110011"], 
    correctAnswer: "0b1000110011",
    category: "Introduction to Cryptography", 
    points: 400,
    },

    { 
    questionText: "4x = 12 (mod 71). Solve for x. x = ____", 
    options: ["4", "8", "5", "9"], 
    correctAnswer: "9",
    category: "Introduction to Cryptography", 
    points: 500,
    },


    { 
    questionText: "Decrypt ciphertext cifrrz using Vigenere cipher with key=ABBA. What is the plaintext?", 
    options: ["cherry", "button", "bottle", "carry"], 
    correctAnswer: "cherry",
    category: "Introduction to Cryptography", 
    points: 500,
    }

  ]

const MockDataSecurity = [
  {
    questionText: "What are the three properties of a secure computer system?",
    options: ["Confidentiality, integrity and availability", "Speed, efficiency, protection", "Accuray, complexity, reliability", "Scalability, speed, integrity"
    ],
    correctAnswer: "Confidentiality, integrity and availability",
    category: "Security",
    points:100,
    },
    {
    questionText: "Which property of the security triad states that 'access to systems or data should be limited to authorized parties?",
    options: ["Confidentiality", "Integrity", "Availability", "Speed"],
    correctAnswer: "Confidentiality",
    category: "Security",
    points:200,
    },
    {
    questionText: "Which property of the security triad states that 'data should be neither intentionally tampered with nor accidentally corrupted'?",
    options: ["Integrity", "Availability", "Complexity", "Confidentiality"],
    correctAnswer: "Integrity",
    category: "Security",
    points:400,
    },
    {
    questionText: "Which property of the security triad states that 'the system of data should always be there when you need it or want it'?",
    options: ["Availability", "Integrity", "Confidentiality", "Accuracy"],
    correctAnswer: "Availability",
    category: "Security",
    points:400,
    },
    {
    questionText: "Is this a description of adversaries: 'Individuals, groups, organizations or entities that will carry out malicious attacks against information systems, networks or digital assets'?",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Security",
    points:100,
    },
    {
    questionText: "What principle states that attackers will use any available means of penetration and that they go after the weakest link?",
    options: ["Principle of Easiest Penetration", "Principle of Adequate Protection", "Principle of Availability", "Principle of Divide and Conquer"],
    correctAnswer: "Principle of Easiest Penetration",
    category: "Security",
    points:100,
    },
    
]

const MockDataAuthentication = [
  {
    questionText: "What is identification?",
    options: ["A process of determining which principal an agent wishes to act as", "Process of updating software", "Process of backing up data in a computer system to a database", "Answer is not present"],
    correctAnswer: "A process of determining which principal an agent wishes to act as",
    category: "Identification and Authentication",
    points:800,
    },
    {
    questionText: "The main problem about identification is that people and computers can lie.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Identification and Authentication",
    points:800,
    },
    {
    questionText: "Asking a person for their public key is a good way of identifying that person.",
    options: ["True", "False"],
    correctAnswer: "False",
    category: "Identification and Authentication",
    points:800,
    },
    {
    questionText: "Asking a computer for its public key is a good way of identifying that computer.",
    options: ["True", "False"],
    correctAnswer: "False",
    category: "Identification and Authentication",
    points:800,
    },
    {
    questionText: "What is authentication?",
    options: ["Proving/verifying the claimed identity of the agent", "Implementation of encryption algorithms", "Process of increasing speed of computer networks", "Process of updating and maintaining an application"],
    correctAnswer: "Proving/verifying the claimed identity of the agent",
    category: "Identification and Authentication",
    points:800,
    },
    {
    questionText: "Which one is not a way to authenticate a person's identity?",
    options: ["Using their already known public information", "Ask for and inspect government-issued ID", "Recognize their appearance and sound of voice", "Ask someone you trust to verify their identity"],
    correctAnswer: "Using their already known public information",
    category: "Identification and Authentication",
    points:1000,
    },
    {
    questionText: "Which one is not a way to authenticate a computer's identity?",
    options: ["All are good means to authenticating a computer's identity", "Get its manufacturer-issued ID", "Get its physical location", "Get its network address"],
    correctAnswer: "All are good means to authenticating a computer's identity",
    category: "Identification and Authentication",
    points:1000,
    },
    {
    questionText: "Something that the user knows, has, is, and their context are the four basic classes of authentication factors.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Identification and Authentication",
    points:1000,
    },
    {
    questionText: "Two passwords, password and PIN, SMS and phone, fingerprint and voice patterns are?",
    options: ["Authentication factors", "Encryption algorithms", "Data storage formats", "Software engineering theories"],
    correctAnswer: "Authentication factors",
    category: "Identification and Authentication",
    points:1000,
    },
    {
    questionText: "Using more than 1 factor is called multi-factor authentication?",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Identification and Authentication",
    points:100,
    },
    {
    questionText: "Using at most 2 factors is called multi-factor authentication as well as two-factor authentication?",
    options: ["True", "False"],
    correctAnswer: "False",
    category: "Identification and Authentication",
    points:100,
    },
    
]

const MockDataPasswords = [
  {
    questionText: "What is a password?",
    options: ["A short text, typically memorized and kept then used for authentication", "A specific computer virus that can infect software", "A specific algorithm that can be used for data compression", "A specific tool used for updating and maintaining software"],
    correctAnswer: "A short text, typically memorized and kept then used for authentication",
    category: "Passwords",
    points:100,
    },
    {
    questionText: "What is an authentication factor?",
    options: ["Something that the user knows", "Device to increase internet speed", "Method of organizing information in a database", "A computer peripheral"],
    correctAnswer: "Something that the user knows",
    category: "Passwords",
    points:100,
    },
    {
    questionText: "A passphrase is as password but much longer.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Passwords",
    points:400,
    },
    {
    questionText: "What are desirable properties for passwords?",
    options: ["Hard to guess but easy to remember", "Easy to guess and simple to replicate",
    "Short and use of common words", "Based on accessible personal information"],
    correctAnswer: "Hard to guess but easy to remember",
    category: "Passwords",
    points:400,
    },
    {
    questionText: "A user supplies a username and password to a system, then the system will compare them against the stored information, if the pair match a password table on the system the authentication will succeed, if not then authentication fails. This is a simple procedure of password authentication.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Passwords",
    points:400,
    },
    {
    questionText: "What is brute-force attack regarding password guessing attacks?",
    options: ["Try every possible password one-by-one", "Infecting computers with malware to record keystrokes", "Exploiting software vulnerabilities in order to bypass password protections",
    "Sending phishing emails to trick users into revealing their passwords"],
    correctAnswer: "Try every possible password one-by-one",
    category: "Passwords",
    points:400,
    },
    {
    questionText: "A reverse brute-force attack is trying a small number of common passwords against all users.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Passwords",
    points:800,
    },
    {
    questionText: "An online guessing attack is where the attacker will send guesses to the system one by one until they receive a successful one.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Passwords",
    points:800,
    },
    {
    questionText: "Which one is not part of an offline guessing attack?",
    options: ["Stealing the password file is easy", "Stealing the password file is hard", "Much more efficient than an online attack", "All guessed passwords can be also tried on other sites"],
    correctAnswer: "Stealing the password file is easy",
    category: "Passwords",
    points:800,
    },
    {
    questionText: "Regarding username guessing, error messages may reveal information about usernames. Now the following is a good error message: 'No such user found.'",
    options: ["False", "True"],
    correctAnswer: "False",
    category: "Passwords",
    points:800,
    },
    {
    questionText: "Regarding username guessing, error messages may reveal information about usernames. Now the following is a good error message: 'You entered an invalid username or password.'",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Passwords",
    points:800,
    },
    {
    questionText: "Which one is not a countermeasure to online password guessing?",
    options: ["Allowing for infinite amounts of tries without delays", "Account will block after x amount of tries where x is a positive integer", "Slow down the attacker by increasing delays between guesses", "Detect bots with the use of captchas"],
    correctAnswer: "Allowing for infinite amounts of tries without delays",
    category: "Passwords",
    points:100,
    },
    {
    questionText: "Keyloggers, shoulder-surfing, rubber-hose cryptanalysis, network attacks, and social engineering are other methods of directly obtaining passwords.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Passwords",
    points:100,
    },
    {
    questionText: "Which one is not a keystroke logging piece of hardware?",
    options: ["All are keystroke logging hardware", "USB keylogger", "Electromagnetic emissions", "Wireless sniffing"],
    correctAnswer: "All are keystroke logging hardware",
    category: "Passwords",
    points:100,
    },
    {
    questionText: "Spyware and trojans are keystroke logging software.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Passwords",
    points:100,
    },
    {
    questionText: "What are phishing attacks?",
    options: ["The attack aims to obtain sensitive information by pretending to be a trusted entity", "The attack aims to overload the system with traffic to disrupt normal functions", "The attack aims to unauthorized physical access to computer hardware", "It is the practice of creating fake antivirus software"],
    correctAnswer: "The attack aims to obtain sensitive information by pretending to be a trusted entity",
    category: "Passwords",
    points:200,
    },
    {
    questionText: "Social engineering is psychological manipulation of people to disclose confidential information and to also can perform some actions that are beneficial to the attacker.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Passwords",
    points:200,
    },
    {
    questionText: "Phishing, pretexting, quid pro quo, and baiting are examples of social engineering.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Passwords",
    points:200,
    },
    {
    questionText: "Why are there no complexity requirements in the NIST password guidelines in 2019?",
    options: ["People find complex passwords harder to memorize and people respond to these rules differently", "Because passwords with complexity are easier to hack", "Complex passwords were deemed irrelevant with modern encryption", "Due to the high cost of implementing complex password systems"],
    correctAnswer: "People find complex passwords harder to memorize and people respond to these rules differently",
    category: "Passwords",
    points:1000,
    },
    {
    questionText: "Users need to have at least 8 and sometimes 6 characters in a password, which is one of the guidelines in the NIST password guidelines in 2019.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Passwords",
    points:1000,
    },
    {
    questionText: "There is support for at least 64 characters during password creation, which is one of the guidelines in the NIST password guidelines in 2019.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Passwords",
    points:1000,
    },
    {
    questionText: "There is support for any character, including spaces, Unicode, and emoji, which is one of the guidelines in the NIST password guidelines in 2019.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Passwords",
    points:1000,
    },
    {
    questionText: "There is a blacklist for frequently used passwords, which is one of the guidelines in the NIST password guidelines in 2019.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Passwords",
    points:1000,
    },
    {
    questionText: "There are no password hints or secret questions, which is one of the guidelines in the NIST password guidelines in 2019.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Passwords",
    points:1000,
    },
    {
    questionText: "Cannot force users to change passwords periodically, is one of the guidelines in the NIST password guidelines in 2019.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Passwords",
    points:800,
    },
    {
    questionText: "Allowing for passwords to be copy-pasted into the password field, is one of the guidelines in the NIST password guidelines in 2019.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Passwords",
    points:800,
    },
    {
    questionText: "Using two- or multi-factor authentication, is one of the guidelines in the NIST password guidelines in 2019.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Passwords",
    points:800,
    },
    {
    questionText: "There are at least 10 attempts before lockout, which is one of the guidelines in the NIST password guidelines in 2019.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Passwords",
    points:800,
    },
    {
    questionText: "What are password managers used for?",
    options: ["Act as a secure repository for passwords", "Used to prevent viruses from a system", "To develop and compile programming code", "Acts as a tool to increase processing speed of a computer"],
    correctAnswer: "Act as a secure repository for passwords",
    category: "Passwords",
    points:800,
    },
    {
    questionText: "What are the three main types of graphical/visual passwords?",
    options: ["Recognition, recall, cue-recall based", "Static, animated, interactive", "Text, image, audio based", "Linear, circular, grid based"],
    correctAnswer: "Recognition, recall, cue-recall based",
    category: "Passwords",
    points:400,
    },
    {
    questionText: "Users are given a set of images to memorize, then are asked to identify their images from many decoys. This is an example of a recognition based graphical/visual password.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Passwords",
    points:400,
    },
    {
    questionText: "Users create a drawing and then are asked to reproduce their creation. This is an example of a recall based graphical/visual password.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Passwords",
    points:400,
    },
    {
    questionText: "Users create a drawing and then are asked to reproduce their creation with cues to help the recall process. This is an example of a cued-recall based graphical/visual password.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Passwords",
    points:400,
    },
    {
    questionText: "Some potential advantages of graphical/visual passwords are that it could result in stronger passwords and it will be harder for users to write down the password.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Passwords",
    points:400,
    },
    {
    questionText: "Déjà vu, where images are randomly generated where the user selects some of the images and then has to pick the selected images in a set of decoys, is what type of graphical/visual password?",
    options: ["Recognition Based", "Recall Based", "Cued-Recall Based", "Linear Based"],
    correctAnswer: "Recognition Based",
    category: "Passwords",
    points:400,
    },
    {
    questionText: "One major drawback from using passfaces as a graphical/visual password is that it takes longer to memorize and authenticate.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Passwords",
    points:200,
    },
    {
    questionText: "Draw-a-secret, where a user needs to draw a pattern and then is asked to redraw the pattern, is what type of graphical/visual password?",
    options: ["Recall Based", "Recognition Based", "Cued-Recalled Based", "Animated Based"],
    correctAnswer: "Recall Based",
    category: "Passwords",
    points:200,
    },
    {
    questionText: "Passpoints, where a user has to click 5-8 items on an image and then is asked to click on the remembered items in the same order, is what type of graphical/visual password?",
    options: ["Cued-Recall Based", "Recall Based", "Recognition Based", "Circular Based"],
    correctAnswer: "Cued-Recall Based",
    category: "Passwords",
    points:200,
    },
    {
    questionText: "Lengthy registration and authentication, trade-off between tolerance and security, shoulder-surfing, and technical issues are all issues of graphical/visual passwords.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Passwords",
    points:200,
    },
    
]

const mockDataPasswordStorage = [
  {
    questionText: "A technique that is used for converting readable information into gibberish is called?",
    options: ["Encryption", "Decryption", "Hashing", "Defining"],
    correctAnswer: "Encryption",
    category: "Password Storage",
    points:200,
    },
    {
    questionText: "A technique that is used for converting encrypted gibberish to readable information but requires a secret key is called?",
    options: ["Decryption", "Encryption", "Hashing", "Unwrapping"],
    correctAnswer: "Decryption",
    category: "Password Storage",
    points:200,
    },
    {
    questionText: "A technique that is used for converting readable information into gibberish, however, it cannot be undone is called?",
    options: ["Hashing", "Encryption", "Decryption", "Deciphering"],
    correctAnswer: "Hashing",
    category: "Password Storage",
    points:200,
    },
    {
    questionText: "Passwords that are stored as entered by the user are plaintext passwords.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Password Storage",
    points:200,
    },
    {
    questionText: "What is the main issue of plaintext passwords?",
    options: ["Too easy to steal the password and learn all passwords", "Require too much storage space on servers", "Slow down the login process", "Difficult for users to remember"],
    correctAnswer: "Too easy to steal the password and learn all passwords",
    category: "Password Storage",
    points:200,
    },
    {
    questionText: "Passwords that are encrypted before they are stored are encrypted passwords.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Password Storage",
    points:100,
    },
    {
    questionText: "What is the main issue of encrypted passwords?",
    options: ["A leaked key can decrypt all passwords", "Too complex for users to remember", "Encryption will make the password recovery process hard", "Increase time needed for user authentication"],
    correctAnswer: "A leaked key can decrypt all passwords",
    category: "Password Storage",
    points:100,
    },
    {
    questionText: "Stores a password hash instead of the password itself, where the hash is the output of a hash function, this is called a hashed password.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Password Storage",
    points:100,
    },
    {
    questionText: "A hash function is a function that turns any message into a short, unique string of bits which is irreversible.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Password Storage",
    points:100,
    },
    {
    questionText: "A digest or a fingerprint is the output of a hash function of the given input.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Password Storage",
    points:100,
    },
    {
    questionText: "What does the SHA part of SHA-256 mean?",
    options: ["Secure Hash Algorithm", "Speedy Hash Arrangement", "Standard Hash Assignment", "Synchronized Hash Access"],
    correctAnswer: "Secure Hash Algorithm",
    category: "Password Storage",
    points:100,
    },
    {
    questionText: "What does the 256 part of SHA-256 mean?",
    options: ["Bit length of the output", "When the hash function was developed", "Version number of the hash function", "The amount the function is applied"],
    correctAnswer: "Bit length of the output",
    category: "Password Storage",
    points:100,
    },
    {
    questionText: "Collision resistance can be seen as uniqueness, where it is hard to find x and y such that x is not equivalent to y yet H(x) = H(y), and the only method to find x and y is through brute-force.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Password Storage",
    points:100,
    },
    {
    questionText: "An example of preimage resistance, where given H(x), it is infeasible to find x, is that if an attacker can somehow obtain the hash of the password it should be hard to find the password.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Password Storage",
    points:100,
    },
    {
    questionText: "Preimage resistance can also be seen where H(x) reveals nothing about x beyond the ability to confirm guesses, such that if the attacker doesnt know what x is but then after learning about H(x) they still don’t know much about x.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Password Storage",
    points:100,
    },
    {
    questionText: "Preimage resistance can also be seen as where if given x and H(x), then it is still hard to find y such that H(x) = H(y).",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Password Storage",
    points:100,
    },
    {
    questionText: "What is the main issue of hashed passwords?",
    options: ["Real passwords are not very random", "They take too long to verify during authentication", "Hashing algorithm require many resources regarding computation",
    "Incompatible with modern systems"],
    correctAnswer: "Real passwords are not very random",
    category: "Password Storage",
    points:100,
    },
    {
    questionText: "Method of infiltrating a password-protected computer or network by consistently entering every word in a dictionary as a password is what type of attack?",
    options: ["Dictionary Attack", "Phishing Attack", "SQL Injection Attack", "DDoS Attack"],
    correctAnswer: "Dictionary Attack",
    category: "Password Storage",
    points:100,
    },
    {
    questionText: "A salted hashed password is where instead of storing the output of H(password), we store H(password+salt) where salt is some large string that is randomly generated and also different for every user.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Password Storage",
    points:100,
    },
    {
    questionText: "What is not an aspect of peppering passwords?",
    options: ["Not kept a secret", "Provides an extra layer of protection", "Separated from password file", "Can be done before storage"],
    correctAnswer: "Not kept a secret",
    category: "Password Storage",
    points:800,
    },
    
]

const MockDataAutherization = [
  {
    questionText: "What can be defined as authorization?",
    options: ["Process of determining who is allowed to do what", "Process of installing new software", "Method of encrypting private information", "Process for optimizing system performance"],
    correctAnswer: "Process of determining who is allowed to do what",
    category: "Authorization",
    points:800,
    },
    {
    questionText: "Authorization is usually decided by the owners of the system, which is also defined as authorization policy.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Authorization",
    points:800,
    },
    {
    questionText: "An example of authorization policy can be seen where only students can see their own grades.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Authorization",
    points:800,
    },
    {
    questionText: "Which other terminology can be used interchangeably with authorization?",
    options: ["Access Control", "Encryption", "Installing", "Data Mining"],
    correctAnswer: "Access Control",
    category: "Authorization",
    points:800,
    },
    {
    questionText: "What are the three basic elements of access control?",
    options: ["Subjects, Objects, Actions", "Username, Password, ID", "Hardware, Software, Operating System", "Network, Database, Application"],
    correctAnswer: "Subjects, Objects, Actions",
    category: "Authorization",
    points:800,
    },
    {
    questionText: "Subjects are users that will interact with the system, and programs will interact with the system on the users' behalf.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Authorization",
    points:800,
    },
    {
    questionText: "Objects can be seen as resources that need to be protected, for example, files and databases.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Authorization",
    points:1000,
    },
    {
    questionText: "Actions are the possible interactions on objects by subjects.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Authorization",
    points:1000,
    },
    {
    questionText: "Example of actions are read or write access for files and databases.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Authorization",
    points:1000,
    },
    {
    questionText: "What is a discretionary access control model based on?",
    options: ["Based on ownership", "Based on user roles", "Based on clearances and sensitivity levels", "Based on efficiency"],
    correctAnswer: "Based on ownership",
    category: "Authorization",
    points:1000,
    },
    {
    questionText: "A role-based access control model is based on user roles.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Authorization",
    points:1000,
    },
    {
    questionText: "What is a mandatory access control model based on?",
    options: ["Based on clearances and sensitivity levels", "Based on ownership", "Based on user roles", "Based on speed"],
    correctAnswer: "Based on clearances and sensitivity levels",
    category: "Authorization",
    points:1000,
    },
    {
    questionText: "Which one is not a property that is in a discretionary access control model?",
    options: ["Relies on efficiency", "Every object has an owner", "Actions are authorized based on ownership", "Owner can give or remove access rights from other subjects"],
    correctAnswer: "Relies on efficiency",
    category: "Authorization",
    points:1000,
    },
    {
    questionText: "What are the contents in an access control list?",
    options: ["List of subjects and their rights to the object", "List of users passwords and usernames", "A catalog of software used in the network", "Timestamps of system access attempts"],
    correctAnswer: "List of subjects and their rights to the object",
    category: "Authorization",
    points:1000,
    },
    {
    questionText: "In a role-based control model, each subject is assigned one or more roles, where permissions are based on different roles.",
    options: ["True", "False"],
    correctAnswer: "True",
    category: "Authorization",
    points:1000,
    },
    {
    questionText: "In a role-based control model, what is not a benefit?",
    options: ["Saves space and relies on speed", "Easier to manage a large number of user categories", "More fine-grain control and easier to align with company policies", "Can simulate a discretionary access control model and role-based control model"],
    correctAnswer: "Saves space and relies on speed",
    category: "Authorization",
    points:1000,
    },
]

const MockDataLinux = [
  {
    questionText: "What software directs a computer's operations, manages storage, controls and schedules the execution of other programs, facilitates resource sharing among users, provides access control mechanisms, and runs continuously until the computer is shut down?",
    options: ["Application Software", "Hardware Controller", "Operating System", "Database Management System"],
    correctAnswer: "Operating System",
    category: "Linux File Permissions",
    points: 100,
    },
    {
    questionText: "Which of the following operating systems is NOT based on UNIX?",
    options: ["Linux", "macOS", "Windows", "FreeBSD"],
    correctAnswer: "Windows",
    category: "Linux File Permissions",
    points: 400,
    },
    {
    questionText: "In Linux, what is the username of the superuser or administrator, whose user ID is typically set to 0, granting unparalleled control over the system, allowing tasks such as reconfiguring the computer, reading/writing/deleting any file, becoming any other user, and resetting passwords?",
    options: ["Admin", "MasterUser", "Root", "SuperUser"],
    correctAnswer: "Root",
    category: "Linux File Permissions",
    points: 200,
    },
    {
    questionText: "What term is used to describe weak applications intentionally designed to attract hackers for studying their behaviors?",
    options: ["Spyware", "Honeypot", "Firewall", "Malware"],
    correctAnswer: "Honeypot",
    category: "Linux Security Mechanisms",
    points: 200,
    },
    {
    questionText: "What security principle aims to ensure that misbehaving users and/or applications cannot harm the rest of the system by physically or logically separating them from each other?",
    options: ["Segmentation", "Isolation", "Confinement", "Separation"],
    correctAnswer: "Confinement",
    category: "Linux Security Mechanisms",
    points: 800,
    },
    {
    questionText: "In computer security, what component mediates requests from applications, implements protection policies, and enforces isolation and confinement?",
    options: ["Firewall", "Reference Monitor", "Intrusion Detection System", "Security Kernel"],
    correctAnswer: "Reference Monitor",
    category: "Linux Security Mechanisms",
    points: 1000,
    },
    
]

const MockDataMalware = [
  {
    questionText: "What principle in security emphasizes that the design of a system should not be kept secret, and security mechanisms should not rely on the ignorance of potential attackers?",
    options: ["Closed Architecture", "Secure Design", "Open Design", "Confidential System"],
    correctAnswer: "Open Design",
    category: "Saltzer and Shroeder Design Principles",
    points: 800,
    },
    {
    questionText: "What principle underscores the importance of designing a human interface for ease of use, ensuring that users consistently and automatically apply protection mechanisms correctly?",
    options: ["User-Friendly Design", "Psychological Acceptability", "Seamless Integration",
    "Accessible Interface"],
    correctAnswer: "Psychological Acceptability",
    category: "Saltzer and Shroeder Design Principles",
    points: 1000,
    },
    {
    questionText: "What term is used to describe a dormant payload within a computer system that activates when a specific condition is met, often without the knowledge of the computer owner?",
    options: ["Malware", "Logic Bomb", "Trojan Horse", "Worm"],
    correctAnswer: "Logic Bomb",
    category: "Malware",
    points: 200,
    },
    {
    questionText: "What type of malicious software is designed to gather information about users' activities and transmit that data to a third party?",
    options: ["Adware", "Ransomware", "Spyware", "Trojan Horse"],
    correctAnswer: "Spyware",
    category: "Malware",
    points: 100,
    },
    {
    questionText: "What type of malicious software restricts access to computer resources and demands a ransom payment for the restoration of access?",
    options: ["Adware", "Ransomware", "Spyware", "Worm"],
    correctAnswer: "Ransomware",
    category: "Malware",
    points: 400,
    },
    {
    questionText: "What approach to virus detection involves maintaining a list of known viruses and storing specific characteristics, such as infection code and payload code, for each virus?",
    options: ["Heuristic Analysis", "Behavioral Detection", "Signature-based Detection", "Anomalybased Detection"],
    correctAnswer: "Signature-based Detection",
    category: "Malware",
    points: 800,
    },
]

const MockDataWebSecurity = [
  {
    questionText: "What is the primary goal of an attacker using typosquatting?",
    options: ["To spread awareness about cybersecurity risks", "To gain access to users device", "To harvest sensitive information like usernames and passwords", "To improve the security of websites"],
    correctAnswer: "To harvest sensitive information like usernames and passwords",
    category: "Attacks despite HTTPS",
    points: 100,
    },
    {
    questionText: "How does typosquatting typically exploit a users mistakes?",
    options: ["By infecting devices with malware", "By intercepting secure connections", "By selling counterfeit products", "By creating look-alike websites with similar domain names"],
    correctAnswer: "By creating look-alike websites with similar domain names",
    category: "Attacks despite HTTPS",
    points: 200,
    },
    {
    questionText: "What is a potential method used by attackers to eavesdrop on unencrypted connections in public places?",
    options: ["Encrypting entire network", "Implementing firewalls", "Sniffing unencrypted connections on existing WiFi or wired hubs", "Increasing bandwidth speed"],
    correctAnswer: "Sniffing unencrypted connections on existing WiFi or wired hubs",
    category: "Attacks despite HTTPS",
    points: 400,
    },
    {
    questionText: "What technology is employed in the implementation of Certificate Transparency, offering earlier detection of compromised CAs?",
    options: ["RSA Encryption", "SHA Hashing", "MD5 Cryptography", "Merkle Hash Trees"],
    correctAnswer: "Merkle Hash Trees",
    category: "Attacks despite HTTPS",
    points: 800,
    },
    {
    questionText: "What information does the server have about the client when clientside certificates are used?",
    options: ["No knowledge about the client's identity", "Knows client's full identity",
    "Only knows the client's IP address", "Can access the client's browsing history"],
    correctAnswer: "Knows the client's full identity",
    category: "Attacks despite HTTPS",
    points: 1000,
    },
    {
    questionText: "How can attackers exploit sandbox bugs or kernel exploits in JavaScript?",
    options: ["By impersonating system administrators", "By gaining privileged access and controlling the system", "By encrypting sensitive data", "By initiating DoS attacks on server networks"],
    correctAnswer: "By gaining privileged access and controlling the system",
    category: "Web security",
    points: 100,
    },
    {
    questionText: "Which type of XSS attack involves malicious input stored in the website database and served to all clients?",
    options: ["Reflected XSS", "DOM-based XSS", "Persistent XSS", "Server-side XSS"],
    correctAnswer: "Persistent XSS",
    category: "Web security",
    points: 200,
    },
    {
    questionText: "Which type of XSS attack involves malicious input that comes as part of a bad link mishandled on server side?",
    options: ["Reflected XSS", "DOM-based XSS", "Persistent XSS", "Server-side XSS"],
    correctAnswer: "Reflected XSS",
    category: "Web security",
    points: 400,
    },
    {
    questionText: "Which type of XSS attack involves malicious input that comes as part of a bad link mishandled on client side?",
    options: ["Reflected XSS", "DOM-based XSS", "Persistent XSS", "Server-side XSS"],
    correctAnswer: "DOM-based XSS",
    category: "Web security",
    points: 800,
    },
    {
    questionText: "What is a critical requirement for a successful Cross-Site Request Forgery (CSRF) attack to occur?",
    options: ["Computer with outdated browser versions", "A compromised website with sophisticated security measures", "Visiting a compromised website while logged in to a target site", "The victim clicking on suspicious email attachments"],
    correctAnswer: "Visiting a compromised website while logged in to a target site",
    category: "Web security",
    points: 1000,
    }

]

const MockDataCryptography = [
  {
    questionText: "What is the primary function of the public key in public-key encryption?",
    options: ["Unlocking", "Both locking and unlocking", "Locking", "Not involved"],
    correctAnswer: "Locking",
    category: "Public Key Cryptography",
    points: 100,
    },
    {
    questionText: "Which encryption method involves a pair of keys, one for locking and one for unlocking?",
    options: ["Symmetric-key encryption", "Public-key encryption", "Asymmetric encryption", "Triple DES encryption"],
    correctAnswer: "Public-key encryption",
    category: "Public Key Cryptography",
    points: 200,
    },
    {
    questionText: "What type of key is kept secret in public-key encryption?",
    options: ["Public key", "Session key", "Private (secret) key", "Symmetric key"],
    correctAnswer: "Private (secret) key",
    category: "Public Key Cryptography",
    points: 400,
    },
    {
    questionText: "Why are public key ciphers often combined with symmetric ciphers in hybrid cryptosystems?",
    options: ["Public key ciphers are faster than symmetric ciphers", "Symmetric ciphers are more secure than public key ciphers", "Public key ciphers are much slower than symmetric ciphers", "Symmetric ciphers are difficult to implement"],
    correctAnswer: "Public key ciphers are much slower than symmetric ciphers",
    category: "Public Key Cryptography",
    points: 800,
    },
    {
    questionText: "What role does the public key encryption play in a hybrid cryptosystem during secure communication?",
    options: ["Encrypting the entire message", "Decrypting the symmetric key", "Generating session keys", "Verifying digital signatures"],
    correctAnswer: "Decrypting the symmetric key",
    category: "Public Key Cryptography",
    points: 1000,
    },
    {
    questionText: "What does a cryptographic hash function primarily produce when given an input message?",
    options: ["Cipher text", "Public key", "Message digest", "Private key"],
    correctAnswer: "Message digest",
    category: "Transport Layer Security",
    points: 100,
    },
    {
    questionText: "Does sending the message along with its digest guarantee that the message has not been modified?",
    options: ["Yes, it gives absolute message integrity", "No, unless the digest cannot be modified", "Yes, given the message is encrypted", "No, verifying message integrity is impossible"],
    correctAnswer: "No, unless the digest cannot be modified",
    category: "Transport Layer Security",
    points: 200,
    },
    {
    questionText: "What is the purpose of attaching a Message Authentication Code (MAC) to each message?",
    options: ["Encrypt message contents", "Ensure confidentiality between sender and receiver", "Confirm integrity and authenticity of the message", "Decode the message"],
    correctAnswer: "Confirm integrity and authenticity of the message",
    category: "Transport Layer Security",
    points: 400,
    },
    {
    questionText: "How does a Message Authentication Code (MAC) differ from a digest?",
    options: ["MAC can be computed and verified using a secret key, whereas a digest cannot", "Both MAC and digest are interchangeable", "Digest is used for encryption, whereas a MAC is used for decryption", "MAC is used for digital signatures, whereas a digest is not"],
    correctAnswer: "MAC can be computed and verified using a secret key, whereas a digest cannot",
    category: "Transport Layer Security",
    points: 800,
    },
    {
    questionText: "Which functionalities does SSL/TLS primarily provide for secure communication?",
    options: ["Symmetric-key encryption, MAC, and hashing", "Public key encryption, symmetric-key encryption, and hashing", "Confidentiality, integrity, and authentication", "Firewall protection, intrusion detection, and VPN routing"],
    correctAnswer: "Confidentiality, integrity, and authentication",
    category: "Transport Layer Security",
    points: 1000,
    }
]

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartPage/>}/>
      <Route path="/Comp-data" element={<Quiz quizData = {MockData}/>}/>
      <Route path="/Security" element={<Quiz quizData = {MockDataSecurity}/>}/>
      <Route path="/Linux" element={<Quiz quizData = {MockDataLinux}/>}/>
      <Route path="/Passwords" element={<Quiz quizData = {MockDataPasswords}/>}/>
      <Route path="/PasswordsStorage" element={<Quiz quizData = {mockDataPasswordStorage}/>}/>
      <Route path="/Authorization" element={<Quiz quizData = {MockDataAutherization}/>}/>
      <Route path="/Authentication" element={<Quiz quizData = {MockDataAuthentication}/>}/>
      <Route path="/Malware" element={<Quiz quizData = {MockDataMalware}/>}/>
      <Route path="/Digital-Signatures" element={<Quiz quizData = {MockquizDataDigitalSignatures}/>}/>
      <Route path="/PKI" element={<Quiz quizData = {MockquizDataPKI}/>}/>
      <Route path="/WebSecurity" element={<Quiz quizData = {MockDataWebSecurity}/>}/>
      <Route path="/Cryptography" element={<Quiz quizData = {MockDataCryptography}/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;