import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../../helpers/Button/Button";
import { Price } from "../../helpers/Price";

export const Item = ({
  id,
  name,
  price,
  desc,
  img,
  stock,
  initial,
  category,
}) => {
  return (
    <div className="item">
      <article className="itemArticle">
        <header className="itemArticleHeader">
          <img src={img} alt={desc} />
        </header>
        <main className="itemArticleMain">
          <Link to={`/detail/${id}`}>
            <Button text={"Ver detalles"} />
          </Link>
          <p>{name}</p>
          <p className="lastStock">
            {stock > 1 || "¡No te quedes con las ganas!"}
          </p>
          <Price amount={price} />
        </main>
        <footer className="itemArticleFooter">
          <p>Stock disponible: {stock}</p>
        </footer>
      </article>
    </div>
  );
};
