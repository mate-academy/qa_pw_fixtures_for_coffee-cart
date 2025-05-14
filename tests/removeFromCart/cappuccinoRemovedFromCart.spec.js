import { test } from '../_fixtures/fixtures';

test('Check Cappuccino removed from Cart after clicking remove button', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucсinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.clickRemoveAllCappucсinoButton();
  await cartPage.assertNoCoffeeMessageIsVisible();
});
