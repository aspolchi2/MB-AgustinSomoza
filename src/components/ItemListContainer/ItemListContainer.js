import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { Spinner } from "react-bootstrap";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { catId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const productosRef = collection(db, "productos");
    //deberia haber puesto "products" en el firebase
    const q = catId
      ? query(productosRef, where("category", "==", catId))
      : productosRef;
    getDocs(q)
      .then((resp) => {
        setProducts(
          resp.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      })
      .finally(() => setIsLoading(false));
  }, [catId]);
  return isLoading ? (
    <div className="loading">
      <Spinner animation="border" />
    </div>
  ) : (
    <div className="ItemListContainer">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
