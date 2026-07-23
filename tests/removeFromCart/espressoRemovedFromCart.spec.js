// import { test } from '@playwright/test';
// import { MenuPage } from '../../src/pages/MenuPage';
// import { CartPage } from '../../src/pages/CartPage';

import { test } from '../fixtures/fixtures';
test('Check Espresso removed from Cart after clicking remove button', async ({
  menuPage,
  cartPage
}) => {
  // const menuPage = new MenuPage(page);
  // const cartPage = new CartPage(page);

  await menuPage.open();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.clickRemoveAllEspressoButton();
  await cartPage.assertNoCoffeeMessageIsVisible();
});
