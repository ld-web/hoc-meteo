import React from "react";

const Button = ({ handleClick, type, textContent }) => (
  <button onClick={handleClick} className={`btn btn-${type}`}>
    {textContent}
  </button>
);

export default Button;
