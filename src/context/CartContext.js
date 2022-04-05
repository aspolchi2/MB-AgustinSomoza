import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (item) => {
    setCart([...cart, item]);
  };
  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };
  const cartQuantity = () => {
  return  cart.reduce((acc, item) => acc += item.count, 0);
    
  };
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  const cartTotal = () => {
    return cart.reduce(
      (acc, product) => (acc += product.price * product.count),
      0
    );
  };
  const emptyCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{ cart, addItem, isInCart, cartQuantity, removeItem, cartTotal, emptyCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
