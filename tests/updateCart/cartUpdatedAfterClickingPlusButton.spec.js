import { test } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Assert cart updated correctly after clicking plus for drinks', async ({
  menuPage,
  cartPage,
}) => {
  const espressoUnitPrice = COFFEE_PRICES.espresso;
  const additionalEspressoPrice = espressoUnitPrice * 2;
  const cappuccinoUnitPrice = COFFEE_PRICES.cappuccino;
  const additionalCappuccinoPrice = cappuccinoUnitPrice * 2;
  const totalCheckoutPrice =
    additionalEspressoPrice + additionalCappuccinoPrice;
  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(espressoUnitPrice),
  );

  await cartPage.clickAddOneEspressoButton();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(additionalEspressoPrice),
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(cappuccinoUnitPrice),
  );

  await cartPage.clickAddOneCappuccinoButton();

  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(additionalCappuccinoPrice),
  );
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(additionalEspressoPrice),
  );

  await cartPage.assertTotalCheckoutContainsValue(
    priceFormatStr(totalCheckoutPrice),
  );
});
