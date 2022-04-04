import React from "react";
import { useContext } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ButtonGoCart from "../../helpers/Button/ButtonGoCart";

const Cart = () => {
  const { cart, cartTotal, cartQuantity, emptyCart, removeItem } =
    useContext(CartContext);
  console.log(cart);
  return (
    <div className="row cart">
      <h2>Resumen de tu carrito</h2>
      <hr></hr>
      {cart.map((item) => (
        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" src={item.img} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.desc}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Cantidad: {item.count}</ListGroupItem>
            <ListGroupItem>
              Precio final: {item.price * item.count}
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <ButtonGoCart
              text={"Eliminar"}
              onClic={() => removeItem(item.id)}
              className={"hover-underline-animation"}
            />
          </Card.Body>
        </Card>
      ))}

      {cart.length === 0 ? (
        <p>
          Tu carrito esta vacio{" "}
          <Link to={"/"}>
            <ButtonGoCart text={"Ir a la tienda"} className={'hover-underline-animation'} />
          </Link>
        </p>
      ) : (
        <ButtonGoCart text={"Vaciar Carrito"} onClic={emptyCart} className={'hover-underline-animation textAlign'}/>
      )}
    </div>
  );
};

export default Cart;
