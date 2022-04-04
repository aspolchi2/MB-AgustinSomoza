import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ButtonGoCart from "../../helpers/Button/ButtonGoCart";

const ItemDetail = ({ id, name, price, stock, img, desc, initial }) => {
  const { addItem, isInCart } = useContext(CartContext);
  const [count, setCount] = useState(initial);
  const addToCart = () => {
    const itemToAdd = {
      id,
      name,
      price,
      stock,
      img,
      desc,
      count,
    };
    addItem(itemToAdd);
  };

  return (
    <div className="ItemDetail">
      <div className="item">
        <img src={img} alt={name} />
      </div>
      <div className="detail">
        <h2 className="detailName">{name}</h2>
        <p>{desc}</p>

        <p>Stock disponible: {stock}</p>
        <div className="priceBuy">
          <p>${price}</p>
          {!isInCart(id) ? (
            <ItemCount
              stock={stock}
              OnAdd={addToCart}
              count={count}
              setCount={setCount}
            />
          ) : (
            <Link to={`/cart`}>
              <ButtonGoCart text={'Go to cart'} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
