import { test } from '../fixtures/fixtures'
import { coffePrices } from '../../src/constants';
import { priceFormatStr, totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Assert cart updated correctly after clicking plus for drinks', async ({
  menuPage, cartPage
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(coffePrices.espresso));

  await cartPage.clickAddOneEspressoButton();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(coffePrices.espresso * 2));
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(coffePrices.cappucino));

  await cartPage.clickAddOneCappuccinoButton();

  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
     priceFormatStr(coffePrices.cappucino * 2));
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(coffePrices.espresso * 2));

  await cartPage.assertTotalCheckoutContainsValue(
    totalPriceFormatStr((coffePrices.espresso + coffePrices.cappucino) * 2));
});
