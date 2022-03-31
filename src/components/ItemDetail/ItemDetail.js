import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'


const ItemDetail = ({ id, name, price, stock, img, desc, initial }) => {

    const { cart, addItem, cartQuantity, isInCart } = useContext(CartContext)




    const AddToCart = () => {
        const itemToAdd = {
            id,
            name,
            price,
            stock,
            img,
            desc,
            initial,
        }
        addItem(itemToAdd)
        console.log(cart);
        console.log(isInCart());
        console.log(cartQuantity());


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
                    <ItemCount stock={stock} initial={initial} OnAdd={AddToCart} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail