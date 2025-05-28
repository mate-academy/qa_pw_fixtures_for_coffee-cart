import { test as base } from '@playwright/test';
import { CartPage } from '../../src/pages/CartPage';
import { MenuPage } from '../../src/pages/MenuPage';
import { GetPriceForQuantity } from '../../src/common/helpers/GetPriceForQuantity';

export const test = base.extend<{
  cartPage: CartPage;
  menuPage: MenuPage;
  priceFormatter: GetPriceForQuantity;
}>({
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  menuPage: async ({ page }, use) => {
    await use(new MenuPage(page));
  },

  priceFormatter: async ({}, use) => {
    await use(new GetPriceForQuantity());
  },
});
