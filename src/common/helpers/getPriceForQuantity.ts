import { MENU_ITEMS } from '../../constants.js';

type CoffeeItem = keyof typeof MENU_ITEMS;

export const getPriceForQuantity = (item: CoffeeItem, quantity: number) => {
  return (MENU_ITEMS[item] ?? 0) * quantity;
};

export const unitPriceFormatStr = (unitPrice: number, unitsNumber: number) => {
  return `${unitPrice.toFixed(2)} x ${unitsNumber}`;
};

export const priceFormatStr = (unitPrice: number) => {
  return `$${unitPrice.toFixed(2)}`;
};

export const totalPriceFormatStr = (totalPrice: number) => {
  return `Total: $${totalPrice.toFixed(2)}`;
};