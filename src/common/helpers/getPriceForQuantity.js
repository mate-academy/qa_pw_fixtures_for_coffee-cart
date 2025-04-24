export function unitPriceFormatStr(unitPrice, unitsNumber) {
  unitPrice = parseFloat(unitPrice.toString()).toFixed(2);

  return `${unitPrice} x ${unitsNumber}`;
}

export function priceFormatStr(unitPrice) {
  return `$${unitPrice}`;
}

export function totalPriceFormatStr(unitPrice) {
  return 'Total: ' + priceFormatStr(unitPrice);
}