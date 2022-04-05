import React from "react";
import { useContext } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import MyButton from "../../helpers/Button/MyButton";

const Cart = () => {
  const { cart, cartTotal, cartQuantity, emptyCart, removeItem } =
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
      <hr></hr>
      {cart.map((item, id) => (
        <Card style={{ width: "15rem" }} key={item.id}>
          <Card.Img variant="top" src={item.img} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.desc}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Cantidad: {item.count}</ListGroupItem>
            <ListGroupItem>
              Precio final: ${item.price * item.count}
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <MyButton text={"Eliminar"} onClick={() => removeItem(item.id)} />
          </Card.Body>
        </Card>
      ))}
     
       
      <MyButton text={"Vaciar Carrito"} onClick={emptyCart} fixed={"textAlign"} />
    </div>
  );
};

export default Cart;
