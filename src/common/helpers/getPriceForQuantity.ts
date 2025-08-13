export function unitPriceFormatStr(unitPrice, unitsNumber) {
  return `${unitPrice.toFixed(2)} x ${unitsNumber}`;
}

export function priceFormatStr(unitPrice) {
  return `$${unitPrice.toFixed(2)}`;
}

export function totalPriceFormatStr(unitPrice, unitsNumber = 1,) {
  const total = unitPrice * unitsNumber;

  if (unitPrice > 1) {
    return `$${total.toFixed(2)}`;
  } else {
    return `Total: $${total.toFixed(2)}`;
  }
}

