export function unitPriceFormatStr (unitPrice:number, unitsNumber:number) {
  return `${unitPrice}.00 x ${unitsNumber}`;
}

export function priceFormatStr(unitPrice:number) {
  return `$${unitPrice}.00`;
}

export function totalPriceFormatStr(unitsNumber:number) {
  return `Total: $${unitsNumber}.00`;
}