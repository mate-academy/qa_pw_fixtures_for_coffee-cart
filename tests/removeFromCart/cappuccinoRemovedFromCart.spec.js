// import { test } from '@playwright/test';
// import { MenuPage } from '../../src/pages/MenuPage';
// import { CartPage } from '../../src/pages/CartPage';
import { test } from '../fixtures/fixtures';

test('Check Cappuccino removed from Cart after clicking remove button', async ({
  menuPage,
  cartPage
}) => {
  // const menuPage = new MenuPage(page);
  // const cartPage = new CartPage(page);

  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.clickRemoveAllCappucinoButton();
  await cartPage.assertNoCoffeeMessageIsVisible();
});
