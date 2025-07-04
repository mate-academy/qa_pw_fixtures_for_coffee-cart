import { test } from '../fixtures/fixtures';

test('Assert cart updated correctly after clicking minus for drinks', async ({
  cartPage,
  menuPage
}) => {


  await menuPage.open();
  await menuPage.clickCappuccinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoItemIsVisible();

  await cartPage.clickRemoveOneEspressoButton();

  await cartPage.assertEspressoItemIsHidden();
  await cartPage.assertCappuccinoItemIsVisible();

  await cartPage.clickRemoveOneCappuccinoButton();

  await cartPage.assertCappuccinoItemIsHidden();
  await cartPage.assertNoCoffeeMessageIsVisible();
});
