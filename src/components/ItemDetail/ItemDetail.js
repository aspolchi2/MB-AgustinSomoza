import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Card } from 'react-bootstrap'


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
            <Card className="bg-dark text-dark">
                <Card.Img src={img} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {desc} {price} 
                    </Card.Text>
                    <Card.Text>Quedan {stock} en Stock</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <ItemCount stock={stock} initial={initial} OnAdd={AddToCart} />
        </div>
    )
}

export default ItemDetail