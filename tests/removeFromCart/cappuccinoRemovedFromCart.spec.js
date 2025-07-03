import { test } from '../fixtures/fixtures';


test('Check Cappuccino removed from Cart after clicking remove button', async ({
  cartPage,
  menuPage
}) => {


  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.clickRemoveAllCappucinoButton();
  await cartPage.assertNoCoffeeMessageIsVisible();
});
