import React, { useRef, useState } from "react";
import MyButton from "../../helpers/Button/Button";


const ItemCount = ({ stock, OnAdd }) => {
  const initial = 1;
  const [count, setCount] = useState(initial);

  const MaxStock = useRef();


  const handleAdd = () => {
    setCount(count + 1);
    if (count >= stock) {
      MaxStock.current.classList.add("wrong");
      setTimeout(function () {
        MaxStock.current.classList.remove("wrong");
      }, 0.5 * 1000);
      setCount(stock);
    }
  };

  const less = () => {
    setCount(count - 1);
    if (count <= initial) {
      setCount(initial);
    }
  };

  return (
    <div className="ItemCount">
      <div className="count">
      <button className="counter" onClick={() => handleAdd()}>
        +
      </button>
      <span ref={MaxStock} className="spanCount">
        {count}
      </span>
      <button className="counter" onClick={() => less()}>
        -
      </button>
      <MyButton text={"Agregar al carrito"} onClick={() => OnAdd(count)} className={"addToCartText"} fixed={"addToCartPosition"}/>
      </div>
      
    </div>
  );
};
export default ItemCount;
