import React from "react";

const MyButton = ({ text, onClick, fixed, addClass }) => {
  return (
    <div className={fixed}>
      <button className="cta" type="button" onClick={onClick}>
        <span className={`hover-underline-animation ${addClass}`}>{text}</span>
      </button>
    </div>
  );
};

export default MyButton;
