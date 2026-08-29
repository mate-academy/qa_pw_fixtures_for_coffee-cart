import { test } from '../fixtures/fixtures';
import {MENU_ITEMS} from '../../src/constants';
import{
  getPriceForQuantity,
  unitPriceFormatStr,
  priceFormatStr
} from '../../src/common/helpers/getPriceForQuantity'

test('Check Cappuccino correctly added to the Cart', async ({ menuPage, cartPage }) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCappuccinoNameIsContainsCorrectText();
  await cartPage.assertCappuccinoUnitContainsCorrectText(unitPriceFormatStr(MENU_ITEMS['cappuccino'], 1));
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(getPriceForQuantity('cappuccino', 1)));
});
