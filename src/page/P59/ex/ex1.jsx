import React from "react";
import "./Test.css";
const Ex1 = () => {
  return (
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
  );
};

export default Ex1;
