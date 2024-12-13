import React from 'react'
import '../P57.css'

const P57Stair = (props) => {
  return (
    <div className="box-container">
      <div className="box-1 box y">{props.a}</div>
      <div className="box-2 box z">{props.b}</div>
      <div className="box-3 box">{props.c}</div>
    </div>
  )
}

export default P57Stair