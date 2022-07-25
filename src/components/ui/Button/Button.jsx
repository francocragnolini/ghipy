import React from "react";
import "./button.scss";

const Button = (props) => {
  const { text, onClick } = props;
  return (
    <button onClick={onClick ? onClick : ""} className="btn">
      {text ? text : "See more"}
    </button>
  );
};

export default Button;
