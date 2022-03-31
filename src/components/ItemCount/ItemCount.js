import React, { useRef } from 'react'

import { useState } from "react"


const ItemCount = ({ stock, OnAdd }) => {
    const initial = 0
    const [count, setCount] = useState(initial)
    
    const MaxStock = useRef()

    const More = () => {
        setCount(count + 1)
        if (count >= stock) {
            MaxStock.current.classList.add('wrong')
            setTimeout(function () {
                MaxStock.current.classList.remove('wrong')
            }, 1000)
            setCount(stock)
        }
    }

    const Less = () => {
        setCount(count - 1)
        if (count <= initial) {
            setCount(initial)
        }
    }
    const AddToCart = () => {
    if (stock > 0 && count > 0){
            const StockLeft = stock - count
            OnAdd(count, StockLeft)

        }
    }



    return (
        <div className="ItemCount">
            <button className='counter' onClick={() => More()}>+</button>
            <span ref={MaxStock} className="spanCount">{count}</span>
            <button className='counter' onClick={() => Less()}>-</button>
            <button className="counter" onClick={() => AddToCart()}>Buy</button>
        </div>
    )

}
export default ItemCount