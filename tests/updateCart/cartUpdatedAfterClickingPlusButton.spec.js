import { test } from '../fixtures/fixtures';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { coffeePrices } from '../../src/constants';

test('Assert cart updated correctly after clicking plus for drinks', async ({
  cartPage, menuPage,
}) => {

  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(
    coffeePrices.espresso));

  await cartPage.clickAddOneEspressoButton();

  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(
    coffeePrices.doubleespresso));
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(
    coffeePrices.cappuccino));

  await cartPage.clickAddOneCappuccinoButton();

  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(
    coffeePrices.triplecappucino));
  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(
    coffeePrices.doubleespresso));

  await cartPage.assertTotalCheckoutContainsValue(priceFormatStr(
    coffeePrices.allIn));
});
