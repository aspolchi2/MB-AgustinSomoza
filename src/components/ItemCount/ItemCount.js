import React, { useRef } from "react";

import { useState } from "react";

const ItemCount = ({ stock, OnAdd }) => {
  const initial = 1;
  const [count, setCount] = useState(initial);

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
  const addToCart = () => {
    if (stock > 0 && count > 0) {
      const StockLeft = stock - count;
      OnAdd(count, StockLeft);
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
      <button className="counter" onClick={() => addToCart()}>
        Buy
      </button>
    </div>
  );
};
export default ItemCount;
