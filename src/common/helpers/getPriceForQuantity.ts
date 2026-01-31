export const unitPriceFormatStr = (unitPrice, unitsNumber) => {
  return `${unitPrice.toFixed(2)} x ${unitsNumber}`;
};

export const priceFormatStr = (unitPrice) => {
  return `$${unitPrice.toFixed(2)}`;
};

export const totalPriceFormatStr = (unitsNumber) => {
  
  const total = unitsNumber.reduce((sum, item) => sum + item.unitPrice * item.unitsNumber, 0);
  return `Total: $${total.toFixed(2)}`;
};
