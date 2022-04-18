import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyButton from "../Button/MyButton";
import { Price } from "../../helpers/Price";

export const Item = ({  id,  name,  price,  desc,  img,  stock,  initial,  category}) => {
  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img variant="top" src={img} className="img-fluid"/>
      <Link to={`/detail/${id}`}>
        <MyButton text={'Ver detalles'} />
      </Link>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        {
          stock !== 0 || <p className="lastStock">Sin stock disponible</p> 
        }

        
        <Card.Text>
          <Price amount={price} />
          <br></br>
          <span>Stock disponible : {stock}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
