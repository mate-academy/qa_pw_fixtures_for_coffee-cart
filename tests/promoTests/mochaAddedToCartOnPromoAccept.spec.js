import { test } from '../fixtures/fixtures';
import { PRICES } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

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

  const espressoCost = priceFormatStr(PRICES.espresso);
  const cappuccinoCost = priceFormatStr(PRICES.cappuccino);
  const americanoCost = priceFormatStr(PRICES.americano);
  const discountedMochaCost = priceFormatStr(PRICES.discounted_mocha);
  await cartPage.assertEspressoTotalCostContainsCorrectText(espressoCost);
  await cartPage.assertDiscountedMochaTotalCostContainsCorrectText(
    discountedMochaCost,
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(cappuccinoCost);
  await cartPage.assertAmericanoTotalCostContainsCorrectText(americanoCost);
});
