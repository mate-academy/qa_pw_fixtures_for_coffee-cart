import { test } from '../_fixtures/fixtures';


test('Check Cappuccino removed from Cart after clicking remove button', async ({
  cartPage,
  menuPage
}) => {


  await menuPage.open();
  await menuPage.clickCappuccinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.clickRemoveAllCappuccinoButton();
  await cartPage.assertNoCoffeeMessageIsVisible();
});
