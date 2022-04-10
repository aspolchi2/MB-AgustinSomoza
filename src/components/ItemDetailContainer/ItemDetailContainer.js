import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Spinner } from "react-bootstrap";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { itemId } = useParams();
  useEffect(() => {
   const docRef = doc(db, "productos", itemId)
   getDoc(docRef)
   .then((doc) => {
     setItem({id: doc.id, ...doc.data()})
   })
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
