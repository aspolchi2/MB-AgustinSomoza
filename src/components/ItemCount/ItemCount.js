import React, { useRef } from "react";
import MyButton from "../../helpers/Button/Button";

const ItemCount = ({ stock, OnAdd, count, setCount }) => {
  const initial = 1;
  const MaxStock = useRef();

  const more = () => {
    setCount(count + 1);
    if (count >= stock) {
      MaxStock.current.classList.add("wrong");
      setTimeout(function () {
        MaxStock.current.classList.remove("wrong");
      }, 1000);
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
      <button className="counter" onClick={() => more()}>
        +
      </button>
      <span ref={MaxStock} className="spanCount">
        {count}
      </span>
      <button className="counter" onClick={() => less()}>
        -
      </button>
      </div>
      
      <MyButton text={"Agregar al carrito"} onClick={() => OnAdd()} />
    </div>
  );
};
export default ItemCount;
