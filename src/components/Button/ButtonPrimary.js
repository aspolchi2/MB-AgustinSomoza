import React from 'react'
import { Link } from 'react-router-dom'

const ButtonPrimary = ({text, onClick}) => {
  return (
    
<button className="button50" role="button" onClick={onClick}>{text}</button>
    
  )
}

export default ButtonPrimary