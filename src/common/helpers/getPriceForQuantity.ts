export function unitPriceFormatStr(unitPrice: number, unitsNumber: number): string {
  const formattedUnitPrice = unitPrice.toFixed(2);
  return `${formattedUnitPrice} x ${unitsNumber}`;
}

export function priceFormatStr(unitPrice: number): string {
  const formattedUnitPrice = unitPrice.toFixed(2);
  return `$${formattedUnitPrice}`;
}

export function totalPriceFormatStr(total: number): string {
  const formattedTotal = total.toFixed(2);
  return `Total: $${formattedTotal}`;
}
