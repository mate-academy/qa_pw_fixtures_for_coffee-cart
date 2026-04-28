export function unitPriceFormatStr(unitPrice: number, unitsNumber: number) {
  return `${unitPrice.toFixed(2)} x ${unitsNumber}`;
}

export function priceFormatStr(unitPrice: number) {
  return `$${unitPrice.toFixed(2)}`;
}

export function totalPriceFormatStr(totalPrice: number) {
  return `Total: $${totalPrice.toFixed(2)}`;
}
