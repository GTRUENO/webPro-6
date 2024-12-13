import React from 'react';

export function SectionA(props) {
  return (
    <div className="section-a">
      <h1>{props.title}</h1>
    </div>
  );
}

export function Title(props) {
  return (
    <div className="Title">
      <h1>{props.T}</h1>
    </div>
  );
}

export function SectionB(props) {
  return (
    <div className="section-b">
      <p>{props.description}</p>
    </div>
  );
}

export function SectionD(props) {
  return (
    <div className="section-d">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        name={props.id}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export function SectionE(props) {
  return (
    <div className="section-e">
      <button type="button" onClick={props.onClick}>
        {props.buttonText}
      </button>
    </div>
  );
}
