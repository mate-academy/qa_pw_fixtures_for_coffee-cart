import { test } from '../fixtures/fixtures';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { coffeePrices } from '../../src/constants';

test('Assert discounted Mocha added to the Cart after promo accepting', async ({
  menuPage, cartPage,
}) => {

  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();
  await menuPage.clickAmericanoCup();

  await menuPage.assertPromoMessageIsVisible();

  await menuPage.clickYesPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(
    coffeePrices.espresso));
  // eslint-disable-next-line max-len
  await cartPage.assertDiscountedMochaTotalCostContainsCorrectText(priceFormatStr(
    coffeePrices.latte));
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(
    coffeePrices.cappucino));
  await cartPage.assertAmericanoTotalCostContainsCorrectText(priceFormatStr(
    coffeePrices.milkshake));
});
