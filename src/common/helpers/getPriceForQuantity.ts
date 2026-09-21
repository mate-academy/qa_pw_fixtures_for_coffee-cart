export function unitPriceFormatStr(unitPrice:number, unitsNumber:number){
  return `${priceFormatStr(unitPrice)} x ${unitsNumber}`;
}

export function priceFormatStr(unitPrice:number) {
  return `$${unitPrice}.00`;
}

export function totalPriceFormatStr(unitPrice:number) {
  return `Total: ${priceFormatStr(unitPrice)}`
}
