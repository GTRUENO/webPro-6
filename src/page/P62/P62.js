import React from "react";
import "./62P.css";
import titleImage from "./img/title.jpg"; 
import P62Question from "./components/P62Question.jsx";

const App = () => {
  return (    
      <div className="p62-container">
        
        <img
          src={titleImage}
          alt="Title"
          className="title-image"
          style={{ marginBottom: "5px" }} // 이미지와 아래 간격 조정
        />
        <p style={{ marginBottom: "15px", lineHeight: "1.6" }}>
          앞서 기억해둔 <b style={{color: "#b22222"}}>복지관의 층별 시설</b>과 시설을 대표하는 그림을 알맞게 연결해보세요.
          <br/>
          <p style={{color: "#0000cd"}}>* 선을 다시 연결하고 싶다면 원하는 점을 두개 다시 클릭하면 새롭게 선이 이어지고 기존 것은 취소됩니다!</p>
        </p>
        <P62Question />
      </div>
   
  );
};

export default App;
