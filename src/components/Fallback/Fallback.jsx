import React from "react";
import "./fallback.scss";

const Fallback = (props) => {
  const { image, text } = props;
  return (
    <div className="fallback">
      <div>
        <img src={image} alt="" />
      </div>
      <p className="fallback__text">{text}</p>
    </div>
  );
};

export default Fallback;
