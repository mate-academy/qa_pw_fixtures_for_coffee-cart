import { test } from '../fixtures/fixtures';
import { prices } from '../../src/constants';
import { 
  unitPriceFormatStr, 
  priceFormatStr, 
  totalPrice, 
  totalPriceFormatStr 
} from '../../src/common/helpers/getPriceForQuantity';

test('Check Cappuccino correctly added to the Cart', async ({ page, menuPage, cartPage }) => {
  const cappuccinoPrice = prices.Cappuccino;

  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCappuccinoNameIsContainsCorrectText();
  await cartPage.assertCappuccinoUnitContainsCorrectText(unitPriceFormatStr(cappuccinoPrice, 1));
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(cappuccinoPrice));
});
