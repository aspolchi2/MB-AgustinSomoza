import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const addItem = (item) => {
        setCart([...cart, item])
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod.cantidad, 0)
    }
    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            isInCart,
            cartQuantity
        }}>
        {children}


        </CartContext.Provider>
    )
}