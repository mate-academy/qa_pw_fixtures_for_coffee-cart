import { test as base } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage';
import { CartPage } from '../../src/pages/CartPage';

type Fixtures = {
  menuPage: MenuPage;
  cartPage: CartPage;
};

export const test = base.extend<Fixtures>({
  menuPage: async ({ page }, use) => {
    const menuPage = new MenuPage(page);
    await use(menuPage);
  },

  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },
});

export { expect } from '@playwright/test';
