import { test } from '../fixtures/fixtures';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
test('Assert discounted Mocha added to the Cart after promo accepting', async ({
  cartPage,
  menuPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();
  await menuPage.clickAmericanoCup();

  await menuPage.assertPromoMessageIsVisible();

  await menuPage.clickYesPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(10));
  await cartPage.assertDiscountedMochaTotalCostContainsCorrectText(
    priceFormatStr(4),
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(19),
  );
  await cartPage.assertAmericanoTotalCostContainsCorrectText(priceFormatStr(7));
});
