
import { formatPrice } from 'Intl.NumberFormat/lib/utilities/formatPrice';
import { getCurrencySymbol } from 'Intl.NumberFormat/lib/utilities/getCurrencySymbol';

export function unitPriceFormatStr(unitPrice: number, unitsNumber: number): string {
    const currencySymbol = getCurrencySymbol();
    return `${formatPrice(unitPrice)} x ${unitsNumber}`;
}

export function priceFormatStr(unitPrice: number): string {
    const currencySymbol = getCurrencySymbol();
    return `${formatPrice(unitPrice)}`;
}   

export function totalPriceFormatStr(unitsNumber: number, unitPrice: number): string {
    const currencySymbol = getCurrencySymbol();
    const totalPrice = unitsNumber * unitPrice;
    return `Total: ${formatPrice(totalPrice)}`;
}




