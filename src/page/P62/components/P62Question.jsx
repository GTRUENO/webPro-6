import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import "../62P.css";

import Question1 from "../img/Question1.jpg";
import Question2 from "../img/Question2.jpg";
import Question3 from "../img/Question3.jpg";
import Question4 from "../img/Question4.jpg";
import Question5 from "../img/Question5.jpg";


const questions = [
  { id: 1, image: Question1, style: { maxWidth: "300px", maxHeight: "200px" } },
  { id: 2, image: Question2, style: { maxWidth: "300px", maxHeight: "200px" } },
  { id: 3, image: Question3, style: { maxWidth: "300px", maxHeight: "200px" } },
  { id: 4, image: Question4, style: { maxWidth: "300px", maxHeight: "200px" } },
  { id: 5, image: Question5, style: { maxWidth: "300px", maxHeight: "200px" } },
];

const answers = [5, 4, 2, 1, 3]; 

const Question = () => {
  const [connections, setConnections] = useState([]); 
  const [selectedLeft, setSelectedLeft] = useState(null); 
  const [selectedRight, setSelectedRight] = useState(null); 
  const [submitted, setSubmitted] = useState(false);
  const svgRef = useRef(null);
  const navigate = useNavigate(); 

  const handleLeftSelect = (id) => {
    if (selectedRight !== null) {
      createConnection(id, selectedRight);
      setSelectedLeft(null);
      setSelectedRight(null);
    } else {
      setSelectedLeft(id);
    }
  };

  const handleRightSelect = (id) => {
    if (selectedLeft !== null) {
      createConnection(selectedLeft, id);
      setSelectedLeft(null);
      setSelectedRight(null);
    } else {
      setSelectedRight(id);
    }
  };

  const createConnection = (leftId, rightId) => {
    setConnections((prev) => {
      const updatedConnections = prev.filter(
        (conn) => conn.left !== leftId && conn.right !== rightId
      );
      return [...updatedConnections, { left: leftId, right: rightId }];
    });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleNext = () => {
    navigate("/63"); 
  };

  const calculateScore = () => {
    return connections.reduce((score, conn) => {
      const index = conn.left - 1;
      return conn.right === answers[index] ? score + 1 : score;
    }, 0);
  };

  const drawConnections = () => {
    const svg = svgRef.current;
    if (!svg) return;

    svg.innerHTML = "";

    connections.forEach((conn) => {
      const leftElement = document.getElementById(`left-${conn.left}`);
      const rightElement = document.getElementById(`right-${conn.right}`);

      if (leftElement && rightElement) {
        const leftRect = leftElement.getBoundingClientRect();
        const rightRect = rightElement.getBoundingClientRect();

        const svgRect = svg.getBoundingClientRect();

        const x1 = leftRect.right - svgRect.left;
        const y1 = leftRect.top + leftRect.height / 2 - svgRect.top;
        const x2 = rightRect.left - svgRect.left;
        const y2 = rightRect.top + rightRect.height / 2 - svgRect.top;

        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);
        line.setAttribute(
          "stroke",
          submitted
            ? answers[conn.left - 1] === conn.right
              ? "blue"
              : "red"
            : "black"
        );
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
        <div className="column left-column">
          {questions.map((q) => (
            <div className="question-item" key={q.id} id={`left-${q.id}`}>
              <img src={q.image} alt={`Question ${q.id}`} style={q.style} />
              <input
                type="checkbox"
                className="dot-checkbox"
                onClick={() => handleLeftSelect(q.id)}
                checked={
                  selectedLeft === q.id ||
                  connections.some((conn) => conn.left === q.id)
                }
                readOnly
              />
            </div>
          ))}
        </div>

        <svg className="svg-connector" ref={svgRef}></svg>

        <div className="column right-column">
          {answers.map((_, index) => (
            <div className="question-item" key={index + 1} id={`right-${index + 1}`}>
              <input
                type="checkbox"
                className="dot-right-checkbox"
                onClick={() => handleRightSelect(index + 1)}
                checked={
                  selectedRight === index + 1 ||
                  connections.some((conn) => conn.right === index + 1)
                }
                readOnly
              />
              <span>{5 - index}층</span>
            </div>
          ))}
        </div>
      </div>



      {submitted && (
        <div className="score">
          {`5개 중 ${calculateScore()}개 맞췄습니다!`}
        </div>
      )}
     {submitted ? (
        <button className="submit-button" onClick={handleNext}>
          다음
        </button>
      ) : (
        <button className="submit-button" onClick={handleSubmit}>
          제출
        </button>
      )}
    </div>
  );
};

export default Question;
