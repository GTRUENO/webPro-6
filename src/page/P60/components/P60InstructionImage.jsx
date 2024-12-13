import React, { Component } from "react";

class P60InstructionImage extends Component {
  render() {
    const { imageSrc, altText } = this.props; 
    return (
      <div className="instruction">
        <img src={imageSrc} alt={altText} />
      </div>
    );
  }
}

export default P60InstructionImage;
