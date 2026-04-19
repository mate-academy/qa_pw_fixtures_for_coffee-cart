import { test } from '../fixtures/fixtures';
import { CAPPUCCINO_COST } from '../../src/constants';
import { priceFormatStr, unitPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Cappuccino correctly added to the Cart', async ({ 
  menuPage, cartPage
 }) => {

  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCappuccinoNameIsContainsCorrectText();
  await cartPage.assertCappuccinoUnitContainsCorrectText(
    unitPriceFormatStr(CAPPUCCINO_COST, 1)
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(CAPPUCCINO_COST)
  );
});
