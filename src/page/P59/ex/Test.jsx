import React, { useState } from "react";
import "./Test.css";

const LotteryTable = () => {
  const winningNumbers = [8, 45, 11, 26, 37, 28];
  const participants = [
    { name: "가은", numbers: [28, 30, 11, 26, 37, 5] },
    { name: "서우", numbers: [37, 11, 1, 31, 48, 16] },
    { name: "서연", numbers: [28, 45, 18, 6, 11, 10] },
    { name: "서준", numbers: [28, 37, 11, 29, 45, 8] },
    { name: "지아", numbers: [26, 45, 28, 37, 8, 11] },
  ];

  return (
    <div className="lottery-table">
      <table className="prize-table">
        <thead>
          <tr>
            <th>순위</th>
            <th>당첨금액</th>
            <th>당첨기준</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1등</td>
            <td>1,000,000,000원</td>
            <td>당첨번호 6개 숫자 일치</td>
          </tr>
          <tr>
            <td>2등</td>
            <td>35,000,000원</td>
            <td>당첨번호 5개 숫자 일치</td>
          </tr>
          <tr>
            <td>3등</td>
            <td>1,260,000원</td>
            <td>당첨번호 4개 숫자 일치</td>
          </tr>
          <tr>
            <td>4등</td>
            <td>50,000원</td>
            <td>당첨번호 3개 숫자 일치</td>
          </tr>
          <tr>
            <td>5등</td>
            <td>5,000원</td>
            <td>당첨번호 2개 숫자 일치</td>
          </tr>
        </tbody>
      </table>

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

      <table className="participants-table">
        <thead>
          <tr>
            <th>이름</th>
            <th colSpan={6}>복권번호</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((participant, index) => (
            <tr key={index}>
              <td>{participant.name}</td>
              {participant.numbers.map((num, idx) => (
                <td key={idx}>{num}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LotteryTable;
