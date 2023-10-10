import React, { useState, useEffect } from 'react';

function Quiz({ quizData }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [message, setMessage] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

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

  const handleAnswerClick = (option, correctAnswer) => {
    if (option === correctAnswer) {
      setMessage('Correct!');
    } else {
      setMessage('Incorrect. Try again.');
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
    <div>
      {currentQuestion && (
        <div>
          <h2>{currentQuestion.questionText}</h2>
          <ul>
            {currentQuestion.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <button
                  onClick={() =>
                    handleAnswerClick(option, currentQuestion.correctAnswer)
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
        </div>
      )}
    </div>
  );
}

export default Quiz;