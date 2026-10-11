export async function unitPriceFormatStr(unitPrice: number, quantity: number) {
    return `${unitPrice.toFixed(2)} x ${quantity}`;
}

export async function priceFormatStr(unitPrice: number) {
    return `$${unitPrice.toFixed(2)}`;
}

export async function totalPriceFormatStr(unitsNumber: number) {
    return `Total: $${unitsNumber.toFixed(2)}`;
}

