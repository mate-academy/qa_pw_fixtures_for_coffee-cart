// unitPriceFormatStr — gets unitPrice and unitsNumber as input and returns a formatted price, e.g.: 10.00 x 1
export const unitPriceFormatStr = (
  unitPrice: number,
  unitsNumber: number,
): string => {
  return `${unitPrice.toFixed(2)} x ${unitsNumber}`;
};

// priceFormatStr — gets unitPrice as input and returns a formatted price, e.g.: $10.00
export const priceFormatStr = (unitPrice: number): string => {
  return `$${unitPrice.toFixed(2)}`;
};

// totalPriceFormatStr — gets unitsNumber as input and returns a formatted price, e.g.: Total: $10.00
export const totalPriceFormatStr = (unitsNumber: number): string => {
  return `Total: $${unitsNumber.toFixed(2)}`;
};
