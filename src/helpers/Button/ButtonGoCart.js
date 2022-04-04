import React from "react";

const ButtonGoCart = ({ text, onClick, fixed }) => {
  return (
    <div className={fixed}>
      <button className="cta" type="button" onClick={onClick}>
        <span className='hover-underline-animation'>{text}</span>
      </button>
    </div>
  );
};

export default ButtonGoCart;
