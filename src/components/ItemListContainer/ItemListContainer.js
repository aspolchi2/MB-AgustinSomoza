import React from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { Spinner } from "react-bootstrap";
import useFirebase from "../../Hooks/useFirebase";

const ItemListContainer = ({ category }) => {
  const { catId } = useParams();
  const getCategory = category || catId;
  const { firebase, isLoading } = useFirebase("productos", getCategory);
  return isLoading ? (
    <div className="loading">
      <Spinner animation="border" />
    </div>
  ) : (
    <div className="ItemListContainer">
      <ItemList products={firebase} />
    </div>
  );
};

export default ItemListContainer;
