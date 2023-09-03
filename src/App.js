import React, { useState } from "react";
import "./App.css";

function App() {

  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Which of the following is used in React.js to increase performance?",
      options: [
        { id: 0, text: "Virtual DOM", isCorrect: true },
        { id: 1, text: "Original DOM", isCorrect: false },
        { id: 2, text: "Both Virtual and Original DOM", isCorrect: false },
        { id: 3, text: "None of these", isCorrect: false },
      ],
    },
    {
      text: "What is ReactJS?",
      options: [
        { id: 0, text: "Server Side framework", isCorrect: false },
        { id: 1, text: "User interface framework", isCorrect: true },
        { id: 2, text: "Both of the above", isCorrect: false },
        { id: 3, text: "None of these", isCorrect: false },
      ],
    },
    {
      text: "Identify the one which is used to pass data to components from outside?",
      options: [
        { id: 0, text: "Render with arguments", isCorrect: false },
        { id: 1, text: "setState", isCorrect: false },
        { id: 2, text: "PropTypes", isCorrect: false },
        { id: 3, text: "props", isCorrect: true },
      ],
    },
    {
      text: "Who created React.js?",
      options: [
        { id: 0, text: "Jordan Mike", isCorrect: false },
        { id: 1, text: "Jordan Walke", isCorrect: true },
        { id: 2, text: "Tim Lee", isCorrect: false },
        { id: 3, text: "Jordan Lee", isCorrect: false },
      ],
    },
    {
      text: "In which language is React.js written?",
      options: [
        { id: 0, text: "Python", isCorrect: false },
        { id: 1, text: "JavaScript", isCorrect: true },
        { id: 2, text: "Java", isCorrect: false },
        { id: 3, text: "PHP", isCorrect: false },
      ],
    },
  ];
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      <h1>ReactJs Quiz</h1>
      <h2>Score: {score}</h2>
      {showResults ? (
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        <div className="question-card">
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;