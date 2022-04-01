import React, { useEffect, useState } from 'react'
import GetStock from '../../helpers/GetStock'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({ id, name, price, stock, img, desc, initial }) => {
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        setIsLoading(true)
        GetStock().then(stock => {
            setIsLoading(false) 
        })
    }, [])




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
        isLoading ? <div>Loading...</div> :
        <div className='ItemDetail'>
            <div className='item'> 
            <img src={img} alt={name} className='img-fluid'/>
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