import { test } from "../fixtures/fixtures";
import { MenuPage } from '../../src/pages/MenuPage';
import { CartPage } from '../../src/pages/CartPage';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { coffeePrices } from '../../src/constants';

test('Assert discounted Mocha added to the Cart after promo accepting', async ({
  menuPage,
  cartPage
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();
  await menuPage.clickAmericanoCup();

  await menuPage.assertPromoMessageIsVisible();

  await menuPage.clickYesPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(coffeePrices.espresso));
  await cartPage.assertDiscountedMochaTotalCostContainsCorrectText(priceFormatStr(coffeePrices.discountedMocha));
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(coffeePrices.cappuccino));
  await cartPage.assertAmericanoTotalCostContainsCorrectText(priceFormatStr(coffeePrices.americano));
});
