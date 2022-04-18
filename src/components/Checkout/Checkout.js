import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import {
  collection,
  addDoc,
  Timestamp,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { Navigate } from "react-router";
import ButtonPrimary from "../Button/ButtonPrimary";

const Checkout = () => {
  const { cart, cartTotal, emptyCart } = useContext(CartContext);
  const [ orderId, setOrderId ] = useState(null);
  const [values, setValues] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const handleInputChange = (e) => {
    setValues({
      //se usa spreed para sacar todo
      ...values,
      //se reemplaza lo que modificas
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      item: cart,
      total: cartTotal(),
      buyer: { ...values },
      time: Timestamp.fromDate(new Date()),
    };

    const orderRef = collection(db, "orders");
    cart.forEach((element) => {
      const docRef = doc(db, "productos", element.id);

      getDoc(docRef)
      .then((doc) => {
        if (doc.data().stock >= element.count) {
        }
        updateDoc(docRef, {
          stock: doc.data().stock - element.count,
        })
      })
    })
    addDoc(orderRef, order).then((doc) => {
      console.log(doc.id);
      setOrderId(doc.id);
      emptyCart();
    });

  };
  if (orderId) {
    return (
      <div className="orderSuccesse">
      <h1>Tu orden se registro correctamente</h1>
      <h2>Tu orden es {orderId}</h2>

      </div>
    )}
  if (cart.length === 0) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="checkout">
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type={"text"}
          placeholder={"tu nombre"}
          value={values.name}
          name="name"
          onChange={handleInputChange}
          autoComplete="off"
        />
        <input
          className="form-control"
          type={"mail"}
          value={values.email}
          name="email"
          onChange={handleInputChange}
          autoComplete="off"
        />
        <input
          className="form-control"
          type={"tel"}
          value={values.tel}
          name="tel"
          onChange={handleInputChange}
          autoComplete="off"
        />
        <ButtonPrimary text={"Confirmar"} onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default Checkout;
