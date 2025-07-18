import { test as base } from '@playwright/test';
import { getPriceForQuantity } from '../../src/common/helpers/getPriceForQuantity';
import { COFFEE_CATALOG } from '../../src/ui/constants/coffeeCatalog';

export const test = base.extend<{
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
