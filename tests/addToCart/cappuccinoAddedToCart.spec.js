import { test } from '../fixtures/fixtures';
import {
  unitPriceFormatStr,
  priceFormatsStr,
} from '../../src/common/helpers/getPriceForQuantity';
import { coffePrices } from '../../src/constants';

test('Check Cappuccino correctly added to the Cart', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCappuccinoNameIsContainsCorrectText();
  await cartPage.assertCappuccinoUnitContainsCorrectText(
    unitPriceFormatStr(coffePrices.cappucino.toFixed(2), 1),
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatsStr(coffePrices.cappucino),
  );
});
