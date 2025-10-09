export function unitPriceFormatStr(unitPrice: number, unitsNumber: number): string {
    const formatedPrice = `${unitPrice.toFixed(2)} x ${unitsNumber}`;

    return formatedPrice;
}

export function priceFormatStr(unitPrice: number): string {
    const formatedPrice = `$${unitPrice.toFixed(2)}`;

    return formatedPrice;
}

export function totalPriceFormatStr(unitNumber: number): string {
    const formatedPrice = `Total: $${unitNumber.toFixed(2)}`;

    return formatedPrice;
}