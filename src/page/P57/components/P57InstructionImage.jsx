import React, { Component } from "react";

class P57InstructionImage extends Component {
    render() {
        const { imageSrc, altText } = this.props;
        return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img style={{ width: '2vw' }} src={imageSrc} alt={altText} />
                <p>오늘의 날짜와 날씨입니다.</p>
            </div>
        );
    }
}

export default P57InstructionImage;