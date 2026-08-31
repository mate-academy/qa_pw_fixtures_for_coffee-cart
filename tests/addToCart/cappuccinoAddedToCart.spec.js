import { test } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants';
import {
  unitPriceFormatStr,
  priceFormatStr,
} from '../../src/common/helpers/getPriceForQuantity';

test('Check Cappuccino correctly added to the Cart', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  const cappuccinoUnitPrice = COFFEE_PRICES.cappuccino;

  await cartPage.assertCappuccinoNameIsContainsCorrectText();
  await cartPage.assertCappuccinoUnitContainsCorrectText(
    unitPriceFormatStr(cappuccinoUnitPrice, 1),
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(cappuccinoUnitPrice),
  );
});
