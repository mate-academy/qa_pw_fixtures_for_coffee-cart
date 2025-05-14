import { test as base } from '@playwright/test';
import { CartPage } from '../../src/pages/CartPage';


export const test = base.extend<{
cartPage: CartPage;
}> ({
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },
})