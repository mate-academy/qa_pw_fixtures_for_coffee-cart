import { MenuPage } from '../../src/pages/MenuPage';
import { CartPage } from '../../src/pages/CartPage';
import { test as base } from '@playwright/test';

export const test = base.extend <{
  cartPage;
  menuPage;
}>({
  menuPage: async ({ page }, use) => {
    const menuPage = new MenuPage(page);

    await use(menuPage);
  },
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    
    await use(cartPage);
  }
})