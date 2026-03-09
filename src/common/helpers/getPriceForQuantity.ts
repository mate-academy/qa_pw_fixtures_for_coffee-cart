
export function unitPriceFormatStr (unitPrice, unitsNumber) {
  return `${unitPrice}.00 x ${unitsNumber}`;
}

export function priceFormatStr (unitPrice) {
  return `$${unitPrice}.00`;
}

export function totalPriceFormatStr (unitsPrice) {
  return `Total: $${unitsPrice}.00`;
}