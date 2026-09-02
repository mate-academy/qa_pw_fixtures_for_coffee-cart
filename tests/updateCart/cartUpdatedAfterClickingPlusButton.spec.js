import { priceFormatStr, totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { COFFEE_PRICES } from '../../src/constants';
import { test } from '../fixtures/fixtures';

test('Assert cart updated correctly after clicking plus for drinks', async ({
  menuPage, cartPage
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(COFFEE_PRICES.espresso));

  await cartPage.clickAddOneEspressoButton();

  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr((COFFEE_PRICES.espresso * 2)));
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(COFFEE_PRICES.cappucino));

  await cartPage.clickAddOneCappuccinoButton();

  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(COFFEE_PRICES.cappucino * 2));
  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(COFFEE_PRICES.espresso * 2));

  await cartPage.assertTotalCheckoutContainsValue(priceFormatStr(COFFEE_PRICES.espresso * 2 + COFFEE_PRICES.cappucino * 2));
});
