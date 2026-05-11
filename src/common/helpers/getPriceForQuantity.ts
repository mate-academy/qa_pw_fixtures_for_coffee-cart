import { COFFEE_PRICES } from '../../constants.js';

export function unitPriceFormatStr(unitPrice, unitsNumber) {
  return `$${unitPrice.toFixed(2)} x ${unitsNumber}`
}

export function priceFormatStr(unitPrice) {
  return `$${unitPrice.toFixed(2)}`
}

export function totalPriceFormatStr(unitPrice, unitsNumber) {
  const total = unitPrice * unitsNumber;
  return `Total: $${total.toFixed(2)}`;
}
