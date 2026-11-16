import { test } from '../fixtures/fixtures';
import { prices } from '../../src/constants';
import { priceFormatStr } 
from '../../src/common/helpers/getPriceForQuantity';

test('Assert discounted Mocha added to the Cart after promo accepting', async ({
  page,
  menuPage,
  cartPage
}) => {
  const espressoPrice = prices.Espresso;
  const cappuccinoPrice = prices.Cappuccino;
  const mochaDiscountPrice = prices['Mocha Discount'];
  const americanoPrice = prices.Americano;

  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();
  await menuPage.clickAmericanoCup();

  await menuPage.assertPromoMessageIsVisible();

  await menuPage.clickYesPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(espressoPrice));
  await cartPage.assertDiscountedMochaTotalCostContainsCorrectText(priceFormatStr(mochaDiscountPrice));
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(cappuccinoPrice));
  await cartPage.assertAmericanoTotalCostContainsCorrectText(priceFormatStr(americanoPrice));
});
