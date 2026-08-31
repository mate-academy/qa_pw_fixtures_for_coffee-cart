import { test } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants';
import {
  unitPriceFormatStr,
  priceFormatStr,
} from '../../src/common/helpers/getPriceForQuantity';

test('Check Espresso correctly added to the Cart', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  const espressoUnitPrice = COFFEE_PRICES.espresso;

  await cartPage.assertEspressoNameIsContainsCorrectText();
  await cartPage.assertEspressoUnitContainsCorrectText(
    unitPriceFormatStr(espressoUnitPrice, 1),
  );
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(espressoUnitPrice),
  );
});
