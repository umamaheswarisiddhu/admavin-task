import React, { useState, useEffect } from "react";
import "./Game.css";

const keywords = ["apple", "banana", "cherry", "grape", "kiwi", "lemon",   ];

const Game = () => {
  const [score, setScore] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [activeBox, setActiveBox] = useState(null);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newKeyword = keywords[Math.floor(Math.random() * keywords.length)];
      setKeyword(newKeyword);
      setActiveBox(Math.floor(Math.random() * 6));
      setTimeout(() => {
        setKeyword("");
        setActiveBox(null);
      }, 1000);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const handleBoxClick = (index) => {
    if (index === activeBox) {
      setScore((prev) => prev + 5);
    } else {
      setScore((prev) => prev - 2.5);
    }
  };

  return (
    <div className="game-container">
        <div className="title"><h1>Game</h1></div>
      <div className="score">Score: {score}</div>
      <div className="timer">Time left: {timer}s</div>
      <div className="box-container">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={`box ${index === activeBox ? "active" : ""}`}
            onClick={() => handleBoxClick(index)}
          >
            {index === activeBox && keyword}
          </div>
        ))}
      </div>
      {timer === 0 && <div className="final-score">Final score: {score}</div>}
    </div>
  );
};

export default Game;
