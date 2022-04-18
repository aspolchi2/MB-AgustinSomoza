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
import MyButton from "../Button/MyButton";

const Checkout = () => {
  
  const { cart, cartTotal, emptyCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    adress: "",
    zc: "",
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

      getDoc(docRef).then((doc) => {
        if (doc.data().stock >= element.count) {
        }
        updateDoc(docRef, {
          stock: doc.data().stock - element.count,
        });
      });
    });
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
    );
  }
  if (cart.length === 0) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="checkout">
      <form onSubmit={handleSubmit} className ="form">
      <div>
        <input
          className="myInput name"
          type={"text"}
          placeholder={"Nombre y apellido"}
          value={values.name}
          name="name"
          onChange={handleInputChange}
          autoComplete="off"
        />
        <input
          className="myInput phone"
          type={"tel"}
          placeholder={"Numero de telefono"}
          value={values.tel}
          name="tel"
          onChange={handleInputChange}
          autoComplete="off"
        />
        </div>
        <input
          className="myInput email"
          type="email"
          placeholder={"Tuemail@ejemplo.com"}
          value={values.email}
          name="email"
          onChange={handleInputChange}
          autoComplete="off"
        />
        <div>
        <input
          className="myInput adress"
          type={"text"}
          placeholder={"Direccion"}
          value={values.adress}
          name="adress"
          onChange={handleInputChange}
          autoComplete="off"
        />
        <input
          className="myInput zipCode"
          type={"number"}
          placeholder={"Codigo postal"}
          value={values.zc}
          name="zc"
          onChange={handleInputChange}
          autoComplete="off"
        />
        </div>
        <ButtonPrimary text={"Confirmar"} onClick={handleSubmit} />
        <MyButton text={"Volver"} onClick={() => Navigate(-1)} />
      </form>
    </div>
  );
};

export default Checkout;
