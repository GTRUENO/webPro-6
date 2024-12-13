import React from "react";
import "../61P.css";


const P61AnswerCheck = ({ answers }) => {
  const correctAnswers1 = { 성주: "1층", 상구: "3층", 양심: "5층", 정선: "4층" };
  const correctAnswers2 = ["성주", "양심"];

  const results1 = Object.keys(correctAnswers1).reduce((acc, key) => {
    acc[key] = correctAnswers1[key] === answers[key] ? "O" : "X";
    return acc;
  }, {});

  const userAnswers2 = [answers.friend1.trim(), answers.friend2.trim()];
  const isCorrect2 =
    userAnswers2.length === correctAnswers2.length &&
    userAnswers2.every((ans) => correctAnswers2.includes(ans)) &&
    new Set(userAnswers2).size === correctAnswers2.length;

  return (
    <div>
      <h2>결과</h2>
      <div className="grid-container compact">
        {Object.keys(results1).map((key) => (
          <div className="input-group with-border" key={key}>
            <span>{key}: {results1[key]}</span>
          </div>
        ))}
      </div>
      <div>2번 문제: {isCorrect2 ? "O" : "X"}</div>
    </div>
  );
};

export default P61AnswerCheck;
