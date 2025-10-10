export function unitPriceFormatStr(unitPrice: number, unitsNumber: number): string {
    const formatedPrice = `${unitPrice.toFixed(2)} x ${unitsNumber}`;

    return formatedPrice;
}

export function priceFormatStr(unitPrice: number): string {
    const formatedPrice = `$${unitPrice.toFixed(2)}`;

    return formatedPrice;
}

export function totalPriceFormatStr(unitPrice: number, unitNumber: number): string {
    const formatedPrice = `Total: $${(unitPrice * unitNumber).toFixed(2)}`;

    return formatedPrice;
}