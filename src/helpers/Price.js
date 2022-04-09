import React from 'react'
import formatCurrency from './formatCurrency';

export const Price = ({amount, className, text}) => {

    const formatAmount = formatCurrency(amount);
  return (
    <span className={`detailPrice ${className}`}>{text} {formatAmount}</span>
  )
}
