

export function priceFormatStr(unitPrice: number) {
  return `$${unitPrice.toFixed(2)}`;
}

export function unitPriceFormatStr(unitPrice: number, unitsNumber: any) {
  return `${unitPrice.toFixed(2)} x ${unitsNumber}`;
}

export function totalPriceFormatStr(unitPrice: number) {
  return `Total: $${unitPrice.toFixed(2)}`;
}