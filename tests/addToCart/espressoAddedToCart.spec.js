import { test } from '../fixtures/fixtures';
import {MENU_ITEMS} from '../../src/constants';
import{
  getPriceForQuantity,
  unitPriceFormatStr,
  priceFormatStr
} from '../../src/common/helpers/getPriceForQuantity'

test('Check Espresso correctly added to the Cart', async ({ menuPage, cartPage }) => {
  await menuPage.open();
  await menuPage.clickEspressoCup();
  
  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoNameIsContainsCorrectText();
  await cartPage.assertEspressoUnitContainsCorrectText(unitPriceFormatStr(MENU_ITEMS['espresso'], 1));
  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(getPriceForQuantity('espresso', 1)));
});