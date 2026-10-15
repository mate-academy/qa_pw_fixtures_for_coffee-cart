export function priceFormatStr(dollars: number): string {
  return `$${dollars.toFixed(2)}`;
}

export function unitPriceFormatStr(dollars: number, count: number): string {
  return `${dollars.toFixed(2)} x ${count}`;
}

export function totalPriceFormatStr(dollars: number): string {
  return `Total: $${dollars.toFixed(2)}`;
}