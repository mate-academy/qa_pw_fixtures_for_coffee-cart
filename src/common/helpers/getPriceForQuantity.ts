export function getPriceForQuantity(unitPrice: number, unitsNumber: number) {
  const totalPrice = unitPrice * unitsNumber;

  const formattedPrices = {
    unitPriceFormatStr: `$${unitPrice.toFixed(2)} x ${unitsNumber}`,
    priceFormatStr: `$${unitPrice.toFixed(2)}`,
    totalPriceFormatStr: `$${totalPrice.toFixed(2)}`,
  };

  return formattedPrices;
}
