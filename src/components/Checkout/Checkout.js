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
import { useForm } from "react-hook-form";


const Checkout = () => {
  const nav = useNavigate()
 const {register, handleSubmit, formState: { errors } } = useForm()
  
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

  const onSubmit = (e) => {
    // e.preventDefault();
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
  const handleBack = () => {
    nav(-1)
  console.log(values);
}
  return (
    <div className="checkout">
      <form onSubmit={handleSubmit(onSubmit)} className ="form">
      <div>
        <input
          className="myInput name"
          type='text'
          placeholder={"Nombre y apellido"}
          value={values.name} 
          name="name"
          {...register('name', { required: true, minLength: 3 })}
          onChange={handleInputChange}
          autoComplete="off"
          required
        />
        <input
          className="myInput phone"
          type='number' 
          placeholder={"Numero de telefono"}
          value={values.phone}
          {...register('phone', { required: true, minLength: 10, maxLength: 10 })}
          onChange={handleInputChange}
          autoComplete="off"
        />
        </div>
        <input
          className="myInput email"
          type="email"
          placeholder={"Tuemail@ejemplo.com"}
          value={values.email}  required
          name="email"
          onChange={handleInputChange}
          autoComplete="off"
         

        />
        <div>
        <input
          className="myInput adress"
          type={"text"}
          placeholder={"Direccion"}
          value={values.adress}  required
          name="adress"
          onChange={handleInputChange}
          autoComplete="off"
          
        />
        <input
          className="myInput zipCode"
          type='text'
          placeholder={"Codigo postal"}
          value={values.zipCode}  required
          name="zipCode"
          onChange={handleInputChange}
          autoComplete="off"
          

        />
        </div>
        <ButtonPrimary text={"Confirmar"}  />
        <div className="divError">
      {errors.phone && <p className="msgError">El numero de telefono es invalido</p>}
      {errors.name && <p className="msgError">El nombre debe contener 3 o mas caracteres</p>}
      </div>
        <MyButton text={"Volver"} onClick={handleBack} />
      </form>

    </div>
  );
};

export default Checkout;
