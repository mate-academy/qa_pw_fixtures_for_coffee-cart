import { test as base } from '@playwright/test';
import { CartPage } from '../../src/ui/pages/CartPage';

export const test = base.extend<{
  cartPage;
}>({
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);

    await use(cartPage);
  },
});
