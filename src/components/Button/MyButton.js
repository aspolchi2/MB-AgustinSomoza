import React from "react";

const MyButton = ({ text, onClick, fixed, className, place }) => {
  return (
    <div className={fixed}>

      <button className="cta" type="button" onClick={onClick}>
        <span className={`hover-underline-animation ${className}`}>{text}</span>
      </button>

    </div>
  );
};

export default MyButton;
