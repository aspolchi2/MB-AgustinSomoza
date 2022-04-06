import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Button from "../../helpers/Button/Button";
import { Price } from "../../helpers/Price";

const Cart = () => {
  const { cart, cartTotal, cartQuantity, emptyCart, removeItem } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cartIsEmpty">
        <p>Tu carrito esta vacio </p>
        <Link to={"/"}>
          <Button text={"Ir a la tienda"} />
        </Link>
      </div>
    );
  }

  return (
    <div className="row cart">
      <h2>Resumen de tu carrito</h2>
      {cart.map((item) => (
        <article className="cartCard">
          <header className="cardHeader">
            <img src={item.img} className="img-fluid"></img>
          </header>
          <main className="cardMain">
            <h3>
              {item.name} {item.count === 1 || `X${item.count}`}
            </h3>
            <Price amount={item.price * item.count} />
            <Button text={"Eliminar"} onClick={() => removeItem(item.id)} />
          </main>
        </article>
      ))}
      <div>
        <Price text={'Total:'} amount={cartTotal()} className={"textAlign"} />
        <Button
          text={"Vaciar Carrito"}
          onClick={emptyCart}
          fixed={"textAlign"}
        />
      </div>
    </div>
  );
};

export default Cart;
