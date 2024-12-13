import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../61P.css";

const P61InputFields = () => {
  const [answers, setAnswers] = useState({ 성주: "", 상구: "", 양심: "", 정선: "", friend1: "", friend2: "" });
  const [results, setResults] = useState({}); // 채점 결과 저장
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const correctAnswers1 = { 성주: "1층", 상구: "3층", 양심: "5층", 정선: "4층" };
  const correctAnswers2 = ["성주", "양심"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // 1번 문제 채점
    const results1 = Object.keys(correctAnswers1).reduce((acc, key) => {
      acc[key] = correctAnswers1[key] === answers[key] ? "O" : "X";
      return acc;
    }, {});

    // 2번 문제 채점
    const userAnswers2 = [answers.friend1.trim(), answers.friend2.trim()];
    const isCorrect2 =
      userAnswers2.length === correctAnswers2.length &&
      userAnswers2.every((ans) => correctAnswers2.includes(ans)) &&
      new Set(userAnswers2).size === correctAnswers2.length;

    setResults({ ...results1, question2: isCorrect2 ? "O" : "X" });
    setIsSubmitted(true);
  };

  const handleNext = () => {
    navigate("/62");
  };

  return (
    <div>
      <h2>1. 네 친구들은 오늘 각각 몇 층으로 이동할 예정인가요?</h2>
      <div className="grid-container compact">
        {["성주", "상구", "양심", "정선"].map((name) => (
          <div className="input-group with-border" key={name}>
            <label className="label">{name}</label>
            <input
              type="text"
              placeholder="0층"
              name={name}
              value={answers[name]}
              onChange={handleChange}
              disabled={isSubmitted} // 제출 후 비활성화
            />
            {isSubmitted && <span className={`result ${results[name]}`}>{results[name]}</span>}
          </div>
        ))}
      </div>

      <h2>2. 내일 같은 층에서 만나게 될 친구 두 명은 누구인가요?</h2>
      <div className="inline-inputs">
        <b>친구1</b>
        <input
          type="text"
          placeholder="이름"
          name="friend1"
          value={answers.friend1}
          onChange={handleChange}
          disabled={isSubmitted} // 제출 후 비활성화
        />
        {isSubmitted && <span className={`result ${results.question2 === "O" ? "O" : "X"}`}></span>}
        <b>친구2</b>
        <input
          type="text"
          placeholder="이름"
          name="friend2"
          value={answers.friend2}
          onChange={handleChange}
          disabled={isSubmitted} // 제출 후 비활성화
        />
      </div>
      {isSubmitted && (
        <div className={`result ${results.question2}`}>
          2번 문제: {results.question2 === "O" ? "정답입니다!" : "틀렸습니다!"}
        </div>
      )}

      {!isSubmitted ? (
        <button className="next-button" onClick={handleSubmit}>
          제출
        </button>
      ) : (
        <button className="next-button" onClick={handleNext}>
          다음
        </button>
      )}
    </div>
  );
};

export default P61InputFields;
