import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GetStock from '../../helpers/GetStock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const { itemId } = useParams()
    useEffect(() => {
        GetStock()
            .then((res) => {
                setItem(res.find((prod) => prod.id === Number(itemId)))
            })
    }, [itemId])

    return (
        
        <ItemDetail {...item} />
    )
}

export default ItemDetailContainer