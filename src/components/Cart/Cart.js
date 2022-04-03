import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const Cart = () => {
  const { cart, cartTotal, cartQuantity, emptyCart, removeItem } = useContext(CartContext);
  console.log(cart);
  return (
      
<div>
<h2>Compra </h2>
<hr />
{
    cart.map((item)=> (
        <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
            <button onClick={()=> removeItem()}>Eliminar</button>
        </div>
        
        

    ))
}




  </div>);
};

export default Cart;
