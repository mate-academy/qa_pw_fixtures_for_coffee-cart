import { test } from '../fixtures/fixtures';
import { coffePrices } from '../../src/constants';
import {
  totalPriceFormatStr,
  priceFormatsStr,
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
    priceFormatsStr(coffePrices.espresso),
  );
  await cartPage.assertDiscountedMochaTotalCostContainsCorrectText(
    priceFormatsStr(coffePrices.discountedMocha),
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatsStr(coffePrices.cappucino),
  );
  await cartPage.assertAmericanoTotalCostContainsCorrectText(
    priceFormatsStr(coffePrices.americano),
  );
});
