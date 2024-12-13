import React, { Component } from "react";

class P57Check extends Component {
  render() {
    const { imageSrc, altText } = this.props; 
    return (
      <div className="instruction">
        <img style={{ width: '15vw' }} src={imageSrc} alt={altText} />
      </div>
    );
  }
}

export default P57Check;