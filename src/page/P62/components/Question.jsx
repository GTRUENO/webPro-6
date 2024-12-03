import React, { useState, useRef, useEffect } from "react";
import "./Question.css";

import Question1 from "../img/Question1.jpg";
import Question2 from "../img/Question2.jpg";
import Question3 from "../img/Question3.jpg";
import Question4 from "../img/Question4.jpg";
import Question5 from "../img/Question5.jpg";

// 이미지 배열 구성
const questions = [
  { id: 1, image: Question1, style: { maxWidth: "300px", maxHeight: "200px" } },
  { id: 2, image: Question2, style: { maxWidth: "300px", maxHeight: "200px" } },
  { id: 3, image: Question3, style: { maxWidth: "300px", maxHeight: "200px" } },
  { id: 4, image: Question4, style: { maxWidth: "300px", maxHeight: "200px" } },
  { id: 5, image: Question5, style: { maxWidth: "300px", maxHeight: "200px" } },
];

const answers = [5, 4, 2, 1, 3]; // 정답 배열

const Question = () => {
  const [connections, setConnections] = useState([]); // 연결 상태
  const [selectedLeft, setSelectedLeft] = useState(null); // 왼쪽에서 선택된 항목
  const [selectedRight, setSelectedRight] = useState(null); // 오른쪽에서 선택된 항목
  const [submitted, setSubmitted] = useState(false);
  const svgRef = useRef(null);

  const handleLeftSelect = (id) => {
    if (selectedRight !== null) {
      // 오른쪽이 선택된 상태에서 연결
      createConnection(id, selectedRight);
      setSelectedLeft(null); // 선택 초기화
      setSelectedRight(null);
    } else {
      setSelectedLeft(id); // 현재 선택
    }
  };

  const handleRightSelect = (id) => {
    if (selectedLeft !== null) {
      // 왼쪽이 선택된 상태에서 연결
      createConnection(selectedLeft, id);
      setSelectedLeft(null); // 선택 초기화
      setSelectedRight(null);
    } else {
      setSelectedRight(id); // 현재 선택
    }
  };

  const createConnection = (leftId, rightId) => {
    setConnections((prev) => {
      // 기존 연결 제거
      const updatedConnections = prev.filter(
        (conn) => conn.left !== leftId && conn.right !== rightId
      );
      // 새 연결 추가
      return [...updatedConnections, { left: leftId, right: rightId }];
    });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const calculateScore = () => {
    return connections.reduce((score, conn) => {
      const index = conn.left - 1; // 왼쪽 번호를 인덱스로 사용
      return conn.right === answers[index] ? score + 1 : score;
    }, 0);
  };

  const drawConnections = () => {
    const svg = svgRef.current;
    if (!svg) return;

    // SVG 초기화
    svg.innerHTML = "";

    connections.forEach((conn) => {
      const leftElement = document.getElementById(`left-${conn.left}`);
      const rightElement = document.getElementById(`right-${conn.right}`);

      if (leftElement && rightElement) {
        const leftRect = leftElement.getBoundingClientRect();
        const rightRect = rightElement.getBoundingClientRect();

        const svgRect = svg.getBoundingClientRect();

        const x1 = leftRect.right - svgRect.left; // 왼쪽 아이템의 오른쪽 끝
        const y1 = leftRect.top + leftRect.height / 2 - svgRect.top; // 왼쪽 아이템의 중앙
        const x2 = rightRect.left - svgRect.left; // 오른쪽 아이템의 왼쪽 끝
        const y2 = rightRect.top + rightRect.height / 2 - svgRect.top; // 오른쪽 아이템의 중앙

        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);
        line.setAttribute("stroke", submitted ? (answers[conn.left - 1] === conn.right ? "blue" : "red") : "black");
        line.setAttribute("stroke-width", "2");

        svg.appendChild(line);
      }
    });
  };

  useEffect(() => {
    drawConnections();
  }, [connections, submitted]);

  return (
    <div className="question-container">
      <div className="question-grid">
        {/* 왼쪽 컬럼 */}
        <div className="column left-column">
          {questions.map((q) => (
            <div className="question-item" key={q.id} id={`left-${q.id}`}>
              <img src={q.image} alt={`Question ${q.id}`} style={q.style} />
              <input
                type="checkbox"
                className="dot-checkbox"
                onClick={() => handleLeftSelect(q.id)}
                checked={selectedLeft === q.id || connections.some((conn) => conn.left === q.id)} // 선택 및 연결 상태 유지
                readOnly
              />
            </div>
          ))}
        </div>

        {/* SVG 연결 영역 */}
        <svg className="svg-connector" ref={svgRef}></svg>

        {/* 오른쪽 컬럼 */}
        <div className="column right-column">
          {answers.map((_, index) => (
            <div className="question-item" key={index + 1} id={`right-${index + 1}`}>
              <input
                type="checkbox"
                className="dot-right-checkbox"
                onClick={() => handleRightSelect(index + 1)}
                checked={selectedRight === index + 1 || connections.some((conn) => conn.right === index + 1)} // 선택 및 연결 상태 유지
                readOnly
              />
              <span>{5-index}층</span>
            </div>
          ))}
        </div>
      </div>

      

      {submitted && (
        <div className="score">
          {`5개 중 ${calculateScore()}개 맞췄습니다!`}
        </div>
      )}
      <button className="submit-button" onClick={handleSubmit}>
        제출
      </button>
    </div>
    
  );
};

export default Question;
