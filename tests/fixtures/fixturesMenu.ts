import { test as base } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage';

export const test = base.extend<{
  menuPage: MenuPage;
}>({
  menuPage: async ({ page }, use) => {
    await use(new MenuPage(page));
  }
});