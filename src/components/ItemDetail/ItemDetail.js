import React, { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import MyButton from "../Button/MyButton";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { Price } from "../../helpers/Price";
import ButtonPrimery from "../Button/ButtonPrimary";

const ItemDetail = ({
  id,
  name,
  price,
  stock,
  img,
  desc,
  imgDescUrl,
  category,
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

          {stock === 1 ? (
            <p className="lastStock">Ultimo en stock </p>
          ) : (
            <p className="stockDisponible"> Stock disponible: {stock}</p>
          )}

          <div className="priceBuy">
            {!isInCart(id) ? (
              <ItemCount stock={stock} OnAdd={addToCart} />
            ) : (
              <Link to={`/cart`}>
                <ButtonPrimery text="Ver carrito" />
              </Link>
            )}
          </div>
        </div>
      </div>
      <div>
        <h2 className="keepShopping">Productos relacionados</h2>
        <ItemListContainer category={category} />
      </div>
    </>
  );
};

export default ItemDetail;
