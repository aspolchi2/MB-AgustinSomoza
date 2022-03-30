import React, { useEffect, useState, } from 'react'
import { useParams } from 'react-router-dom'
import GetStock from '../../helpers/GetStock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const { getId } = useParams()


    useEffect(() => {
        GetStock()
            .then((res) => {
                setProducts (res)
            })
            .catch((err) => { console.log(err) })
    }, [getId])
    return (
        <div className='ItemListContainer'>
        <ItemList products={products} />
        </div>

    )
}

export default ItemListContainer