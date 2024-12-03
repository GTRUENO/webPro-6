import React, { Component } from "react";

class P57Image extends Component {
  render() {
    const { imageSrc, altText } = this.props; 
    return (
      <div className="instruction">
        <img style={{ width: '9.8vw' }} src={imageSrc} alt={altText} />
      </div>
    );
  }
}

export default P57Image;

