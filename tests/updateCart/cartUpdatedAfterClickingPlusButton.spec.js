import { test } from '../fixtures/fixtures'
import { coffePrices } from '../../src/constants';
import { priceFormatsStr, totalPriceFormatStr, unitPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Assert cart updated correctly after clicking plus for drinks', async ({
  menuPage, cartPage
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatsStr(coffePrices.espresso));

  await cartPage.clickAddOneEspressoButton();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatsStr(coffePrices.espresso * 2));
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatsStr(coffePrices.cappucino));

  await cartPage.clickAddOneCappuccinoButton();

  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
     priceFormatsStr(coffePrices.cappucino * 2));
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatsStr(coffePrices.espresso * 2));

  await cartPage.assertTotalCheckoutContainsValue(
    totalPriceFormatStr((coffePrices.espresso + coffePrices.cappucino) * 2));
});
