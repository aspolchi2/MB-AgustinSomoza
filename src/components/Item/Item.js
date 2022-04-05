import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyButton from "../../helpers/Button/MyButton";

export const Item = ({  id,  name,  price,  desc,  img,  stock,  initial,  category}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Link to={`/detail/${id}`}>
        <MyButton text={'Ver detalle'} addClass={'reduceFont'}/>
      </Link>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>Precio: ${price}</p>
          <p>Stock disponible :{stock}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
