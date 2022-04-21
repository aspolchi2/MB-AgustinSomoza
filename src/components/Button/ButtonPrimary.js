import React from 'react'

const ButtonPrimary = ({text, onClick}) => {
  return (
    
<button className="button50" type='submit' onClick={onClick}>{text}</button>
    
  )
}

export default ButtonPrimary