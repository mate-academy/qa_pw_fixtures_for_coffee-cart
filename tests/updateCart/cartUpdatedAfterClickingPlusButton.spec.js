import { test } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants';
import {
  priceFormatStr,
  totalPriceFormatStr,
} from '../../src/common/helpers/getPriceForQuantity';

test('Assert cart updated correctly after clicking plus for drinks', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();

  await menuPage.clickCappucinoCup();
  const cappuccinoUnitPrice = COFFEE_PRICES.cappuccino;

  await menuPage.clickEspressoCup();
  const espressoUnitPrice = COFFEE_PRICES.espresso;

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(espressoUnitPrice),
  );
  await cartPage.clickAddOneEspressoButton();
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(espressoUnitPrice * 2),
  );

  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(cappuccinoUnitPrice),
  );
  await cartPage.clickAddOneCappuccinoButton();
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(cappuccinoUnitPrice * 2),
  );

  const totalSum = espressoUnitPrice * 2 + cappuccinoUnitPrice * 2;

  await cartPage.assertTotalCheckoutContainsValue(
    totalPriceFormatStr(totalSum, 1),
  );
});
