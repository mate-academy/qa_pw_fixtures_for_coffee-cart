export function unitPriceFormatStr(unitPrice: Number, unitsNumber: Number) {
  const price = `$${unitPrice} x ${unitsNumber}+-`;
  return price;
}

export function priceFormatsStr(unitPrice: Number) {
  return `$${unitPrice}`;
}

export function totalPriceFormatStr(unitsNumber: Number) {
  return `Total: $${unitsNumber}`;
}
