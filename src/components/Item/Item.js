import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

export const Item = ({id, name, price, desc, img, stock}) => {
    return (
        
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                   {desc} {price} {stock}
                </Card.Text>
                <Link to={`/detail/${id}`}variant="primary">Go somewhere</Link>
                <ItemCount/>
            </Card.Body>
        </Card>
        
    )
}
