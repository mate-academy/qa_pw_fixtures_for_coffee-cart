export class GetPriceForQuantity {
  unitPriceFormatStr(unitPrice: number, unitNumber: number): string {
    return `${this.priceFormatStr(unitPrice)}.00 x ${unitNumber}`;
  }

  priceFormatStr(unitPrice: number): string {
    return `$${unitPrice}`;
  }

  totalPriceFormatStr(unitPrice: number): string {
    return `Total: $${unitPrice}`;
  }
}
