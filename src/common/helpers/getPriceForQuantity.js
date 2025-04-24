export function unitPriceFormatStr(unitPrice, unitsNumber) {
  return `${unitPrice} x ${unitsNumber}`;
}

export function priceFormatStr(unitPrice) {
  return `$${unitPrice}`;
}

export function totalPriceFormatStr(unitPrice) {
  return 'Total: ' + priceFormatStr(unitPrice);
}