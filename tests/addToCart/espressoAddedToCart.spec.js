import { test } from '../fixtures/fixtures';
import {
  unitPriceFormatStr,
  priceFormatStr
} from '../../src/common/helpers/getPriceForQuantity';
import { coffePrices } from '../../src/constants';

test('Check Espresso correctly added to the Cart', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoNameIsContainsCorrectText();
  await cartPage.assertEspressoUnitContainsCorrectText(
    unitPriceFormatStr(coffePrices.espresso, 1),
  );
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(coffePrices.espresso, 1),
  );
});
