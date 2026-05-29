
import { formatPrice } from 'Intl.NumberFormat/lib/utilities/formatPrice';


export function unitPriceFormatStr(unitPrice: number, unitsNumber: number): string {
  return `${unitPrice.toFixed(2)} x ${unitsNumber}`;
}
export function priceFormatStr(unitPrice: number): string {
  return `$${unitPrice.toFixed(2)}`;
}
export function totalPriceFormatStr(unitsNumber: number, unitPrice: number): string {
  const total = unitsNumber * unitPrice;
  return `Total: $${total.toFixed(2)}`;
}

