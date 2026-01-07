import { test as base } from '@playwright/test';
import { CartPage } from '../../src/pages/CartPage';

export const test = base.extend({

  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },
});

export { expect } from '@playwright/test';