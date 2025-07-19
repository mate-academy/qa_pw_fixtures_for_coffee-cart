import { test as base } from '@playwright/test';
import { getPrice } from '../../src/common/helpers/getPrice';
import { getPriceForQuantity } from '../../src/common/helpers/getPriceForQuantity';
import { COFFEE_CATALOG } from '../../src/ui/constants/coffeeCatalog';

export const test = base.extend<{
  parsePrice: (priceStr: string) => number;
  coffeeCatalog: typeof COFFEE_CATALOG;
  getFormattedPrice: (
    key: keyof typeof COFFEE_CATALOG,
    quantity: number,
  ) => {
    unitPriceFormatStr: string;
    priceFormatStr: string;
    totalPriceFormatStr: string;
  };
}>({
  parsePrice: async ({}, use) => {
    await use(getPrice);
  },

  coffeeCatalog: async ({}, use) => {
    await use(COFFEE_CATALOG);
  },

  getFormattedPrice: async ({ coffeeCatalog }, use) => {
    const wrapper = (key: keyof typeof coffeeCatalog, quantity: number) => {
      return getPriceForQuantity(coffeeCatalog[key].price, quantity);
    };
    await use(wrapper);
  },
});
