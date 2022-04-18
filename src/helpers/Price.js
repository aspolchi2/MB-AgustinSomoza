import React from "react";
import formatCurrency from "./formatCurrency";

export const Price = ({ amount, className, text }) => {
  const formatAmount = formatCurrency(amount);
  return (
    <span className={className ? className : "detailPrice"}>
      {text} {formatAmount}
    </span>
  );
};
