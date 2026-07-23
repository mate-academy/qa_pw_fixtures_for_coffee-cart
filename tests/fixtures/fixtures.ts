import { test as base, expect } from '@playwright/test';
import { MenuPage} from '../../src/pages/MenuPage';
import { CartPage } from '../../src/pages/CartPage';

type Pages = {
  menuPage: MenuPage;
  cartPage: CartPage;
};

export const test = base.extend<Pages>({
  menuPage: async ({ page }, use) => {
    await use(new MenuPage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  }
});

export { expect };
