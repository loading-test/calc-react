import React from "react";

const Numbers = ({ handleClick, clear }) => {
  return (
    <div className="leftPanel">
      <div className="numbers">
        <div onClick={handleClick}>7</div>
        <div onClick={handleClick}>8</div>
        <div onClick={handleClick}>9</div>
      </div>
      <div className="numbers">
        <div onClick={handleClick}>4</div>
        <div onClick={handleClick}>5</div>
        <div onClick={handleClick}>6</div>
      </div>
      <div className="numbers">
        <div onClick={handleClick}>1</div>
        <div onClick={handleClick}>2</div>
        <div onClick={handleClick}>3</div>
      </div>
      <div className="numbers">
        <div onClick={handleClick}>0</div>
        <div onClick={handleClick}>.</div>
        <div onClick={clear}>AC</div>
      </div>
    </div>
  );
};

export default Numbers;
