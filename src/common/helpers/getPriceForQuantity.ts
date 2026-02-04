/**
 * Returns formatted unit price x quantity string, e.g. "10.00 x 1"
 */
export function unitPriceFormatStr(
  unitPrice: number,
  unitsNumber: number
): string {
  return `${unitPrice.toFixed(2)} x ${unitsNumber}`;
}

/**
 * Returns formatted unit price string, e.g. "$10.00"
 */
export function priceFormatStr(unitPrice: number): string {
  return `$${unitPrice.toFixed(2)}`;
}

/**
 * Returns formatted total price string, e.g. "Total: $10.00"
 */
export function totalPriceFormatStr(unitsNumber: number): string {
  return `Total: $${Number(unitsNumber).toFixed(2)}`;
}
