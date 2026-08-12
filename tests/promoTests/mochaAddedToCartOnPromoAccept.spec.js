import { test } from '../fixtures/fixtures';
import { MenuPage } from '../../src/pages/MenuPage';
import { CartPage } from '../../src/pages/CartPage';
import { COFFEE_PRICES } from '../../src/constants';  
import { unitPriceFormatStr, priceFormatStr, totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Assert discounted Mocha added to the Cart after promo accepting', async ({
  page,menuPage, cartPage
}) => {

  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();
  await menuPage.clickAmericanoCup();

  await menuPage.assertPromoMessageIsVisible();

  await menuPage.clickYesPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(COFFEE_PRICES.ESPRESSO_PRICE));
  await cartPage.assertDiscountedMochaTotalCostContainsCorrectText(priceFormatStr(COFFEE_PRICES.DISCOUNTED_MOCHA_PRICE));
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(COFFEE_PRICES.CAPPUCCINO_PRICE));
  await cartPage.assertAmericanoTotalCostContainsCorrectText(priceFormatStr(COFFEE_PRICES.AMERICANO_PRICE));
});
