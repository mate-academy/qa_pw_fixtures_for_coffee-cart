import { test } from '../fixtures/fixtures';
import { 
  priceFormatStr
} from '../../src/common/helpers/getPriceForQuantity';
import { COFFEE_PRICES } from '../../src/constants';

test('Check Cappuccino correctly added to the Cart', async ({ 
  cartPage,
  menuPage
 }) => {


  await menuPage.open();
  await menuPage.clickCappuccinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCappuccinoNameIsContainsCorrectText();
  await cartPage.assertCappuccinoUnitContainsCorrectText(
    `${priceFormatStr(COFFEE_PRICES.cappuccino)} x 1`
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(COFFEE_PRICES.cappuccino)
  );
});
