import React, { useState } from 'react';
import '../P58.css';

const P58Stair = (props) => {
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');

  const checkAnswer = () => {
    const correctAnswers = {
      "5층": "음악실",
      "4층": "미술실",
      "3층": "체육실",
      "2층": "요리실",
      "1층": "진료실&물리치료실",
    };

    if (userInput === correctAnswers[props.a]) {
      setFeedback("O");
    } else {
      setFeedback("X");
    }
  };

  return (
    <div className="box-container">
      <div className="box-1 box y">{props.a}</div>
      <div className="box-2 box z input">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          style={{
            // width: '100px',
            textAlign: 'center',
            margin: '0 5px',
          }}
        />
      </div>
      <div className="box-3 box">
        {props.c}
        {/* <button onClick={checkAnswer} style={{ marginLeft: '10px' }}>확인</button>
        {feedback && <span>{feedback}</span>} */}
      </div>
    </div>
  );
};

export default P58Stair;
