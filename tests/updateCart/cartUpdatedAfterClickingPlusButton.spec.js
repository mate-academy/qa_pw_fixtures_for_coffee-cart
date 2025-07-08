/* eslint-disable max-len */
import { test } from '../fixtures/fixtures'; // extended test with fixtures
import { COFFEE_PRICES } from '../../src/constants';
import { priceFormatStr} from '../../src/common/helpers/getPriceForQuantity';

test('Assert cart updated correctly after clicking plus for drinks', async ({ menuPage, cartPage }) => {
  const espressoPrice = COFFEE_PRICES.espresso;
  const cappuccinoPrice = COFFEE_PRICES.cappuccino;

  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  // Espresso total after 1 item
  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(espressoPrice));

  // Click to add 1 more espresso → total 2
  await cartPage.clickAddOneEspressoButton();
  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(espressoPrice * 2));

  // Cappuccino still 1 item
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(cappuccinoPrice));

  // Add one more cappuccino → total 2
  await cartPage.clickAddOneCappuccinoButton();
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(cappuccinoPrice * 2));

  // Final total: 2x espresso + 2x cappuccino
  const expectedTotal = priceFormatStr(espressoPrice * 2 + cappuccinoPrice * 2);
  await cartPage.assertTotalCheckoutContainsValue(expectedTotal);
});
