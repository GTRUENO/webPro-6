import React from "react";
import "./asd.css"
const P60CartoonImage = ({ imageSrc, altText }) => {
  return (
    <div className="cartoon-grid">
      <div className="image-panel">
        <img src={imageSrc} alt={altText} />
      </div>
    </div>
  );
};

export default P60CartoonImage;
