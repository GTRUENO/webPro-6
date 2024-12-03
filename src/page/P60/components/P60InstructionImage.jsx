import React, { Component } from "react";

class P63InstructionImage extends Component {
  render() {
    const { imageSrc, altText } = this.props; 
    return (
      <div className="instruction">
        <img src={imageSrc} alt={altText} />
      </div>
    );
  }
}

export default P63InstructionImage;
