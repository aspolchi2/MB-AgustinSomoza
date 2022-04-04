import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetStock from "../../helpers/GetStock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Spinner } from "react-bootstrap";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { itemId } = useParams();
  useEffect(() => {
    GetStock()
      .then((res) => {
        setItem(res.find((prod) => prod.id === Number(itemId)));
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [itemId]);

  return isLoading ? (
    <div className="loading">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  ) : (
    <ItemDetail {...item} />
  );
};

export default ItemDetailContainer;
