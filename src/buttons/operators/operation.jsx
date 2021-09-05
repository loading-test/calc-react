import React from "react";

const Operation = ({ handleClick }) => {
  return (
    <div className="operators">
      <div onClick={handleClick}>+</div>
      <div onClick={handleClick}>-</div>
      <div onClick={handleClick}>*</div>
      <div onClick={handleClick}>/</div>
    </div>
  );
};

export default Operation;
