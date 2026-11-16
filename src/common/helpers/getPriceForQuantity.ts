export function unitPriceFormatStr(unitPrice, unitsNumber) {
    return (`${unitPrice.toFixed(2)} x ${unitsNumber}`);
}

export function priceFormatStr(unitPrice) {
    return (`$${unitPrice.toFixed(2)}`);
}
 export function totalPrice (unitPrice, unitsNumber) {
    const totalPrice = (unitPrice.toFixed(2) * unitsNumber);
    return totalPrice;
}

export function totalPriceFormatStr(totalPrice) {
    return (`Total: $${totalPrice.toFixed(2)}`)
}