import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({ id, name, price, stock, img, desc, initial }) => {





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
        console.log(itemToAdd);

    }
    console.log(id);
    return (
        <div className='ItemDetail'>
            <div className='item'> 
            <img src={img} alt={name}/>
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