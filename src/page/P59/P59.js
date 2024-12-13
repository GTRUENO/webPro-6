import React from "react";
import "./59P.css";
import titleImage from "./img/image.png"; 
import Quest from "./ex/quest";
import Ex1 from "./ex/ex1";
import Ex2 from "./ex/ex2";
import Ex3 from "./ex/ex3";
const App = () => {
  return (
    
      <div className="p59-container">
        <img
          src={titleImage}
          alt="Title"
          className="title-image"
          style={{ marginBottom: "5px" }} 
        />
        <p style={{ marginBottom: "15px", lineHeight: "1.6" }}>
          기쁨마을에서 5명의 복권 당첨자가 나왔습니다. 당첨번호와 순위, 당첨자를 확인하고 문제를 풀어보세요(1~3)
        </p>
        <Ex1 />
        <Ex2 />
        <Ex3 />
        <Quest/>
      </div>
   
  );
};

export default App;
