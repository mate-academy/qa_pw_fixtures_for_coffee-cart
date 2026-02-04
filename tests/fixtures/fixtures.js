import { test as base } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage.js';
import { CartPage } from '../../src/pages/CartPage.js';

export const test = base.extend({
  menuPage: async ({ page }, use) => {
    await use(new MenuPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
});

export { expect } from '@playwright/test';
