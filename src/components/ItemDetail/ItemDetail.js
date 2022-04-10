import React, { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Button from "../../helpers/Button/Button";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { Price } from "../../helpers/Price";

const ItemDetail = ({
  id,
  name,
  price,
  stock,
  img,
  desc,
  initial,
  imgDescUrl,
}) => {
  const { addItem, isInCart } = useContext(CartContext);

  const addToCart = (count) => {
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
    <>
      <div className="ItemDetail">
        <div className="item">
          <img src={imgDescUrl} alt={name} />
        </div>
        <div className="detail">
          <h2 className="detailName">{name}</h2>
            <p>{desc}</p>
            <hr />
          <Price amount={price} />

          {stock === 1 ? <p className="lastStock">Ultimo en stock </p>: <p> Stock disponible: {stock}</p>}

          <div className="priceBuy">
            {!isInCart(id) ? (
              <ItemCount stock={stock} OnAdd={addToCart} />
            ) : (
              <Link to={`/cart`}>
                <Button text={"Ir al carrito"} />
              </Link>
            )}
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
