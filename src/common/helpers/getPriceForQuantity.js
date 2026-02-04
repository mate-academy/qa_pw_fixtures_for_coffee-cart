/**
 * Returns formatted unit price x quantity string, e.g. "10.00 x 1"
 */
export function unitPriceFormatStr(unitPrice, unitsNumber) {
  return `${unitPrice.toFixed(2)} x ${unitsNumber}`;
}

/**
 * Returns formatted unit price string, e.g. "$10.00"
 */
export function priceFormatStr(unitPrice) {
  return `$${unitPrice.toFixed(2)}`;
}

/**
 * Returns formatted total price string, e.g. "Total: $10.00"
 */
export function totalPriceFormatStr(unitsNumber) {
  return `Total: $${Number(unitsNumber).toFixed(2)}`;
}
