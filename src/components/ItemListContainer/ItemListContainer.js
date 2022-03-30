import React, { useEffect, useState, } from 'react'
import { useParams } from 'react-router-dom'
import GetStock from '../../helpers/GetStock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const { catId } = useParams()


    useEffect(() => {

        GetStock()

            .then((res) => {

                if (catId) {
                    setProducts(res.filter(prod => prod.category === catId))
                } else { setProducts(res) }
            })
            .catch((err) => { console.log(err) })
    }, [catId])
    return (
        <div className='ItemListContainer'>
            <ItemList products={products} />
        </div>

    )
}

export default ItemListContainer