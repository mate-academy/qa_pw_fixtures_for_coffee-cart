import { test } from '../_fixtures/fixtures';
import { 
  priceFormatStr
} from '../../src/common/helpers/getPriceForQuantity';
import { COFFEE_PRICES } from '../../src/constants';

const CAPPUCCINO_PRICE_X1 = `${priceFormatStr(COFFEE_PRICES.cappuccino)} x 1`

test('Check Cappuccino correctly added to the Cart', async ({ 
  cartPage,
  menuPage
 }) => {


  await menuPage.open();
  await menuPage.clickCappuccinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCappuccinoNameIsContainsCorrectText();
  await cartPage.assertCappuccinoUnitContainsCorrectText(CAPPUCCINO_PRICE_X1);
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(COFFEE_PRICES.cappuccino)
  );
});
