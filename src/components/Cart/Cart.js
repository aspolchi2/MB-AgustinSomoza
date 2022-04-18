import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import MyButton from "../Button/MyButton";
import { Price } from "../../helpers/Price";
import ButtonPrimary from "../Button/ButtonPrimary";
import { LinkContainer } from "react-router-bootstrap";

const Cart = () => {
  const { cart, cartTotal, emptyCart, removeItem } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cartIsEmpty">
        <p>Tu carrito esta vacio </p>
        <Link to={"/"}>
          <MyButton text={"Ir a la tienda"} />
        </Link>
      </div>
    );
  }

  return (
    <div className="row cart">
      <h2>Resumen de tu carrito</h2>
      {cart.map((item, id) => (
        <article className="cartCard" key={id}>
          <header className="cardHeader">
            <img src={item.img} className="img-fluid" alt={item.desc}></img>
          </header>
          <main className="cardMain">
            <h3>
              {item.name} {item.count === 1 || `X${item.count}`}
            </h3>
            <Price amount={item.price * item.count} />
            <MyButton text={"Eliminar"} onClick={() => removeItem(item.id)} />
          </main>
        </article>
      ))}
      <div>
        <Price text={'Total:'} amount={cartTotal()} className={"textAlign"} />
        <MyButton
          text={"Vaciar Carrito"}
          onClick={emptyCart}
          fixed={"textAlign"}
        />
        <LinkContainer to={"/checkout"}>
        <ButtonPrimary text={'Ir al pago'} />
        </LinkContainer>
      </div>
    </div>
  );
};

export default Cart;
