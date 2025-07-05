
export function unitPriceFormatStr(unitPrice, unitsNumber) {
  return `${unitPrice * unitsNumber}.00`;
}

export function priceFormatStr(unitPrice) {
  return `$${unitPrice}.00`;
}

export function totalPriceFormatStr(unitsNumber) {
  return `Total: $${unitsNumber}.00`;
}
