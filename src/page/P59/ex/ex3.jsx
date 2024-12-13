import React from "react";
import "./Test.css";
const Ex3 = () => {
  const participants = [
    { name: "가은", numbers: [28, 30, 11, 26, 37, 5] },
    { name: "서우", numbers: [37, 11, 1, 31, 48, 16] },
    { name: "서연", numbers: [28, 45, 18, 6, 11, 10] },
    { name: "서준", numbers: [28, 37, 11, 29, 45, 8] },
    { name: "지아", numbers: [26, 45, 28, 37, 8, 11] },
  ];

  return (
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
  );
};

export default Ex3;
