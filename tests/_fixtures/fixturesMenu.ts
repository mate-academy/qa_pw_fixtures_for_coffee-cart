import { test as base } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage';

export const test = base.extend<{
  menuPage: MenuPage;
}>({
  menuPage: async ({ page }, use) => {
    const menuPage = new MenuPage(page);
    await use(menuPage);
  },
});
