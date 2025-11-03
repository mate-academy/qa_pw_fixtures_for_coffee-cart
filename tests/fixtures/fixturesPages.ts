import { test as base } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage';
import { CartPage } from '../../src/pages/CartPage';

export const test = base.extend<{
  menuPage: MenuPage;
  cartPage: CartPage;
}>({
  menuPage: async ({ page }, use) => {
    const createArticlePage = new MenuPage(page);
    await use(createArticlePage);
  },
  cartPage: async ({ page }, use) => {
    const viewArticlePage = new CartPage(page);
    await use(viewArticlePage);
  },
});
