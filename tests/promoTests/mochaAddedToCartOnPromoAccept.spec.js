import { test } from '../fixtures/fixtures';
import { coffePrices } from '../../src/constants';
import {
  priceFormatStr,
} from '../../src/common/helpers/getPriceForQuantity';

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
    priceFormatStr(coffePrices.espresso),
  );
  await cartPage.assertDiscountedMochaTotalCostContainsCorrectText(
    priceFormatStr(coffePrices.discountedMocha),
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(coffePrices.cappucino),
  );
  await cartPage.assertAmericanoTotalCostContainsCorrectText(
    priceFormatStr(coffePrices.americano),
  );
});
