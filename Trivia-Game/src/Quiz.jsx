import React, { useState, useEffect } from 'react';
import './Quiz.css';

function Quiz({ quizData }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [message, setMessage] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0); // Counter for correct guesses
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [pointCount, setPointCount] = useState(0);

  // Shuffle the quizData to randomize question order (only on initial load)
  useEffect(() => {
    shuffleQuizData();
  }, []);

  // Shuffle the quizData array
  const shuffleQuizData = () => {
    const shuffledData = [...quizData];
    for (let i = shuffledData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
    }
    return shuffledData;
  };

  const handleAnswerClick = (option, correctAnswer, points) => {
    if (option === correctAnswer) {
      setMessage('Correct!');
      setCorrectCount(correctCount + 1); // Increment correct count
      //setPointCount(pointCount + 100); // Increment point count by fixed temp amount
      setPointCount(pointCount + points); // Increment point count by question points
    } else {
      setMessage('Sorry, the correct answer was ' + correctAnswer);
      setIncorrectCount(incorrectCount + 1); // Increment incorrect count
    }
    setSelectedAnswer(option);
  };

  const handleNextQuestion = () => {
    // Clear selected answer and message
    setSelectedAnswer(null);
    setMessage('');

    // Get the next question at random
    const nextQuestionIndex = (currentQuestionIndex + 1) % quizData.length;
    setCurrentQuestionIndex(nextQuestionIndex);

    // Shuffle the quizData array if all questions have been shown once
    if (nextQuestionIndex === 0) {
      shuffleQuizData();
    }
  };

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <div className="quiz-container">
      {currentQuestion && (
        <div className="quiz-content">
          <h2>{currentQuestion.questionText}</h2>
          <ul>
            {currentQuestion.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <button
                  onClick={() =>
                    handleAnswerClick(option, currentQuestion.correctAnswer, currentQuestion.points)
                  }
                  className={selectedAnswer === option ? 'selected' : ''}
                  disabled={selectedAnswer !== null}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
          {message && <p>{message}</p>}
          <button onClick={handleNextQuestion}>Next Question</button>
          <div className="counter">
            <p className="correct">Correct Guesses: {correctCount}</p>
            <p className="incorrect">Incorrect Guesses: {incorrectCount}</p>
            <p className="points">Your Score: {pointCount}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;