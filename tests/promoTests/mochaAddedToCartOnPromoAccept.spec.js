import { test } from '../fixtures/fixtures';
import { coffeeUnitPrices } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Assert discounted Mocha added to the Cart after promo accepting', 
  async ({
    cartPage,
    menuPage
  }) => {

  await menuPage.open();
  await menuPage.clickCappuccinoCup();
  await menuPage.clickEspressoCup();
  await menuPage.clickAmericanoCup();

  await menuPage.assertPromoMessageIsVisible();

  await menuPage.clickYesPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(coffeeUnitPrices.espresso)
  );
  await cartPage.assertDiscountedMochaTotalCostContainsCorrectText(
    priceFormatStr(coffeeUnitPrices.discountedMocha)
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(coffeeUnitPrices.cappuccino)
  );
  await cartPage.assertAmericanoTotalCostContainsCorrectText(
    priceFormatStr(coffeeUnitPrices.americano)
  );
});
