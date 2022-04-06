import React from 'react'
import formatCurrency from './formatCurrency';

export const Price = ({amount, className, text}) => {

    const formatAmount = formatCurrency(amount);
  return (
    <p className={`detailPrice ${className}`}>{text} {formatAmount}</p>
  )
}
