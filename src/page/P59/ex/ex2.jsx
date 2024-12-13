import React from "react";
import "./Test.css";
const Ex2 = () => {
  const winningNumbers = [8, 45, 11, 26, 37, 28];

  return (
    <div className="winning-numbers">
      <h3>당첨번호</h3>
      <div className="numbers">
        {winningNumbers.map((num, index) => (
          <span key={index} className="number">
            {num}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ex2;
