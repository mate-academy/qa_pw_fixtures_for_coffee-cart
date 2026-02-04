import { test } from '../fixtures/fixtures.js';
import { COFFEE_PRICES } from '../../src/constants.js';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity.js';

test('Assert discounted Mocha added to the Cart after promo accepting', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();
  await menuPage.clickAmericanoCup();

  await menuPage.assertPromoMessageIsVisible();

  await menuPage.clickYesPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(COFFEE_PRICES.espresso)
  );
  await cartPage.assertDiscountedMochaTotalCostContainsCorrectText(
    priceFormatStr(COFFEE_PRICES.mochaDiscounted)
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(COFFEE_PRICES.cappuccino)
  );
  await cartPage.assertAmericanoTotalCostContainsCorrectText(
    priceFormatStr(COFFEE_PRICES.americano)
  );
});
