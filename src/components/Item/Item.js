import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../../helpers/Button/Button";
import { Price } from "../../helpers/Price";

export const Item = ({  id,  name,  price,  desc,  img,  stock,  initial,  category}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} className="img-fluid"/>
      <Link to={`/detail/${id}`}>
        <Button text={'Ver detalles'} />
      </Link>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <Price amount={price} />
          <p>Stock disponible :{stock}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
