import React, { useState } from "react";
import "./Question.css";

const Question = () => {
  const [answers, setAnswers] = useState({ 성주: "", 상구: "", 양심: "", 정선: "", friend1: "", friend2: "" });
  const [results, setResults] = useState({ 성주: null, 상구: null, 양심: null, 정선: null, question2: null });
  const [isSubmitted, setIsSubmitted] = useState(false); // 제출 버튼 클릭 여부

  const questions = [
    {
      id: 1,
      text: "1. 네 친구들은 오늘 각각 몇 층으로 이동할 예정인가요?",
      options: ["성주", "상구", "양심", "정선"],
      correctAnswers: { 성주: "1층", 상구: "3층", 양심: "5층", 정선: "4층" },
    },
    {
      id: 2,
      text: "2. 내일 같은 층에서 만나게 될 친구 두 명은 누구인가요?",
      options: ["friend1", "friend2"],
      correctAnswers: ["성주", "양심"],
    },
  ];

  const handleChange = (e, questionId) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // 1번 문제 채점
    const correctAnswers1 = questions[0].correctAnswers;
    const isCorrect1 = Object.keys(correctAnswers1).reduce((acc, key) => {
      const isCorrect = correctAnswers1[key] === answers[key];
      setResults((prev) => ({ ...prev, [key]: isCorrect ? "O" : "X" }));
      return acc && isCorrect;
    }, true);

    // 2번 문제 채점
    const correctAnswers2 = questions[1].correctAnswers;
    const userAnswers2 = [answers.friend1.trim(), answers.friend2.trim()];
    const isCorrect2 =
      userAnswers2.length === correctAnswers2.length &&
      userAnswers2.every((ans) => correctAnswers2.includes(ans)) &&
      new Set(userAnswers2).size === correctAnswers2.length; // 중복 검사

    setResults((prev) => ({ ...prev, question2: isCorrect2 ? "O" : "X" }));

    // 제출 상태 활성화
    setIsSubmitted(true);
  };

  return (
    <div>
      {/* 1번 문제 */}
      <h2 className="Question-text">{questions[0].text}</h2>
      <div className="grid-container compact">
        {questions[0].options.map((option, index) => (
          <div
            key={option}
            className={`input-group ${index < questions[0].options.length - 1 ? "with-border" : ""}`}
          >
            <span className="label">{option}</span>
            <input
              type="text"
              placeholder="0층"
              name={option}
              value={answers[option] || ""}
              onChange={(e) => handleChange(e, 1)}
              disabled={isSubmitted} // 제출 후 비활성화
            />
            {isSubmitted && <span className={`result ${results[option]}`}>{results[option]}</span>}
          </div>
        ))}
      </div>

      {/* 2번 문제 */}
      <h2 className="Question-text">{questions[1].text}</h2>
      <div className="inline-inputs">
        <b>친구1</b>
        <input
          type="text"
          placeholder="이름"
          name="friend1"
          value={answers.friend1}
          onChange={(e) => handleChange(e, 2)}
          disabled={isSubmitted} // 제출 후 비활성화
        />
        <b>친구2</b>
        <input
          type="text"
          placeholder="이름"
          name="friend2"
          value={answers.friend2}
          onChange={(e) => handleChange(e, 2)}
          disabled={isSubmitted} // 제출 후 비활성화
        />
      </div>
      {isSubmitted && (
        <div className={`result ${results.question2}`}>
          2번 문제: {results.question2 === "O" ? "정답입니다!" : "틀렸습니다!"}
        </div>
      )}

      {/* 제출 버튼 */}
      <button className="next-button" onClick={handleSubmit} disabled={isSubmitted}>
        제출
      </button>
    </div>
  );
};

export default Question;
