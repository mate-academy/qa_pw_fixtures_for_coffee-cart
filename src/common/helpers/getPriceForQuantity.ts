export function unitPriceFormatStr(price: number, quantity: number) {
    return `${(price).toFixed(2)} x ${quantity}`;
}

export function priceFormatStr(unitPrice: number) {
    return `$${(unitPrice).toFixed(2)}`;
}

export function totalPriceFormatStr(unitPrice: number, quantity = 1): string {
    const total = unitPrice * quantity
    
    return `Total: $${(total).toFixed(2)}`;
}