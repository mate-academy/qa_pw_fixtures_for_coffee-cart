export const priceFormatStr = (unitPrice: number): string =>
  `$${unitPrice.toFixed(2)}`;
// "$5.00", "$12.50"

export const unitPriceFormatStr = (unitPrice: number, unitsNumber: number): string =>
  `${priceFormatStr(unitPrice)} x ${unitsNumber}`;
// "$5.00 x 2", "$12.50 x 3"

export const totalPriceFormatStr = (totalPrice: number): string =>
  `Total: ${priceFormatStr(totalPrice)}`;
// "Total: $10.00", "Total: $37.50"