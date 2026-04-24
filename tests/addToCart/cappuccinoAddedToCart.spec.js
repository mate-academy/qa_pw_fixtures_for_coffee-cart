import { test } from '../fixtures/fixtures';
import {priceObject} from '../../src/constants'
import { priceFormatStr, unitPriceFormatStr} from '../../src/common/helpers/getPriceForQuantity';

test('Check Cappuccino correctly added to the Cart', async ({ menuPage, cartPage }) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCappuccinoNameIsContainsCorrectText();
  await cartPage.assertCappuccinoUnitContainsCorrectText(unitPriceFormatStr(priceObject.Cappuccino, 1));
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(priceObject.Cappuccino));
});
