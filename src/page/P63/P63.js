import React from "react";
import "./63p.css";
import pic1 from "./P63.jpg"
import pic2 from "./ok.jpg"
import P63Top from "./components/P63Top";
import P63Center from "./components/P63Center";
import P63Footer from "./components/P63Footer";


const P63 = () => {
    const handleNextClick = () => {
        console.log("Next button clicked!");
       
    };
    return (
        <div className="p63-container">
            <P63Top imageSrc={pic1} altText="Instruction" />
            <P63Center imageSrc={pic2} altText="sad" />
            <button className="next-button" onClick={handleNextClick}>
                다음
            </button>
        </div>
    );
};

export default P63;
