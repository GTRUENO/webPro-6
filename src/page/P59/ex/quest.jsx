import React, { useState } from 'react';
import './quest.css';
import { useNavigate } from 'react-router-dom';

const Question = () => {
  const [answers, setAnswers] = useState({
    question1: ['', '', '', '', ''],
    question2: ['', '', '', '', ''],
    question3: ['', ''],
  });
  const navigate = useNavigate();
  const nextButton = () => {
    navigate("/60");
  };

  const [results, setResults] = useState(null);
  const correctAnswers = {
    question1: ['28', '37', '11', '8', '45'],
    question2: ['지아', '서준', '가은', '시우', '서연'],
    question3: ['서준', '가은'],
  };

  const handleInputChange = (e, question, index) => {
    const newAnswers = { ...answers };
    newAnswers[question][index] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const isCorrect = {
      question1:
        JSON.stringify([...answers.question1].sort()) ===
        JSON.stringify([...correctAnswers.question1].sort()),
      question2:
        JSON.stringify(answers.question2) ===
        JSON.stringify(correctAnswers.question2),
      question3:
        JSON.stringify([...answers.question3].sort()) ===
        JSON.stringify([...correctAnswers.question3].sort()),
    };
    setResults(isCorrect);
  };

  return (
    <div className="question-container">

      <div className="question">
        <p>
          1. 서준 씨의 복권번호와 당첨번호를 비교했을 때, 5개의 숫자가 일치하여
          2등에 당첨되었습니다. 일치하는 숫자를 적어보세요.
        </p>
        <div className="input-group">
          {answers.question1.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength={2}
              placeholder="숫자"
              value={value}
              onChange={(e) => handleInputChange(e, 'question1', index)}
            />
          ))}
        </div>
        {results && (
          <p className={results.question1 ? 'correct' : 'incorrect'}>
            {results.question1 ? 'O' : 'X'}
          </p>
        )}
      </div>


      <div className="question">
        <p>2. 1등부터 5등까지 당첨된 사람의 이름을 순서대로 나열하세요.</p>
        <div className="input-group">
          {answers.question2.map((value, index) => (
            <React.Fragment key={index}>
              <input
                type="text"
                placeholder="이름"
                value={value}
                onChange={(e) => handleInputChange(e, 'question2', index)}
              />
              {index < answers.question2.length - 1 && <span>→</span>}
            </React.Fragment>
          ))}
        </div>
        {results && (
          <p className={results.question2 ? 'correct' : 'incorrect'}>
            {results.question2 ? 'O' : 'X'}
          </p>
        )}
      </div>


      <div className="question">
        <p>
          3. 당첨자 2명의 금액을 합했더니 1,310,000원이 되었습니다. 당첨자 2명은
          누구인가요?
        </p>
        <div className="input-group">
          {answers.question3.map((value, index) => (
            <input
              key={index}
              type="text"
              placeholder="이름"
              value={value}
              onChange={(e) => handleInputChange(e, 'question3', index)}
            />
          ))}
        </div>
        {results && (
          <p className={results.question3 ? 'correct' : 'incorrect'}>
            {results.question3 ? 'O' : 'X'}
          </p>
        )}
      </div>


      <button className="submit-button" onClick={handleSubmit}>
        제출
      </button>
      <button className="next-button" onClick={nextButton} >
        다음
      </button>
    </div>
  );
};

export default Question;
