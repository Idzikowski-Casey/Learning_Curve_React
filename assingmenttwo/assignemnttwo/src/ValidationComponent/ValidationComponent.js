import React from "react";
import "./VS.css";

const validationComponent = (props) => {
  if (props.stringlength >= 5) {
    return (
      <div>
        <p>Your Statment is long enough</p>
        <p>Your Statment is {props.stringlength} characters long.</p>
      </div>
    );
  } else if (props.stringlength < 5) {
    return (
      <div>
        <p>Your Statment is too Short</p>
        <p>It's only {props.stringlength} characters long!</p>
        <p>It needs to be at least 5 Characters in length</p>
      </div>
    );
  }
};

export default validationComponent;
