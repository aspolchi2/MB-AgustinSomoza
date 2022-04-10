import React from "react";

const Button = ({ text, onClick, fixed, className }) => {
  return (
    <div className={fixed}>
      <button className="cta" type="button" onClick={onClick}>
        <span className={`hover-underline-animation ${className}`}>{text}</span>
      </button>
    </div>
  );
};

export default Button;
