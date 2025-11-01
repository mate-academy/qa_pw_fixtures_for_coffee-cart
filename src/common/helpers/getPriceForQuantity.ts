export function priceFormatStr(unitPrice: number): string {
  return `$${unitPrice}.00`
}

export function unitPriceFormatStr(unitPrice: number, unitsNumber: number = 1): string {
  return `${unitPrice}.00 x ${unitsNumber}`
}

export function totalPriceFormatStr(unitsNumber: number = 1): string {
  return `Total: $${unitsNumber}.00`
}