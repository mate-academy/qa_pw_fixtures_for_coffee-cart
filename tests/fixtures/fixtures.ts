import { test as base } from '@playwright/test';
import { MenuPage } from '../../src/ui/pages/MenuPage';
import { CartPage } from '../../src/ui/pages/CartPage';

export const test = base.extend<{
  menuPage: MenuPage;
  cartPage: CartPage;
}>({
  menuPage: async ({ page }, use) => {
    const menuPage = new MenuPage(page);

    await use(menuPage);
  },
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);

    await use(cartPage);
  },
});
