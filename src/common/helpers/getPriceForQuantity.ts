export function unitPriceFormatStr(unitPrice, unitsNumber) {
  return `${unitPrice}.00 x ${unitsNumber}`
};

export function priceFormatStr(unitPrice) {
  return `$${unitPrice}.00`
}

export function totalPriceFormatStr(unitPrice, unitsNumber) {
  const totalPrice = unitPrice * unitsNumber;
  return `Total: $${totalPrice}.00`;
}