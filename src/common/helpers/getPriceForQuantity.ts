import { coffeePrices } from '../../../src/constants'

export function unitPriceFormatStr(unitPrice: number, unitsNumber: number): string {
    const formatedPrice = `${unitPrice.toFixed(2)} x ${unitsNumber}`;

    return formatedPrice;
}

export function priceFormatStr(unitPrice: number): string {
    const formatedPrice = `$${unitPrice.toFixed(2)}`;

    return formatedPrice;
}

export function totalPriceFormatStr(totalPrice: number): string {
    const formatedPrice = `Total: $${totalPrice.toFixed(2)}`;

    return formatedPrice;
}