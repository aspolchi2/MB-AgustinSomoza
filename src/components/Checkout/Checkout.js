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
import ButtonPrimary from "../Button/ButtonPrimary";
import MyButton from "../Button/MyButton";
import { Navigate, useNavigate } from "react-router";
import Swal from "sweetalert2";

const Checkout = () => {
  const nav = useNavigate();
  

  const { cart, cartTotal, emptyCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    adress: "",
    zipCode: "",
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
    // e.preventDefault();
    if (
      !values.name ||
      !values.email ||
      !values.phone ||
      !values.adress ||
      !values.zipCode
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor completa todos los campos",
      });
      return;
    } else {
      Swal.fire({
        icon: "success",
        title: "Gracias por tu compra",
        text: "En breve te contactaremos",
        confirmButtonText: 'Aceptar'
      });
    }
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
    <div>
    

    </div>
  }
  if (cart.length === 0) {
    return <Navigate to={"/"} />;
  }
  const handleBack = () => {
    nav(-1);
    console.log(values);
  };
  return (
    <div className="checkout">
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            className="myInput name"
            type="text"
            placeholder={"Nombre y apellido"}
            value={values.name}
            name="name"
            onChange={handleInputChange}
            autoComplete="off"
          />
          <input
            className="myInput phone"
            type="number"
            placeholder={"Numero de telefono"}
            value={values.phone}
            name="phone"
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
            type="text"
            placeholder={"Codigo postal"}
            value={values.zipCode}
            name="zipCode"
            onChange={handleInputChange}
            autoComplete="off"
          />
        </div>
        <ButtonPrimary text={"Confirmar"} />
        <div className="divError"></div>
        <MyButton text={"Volver"} onClick={handleBack} />
      </form>
    </div>
  );
};

export default Checkout;
