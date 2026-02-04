import { test } from '../fixtures/fixtures.js';

test('Check Cappuccino removed from Cart after clicking remove button', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.clickRemoveAllCappucinoButton();
  await cartPage.assertNoCoffeeMessageIsVisible();
});
