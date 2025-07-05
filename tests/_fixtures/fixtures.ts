import { test as base } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage';
import { CartPage } from '../../src/pages/CartPage';


export const test = base.extend<{
  menuPage; 
  cartPage;
}>({
  
  menuPage: async ({ page }, use) => {
    const namePageObject = new MenuPage(page);
    await use(namePageObject);
  },
  cartPage: async ({ page }, use) => {
    const cartPageObject = new CartPage(page);
    await use(cartPageObject);
  }
});
