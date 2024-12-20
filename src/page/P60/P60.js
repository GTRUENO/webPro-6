import React, { useState } from "react";
import "./60p.css";
import pic1 from "./cartoon1.jpg";
import pic2 from "./cartoon2.jpg";
import P60InstructionImage from "./components/P60InstructionImage";
import P60CartoonImage from "./components/P60CartoonImage";
import P60InputFields from "./components/P60InputFields";
import { useNavigate } from 'react-router-dom'

const P60 = () => {
  const [inputs, setInputs] = useState(["", "", ""]);
  const navigate = useNavigate() 
  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleNextClick = () => {
    console.log("Next button clicked!");
    navigate('/61');
  };
  return (
    <div className="p60-container">
      <P60InstructionImage imageSrc={pic2} altText="Instruction" />
      <div className="cartoon-container">
        <p>
          다음 만화 속 여자가 복권에 당첨되었다고 가정했을 때, 말풍선(1)
          <br />
          에 들어갈 말을 자유롭게 3가지 적어보세요(1~3).
        </p>
        <P60CartoonImage imageSrc={pic1} altText="Cartoon" />
        <P60InputFields
          inputs={inputs}
          handleInputChange={handleInputChange}
        />
      </div>
      <button className="next-button" onClick={handleNextClick}>
        다음
      </button>
    </div>
    
  );
};  

export default P60;