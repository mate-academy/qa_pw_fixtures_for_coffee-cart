import { test as base } from '@playwright/test';
import { CartPage } from '../../src/pages/CartPage';
import { MenuPage } from '../../src/pages/MenuPage';

export const test = base.extend<{
  menuPage: MenuPage;
  cartPage: CartPage;
}>({
  menuPage: async ({ page }, use) => {
    await use(new MenuPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
});
