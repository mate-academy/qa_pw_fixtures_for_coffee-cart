export function unitPriceFormatStr(unitPrice: number, unitsNumber: number) {
  let count = Number(unitsNumber);
  let num  = Number(unitPrice);
  if (!Number.isFinite(num)) {
    num = 0;
  }
  let formatted = num.toFixed(2)
  return `${formatted} x ${count}`;
}

export function priceFormatStr (unitPrice: number) {
  let num  = Number(unitPrice);
  if (!Number.isFinite(num)) {
    num = 0;
  }
  let formatted = num.toFixed(2)
  return `$${formatted}`;
}

export function totalPriceFormatStr(unitsNumber: number) {
  return `Total: $${unitsNumber.toFixed(2)}`;
}