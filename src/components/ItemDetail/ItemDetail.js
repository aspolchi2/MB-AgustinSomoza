import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ id, name, price, stock, img, desc, initial }) => {

    const {addItem, isInCart} = useContext(CartContext)
    const [count, setCount] = useState(initial);
    const addToCart = () => {
        const itemToAdd = {
            id,
            name,
            price,
            stock,
            img,
            desc,
        }
        console.log(itemToAdd);
    
        


    }

    return (
        <div className='ItemDetail'>
            <div className='item'>
                <img src={img} alt={name} />
            </div>
            <div className='detail'>
                <h2 className='detailName'>{name}</h2>
                <p>{desc}</p>

                <p>Stock disponible: {stock}</p>
                <div className='priceBuy'>
                    <p>{price}</p>
                    <ItemCount 
                    stock={stock}
                    OnAdd={addToCart}
                    count={count}
                    setCount={setCount} />
                  </div>
            </div>
        </div>
    )
}

export default ItemDetail

