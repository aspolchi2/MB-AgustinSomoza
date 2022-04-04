import React from 'react'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const ButtonGoCart = ({text, onClic, className}) => {
  return (
      <div>
    <button className="cta" type="button" onClick={onClic}><span className={className}>{text}</span></button></div>
  )
}

export default ButtonGoCart