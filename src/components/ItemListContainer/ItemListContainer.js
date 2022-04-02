import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetStock from "../../helpers/GetStock";
import ItemList from "../ItemList/ItemList";
import { Spinner } from "react-bootstrap";


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { catId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    GetStock()
      .then((res) => {
        if (catId) {
          setProducts(res.filter((prod) => prod.category === catId));
        } else {
          setProducts(res);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, [catId]);
  return isLoading ? (
    <div className="loading"><Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner></div>
  ) : (
    <div className="ItemListContainer">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
