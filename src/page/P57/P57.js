import React from 'react'
import './P57.css';
import P57InstructionImage from './components/P57InstructionImage';
import DayWeather from './components/DayWeather';
import pic1 from "./57P58.JPG";
import pic2 from "./화분.JPG";
import P57Image from './components/P57Image';
import P57Question from './components/P57Question';
import P57AllStair from './components/P57AllStair';

const P57 = () => {
  return (
    <div className='p57-container'>
      <P57InstructionImage imageSrc={pic2} altText="Instruction" />
      <DayWeather />
      <P57Image imageSrc={pic1} altText="Instruction" />
      <P57Question />
      <P57AllStair />
    </div>
  )
}

export default P57