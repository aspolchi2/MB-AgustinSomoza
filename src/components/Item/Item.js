import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Item = ({  id,  name,  price,  desc,  img,  stock,  initial,  category}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Link to={`/detail/${id}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-info-circle-fill infoColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
        </svg>
      </Link>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          ${price}
          <p>Stock disponible :{stock}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
