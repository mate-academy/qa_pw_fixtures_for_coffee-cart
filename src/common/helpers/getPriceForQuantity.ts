export function getPriceForQuantity (unitPrice:number, unitsNumber:number) {
  return `${unitPrice}.00 x ${unitsNumber}`;
}

export function priceFormatStr(unitPrice:number) {
  return `$${unitPrice}`;
}

export function totalPriceFormatStr(unitsNumber:number) {
  return `Total: $${unitsNumber}`;
}