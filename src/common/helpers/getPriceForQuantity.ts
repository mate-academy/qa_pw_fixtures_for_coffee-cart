export function unitPriceFormatStr(unitPrice: number, unitsNumber: number) {
  return `${unitPrice.toFixed(2)} x ${unitsNumber}`;
}

export function priceFormatStr(unitPrice: number) {
  return `$${unitPrice.toFixed(2)}`;
}

export function totalPriceFormatStr(unitsNumber: number) {
  return `Total: $${unitsNumber.toFixed(2)}`;
}
