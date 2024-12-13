import React from "react";
import "./61P.css";
import titleImage from "./img/title.jpg";
import P61Question from "./components/P61Question.jsx";

const P61 = () => {
  return (
    <div className="p61-container">
      <img
        src={titleImage}
        alt="Title"
        className="title-image"
        style={{ marginBottom: "5px" }}
      />
      <p style={{ marginBottom: "15px", lineHeight: "1.6" }}>
        네 친구들이 복지관 앞 정자에서 대화를 나누고 있습니다.
        <br />
        앞서 기억해둔 <b style={{ color: "#b22222" }}>층별 시설</b>을 생각하며 아래의 대화를 소리 내어 읽고, 문제를 풀어보세요 (1~2)
      </p>
      <P61Question />
      <u style={{ marginBottom: "15px", lineHeight: "1.6" }}>
        <b style={{ color: "#b22222" }}>복지관의 층별 시설</b>을 기억해 주세요.
      </u>
    </div>
  );
};

export default P61;
