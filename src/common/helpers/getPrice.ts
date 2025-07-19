export function getPrice(priceStr: string): number {
  return parseFloat(priceStr.replace(/[^0-9.-]+/g, ''));
}
