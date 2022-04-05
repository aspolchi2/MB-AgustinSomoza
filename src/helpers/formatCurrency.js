function formatCurrency(numbeer, currency = "ARS") {
    const formatter = new Intl.NumberFormat(undefined, {
      currency,
      style: "currency"
    });
  
    return formatter.format(numbeer);
  }
  
  export default formatCurrency;
  