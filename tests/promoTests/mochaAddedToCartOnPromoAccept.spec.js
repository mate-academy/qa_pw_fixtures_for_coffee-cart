import { test } from '../fixtures/fixtures'
import { ESSPRESSO_COST } from '../../src/constants';
import { DISCOUNTED_MOCHA_COST } from '../../src/constants';
import { CAPPUCCINO_COST } from '../../src/constants';
import { AMERICANO_COST } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Assert discounted Mocha added to the Cart after promo accepting', async ({
  menuPage, cartPage
}) => {
  let espressoCostText = priceFormatStr(ESSPRESSO_COST);
  let discountedMochaText = priceFormatStr(DISCOUNTED_MOCHA_COST);
  let cappuccinoCostText = priceFormatStr(CAPPUCCINO_COST);
  let americanoCostText = priceFormatStr(AMERICANO_COST);

  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();
  await menuPage.clickAmericanoCup();

  await menuPage.assertPromoMessageIsVisible();

  await menuPage.clickYesPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(espressoCostText);
  await cartPage.assertDiscountedMochaTotalCostContainsCorrectText(
    discountedMochaText);
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    cappuccinoCostText);
  await cartPage.assertAmericanoTotalCostContainsCorrectText(americanoCostText);
});
