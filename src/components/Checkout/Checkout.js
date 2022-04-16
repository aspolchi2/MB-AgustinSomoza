import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import { collection, addDoc, Timestamp, doc, updateDoc, getDoc } from "firebase/firestore";
import { Navigate } from "react-router";

const Checkout = () => {
  const { cart, cartTotal, emptyCart } = useContext(CartContext);
  const { orderId, setOrderId } = useState(null);
  const [values, setValues] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const handleInputChange = (e) => {
    console.log(e.target.value);

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
    cart.forEach(element => {
        const docRef = doc(db, 'productos', element.id)
        
        getDoc(docRef).then((doc) => {
            if(doc.data().stock >= doc.stock){
                
            }
            updateDoc(docRef, {
                stock: doc.data().stock - doc.stock
            })
        })
        
    });
    addDoc(orderRef, order).then((res) => {
      console.log(res.id);
      setOrderId(res.id);
      emptyCart();
    });

    console.log(order);
  };
  if (cart.length === 0) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      Checkout
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
        <button className="btn btn-primery" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default Checkout;
