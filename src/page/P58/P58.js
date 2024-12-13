import React from 'react'
import './P58.css';
import pic1 from "./57P58.JPG";
import pic2 from "./check.png";
import P58Image from './components/P58Image';
import P58Question from './components/P58Question';
import P58Check from './components/P58Check';
import P58Button from './components/P58Button';
import P58AllStair from './components/P58AllStair';

const P58 = () => {
  return (
    <div className='p58-container'>
      <P58Image imageSrc={pic1} altText="Instruction" />
      <P58Question />
      <P58AllStair />
      <P58Check imageSrc={pic2} altText="Instruction" />
      <P58Button />
    </div>
  )
}

export default P58