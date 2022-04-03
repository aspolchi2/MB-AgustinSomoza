import React, { useRef } from "react";

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
      <button className="counter" onClick={() => more()}>
        +
      </button>
      <span ref={MaxStock} className="spanCount">
        {count}
      </span>
      <button className="counter" onClick={() => less()}>
        -
      </button>
      
      <button className="counter" onClick={OnAdd}>
        Buy
      </button>
    </div>
  );
};
export default ItemCount;
