export function unitPriceFormatStr(unitPrice:number, unitsNumber:number) {
  return `${Number(unitPrice).toFixed(2)} x ${unitsNumber}`;
}

export function priceFormatStr(unitPrice:number) {
  return `$${Number(unitPrice).toFixed(2)}`;
}

export function totalPriceFormatStr(unitPrice:number) {
  return `Total: $${Number(unitPrice).toFixed(2)}`;
}