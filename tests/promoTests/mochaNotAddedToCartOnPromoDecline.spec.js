import { test } from '../fixtures/fixtures';
import { MenuPage } from '../../src/pages/MenuPage';
import { CartPage } from '../../src/pages/CartPage';

test('Assert discounted Mocha added to the Cart after promo accepting', async ({
  page,menuPage, cartPage
}) => {


  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();
  await menuPage.clickAmericanoCup();

  await menuPage.assertPromoMessageIsVisible();
  await menuPage.clickNoPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoItemIsVisible();
  await cartPage.assertDiscountedMochaItemIsHidden();

  await cartPage.assertCappuccinoItemIsVisible();
  await cartPage.assertAmericanoItemIsVisible();
});
