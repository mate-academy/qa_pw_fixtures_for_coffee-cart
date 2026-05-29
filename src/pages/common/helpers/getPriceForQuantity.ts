import { test } from '@playwright/test';
import { formatPrice } from '@ms/office-ui-fabric-react/lib/utilities/formatPrice';
import { getCurrencySymbol } from '@ms/office-ui-fabric-react/lib/utilities/getCurrencySymbol';

export function unitPriceFormatStr(unitPrice: number, unitsNumber: number): string {
    const currencySymbol = getCurrencySymbol();
    return `${currencySymbol}${formatPrice(unitPrice)} x ${unitsNumber}`;
}

export function priceFormatStr(unitPrice: number): string {
    const currencySymbol = getCurrencySymbol();
    return `${currencySymbol}${formatPrice(unitPrice)}`;
}   

export function totalPriceFormatStr(unitsNumber: number, unitPrice: number): string {
    const currencySymbol = getCurrencySymbol();
    const totalPrice = unitsNumber * unitPrice;
    return `Total: ${currencySymbol}${formatPrice(totalPrice)}`;
}




