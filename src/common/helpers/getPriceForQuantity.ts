export const unitPriceFormatStr = (unitPrice: number, unitsNumber: number) =>
  `${priceFormatStr(unitPrice)} x ${unitsNumber}`;

export const priceFormatStr = (unitPrice: number) =>
  `$${unitPrice.toFixed(2)}`;

export const totalPriceFormatStr = (totalPrice: number) =>
  `Total: ${priceFormatStr(totalPrice)}`;