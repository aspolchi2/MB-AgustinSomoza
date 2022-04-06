import React from 'react'
import formatCurrency from './formatCurrency';

export const Price = ({amount, className}) => {

    const formatAmount = formatCurrency(amount);
  return (
    <p className={`detailPrice ${className}`}>{formatAmount}</p>
  )
}
