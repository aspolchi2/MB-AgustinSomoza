import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Button from "../../helpers/Button/Button";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { Price } from "../../helpers/Price";


const ItemDetail = ({ id, name, price, stock, img, desc, initial, imgDescUrl }) => {
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
  console.log(imgDescUrl);
  return (
    <>
      <div className="ItemDetail">
        <div className="item">
          <img src={imgDescUrl || img} alt={name} />
        </div>
        <div className="detail">
          <h2 className="detailName">{name}</h2>
          <Price amount={price} />
          <p>Stock disponible: {stock}</p>
          <div className="priceBuy">
            {!isInCart(id) ? (
              <ItemCount
                stock={stock}
                OnAdd={addToCart}
                count={count}
                setCount={setCount}
              />
            ) : (
              <Link to={`/cart`}>
                <Button text={"Ir al carrito"} />
              </Link>
            )}
            <hr />
            <p>{desc}</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="keepShopping">Segui comprando</h2>
        <ItemListContainer />
      </div>
    </>
  );
};

export default ItemDetail;
