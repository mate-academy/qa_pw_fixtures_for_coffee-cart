import { test } from '../fixtures/fixtures.js';
import { COFFEE_PRICES } from '../../src/constants.js';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity.js';

test('Assert cart updated correctly after clicking plus for drinks', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  const espressoUnit = COFFEE_PRICES.espresso;
  const cappuccinoUnit = COFFEE_PRICES.cappuccino;

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(espressoUnit)
  );

  await cartPage.clickAddOneEspressoButton();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(espressoUnit * 2)
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(cappuccinoUnit)
  );

  await cartPage.clickAddOneCappuccinoButton();

  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(cappuccinoUnit * 2)
  );
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(espressoUnit * 2)
  );
  await cartPage.assertTotalCheckoutContainsValue(
    priceFormatStr(espressoUnit * 2 + cappuccinoUnit * 2)
  );
});
