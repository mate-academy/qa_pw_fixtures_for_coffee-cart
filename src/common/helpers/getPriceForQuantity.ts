export function unitPriceFormatStr(unitPrice: number, unitsNumber: number): string {
  const formattedPrice = unitPrice.toFixed(2);
  return `${formattedPrice} x ${unitsNumber}`;
}

export function priceFormatStr(unitPrice: number) {
  return `$${unitPrice.toFixed(2)}`;
}

export function totalPriceFormatStr(unitsNumber: number) {
  return `Total: $${unitsNumber.toFixed(2)}`;
}