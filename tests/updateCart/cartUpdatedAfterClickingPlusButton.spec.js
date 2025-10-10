import { test } from '../fixtures/fixtures';
import { coffeePrices } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Assert cart updated correctly after clicking plus for drinks', async ({
  menuPage,
  cartPage
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  const espressoPrice = coffeePrices.espresso;
  const cappuccinoPrice = coffeePrices.cappucino;
  const doubleEspressoPrice = espressoPrice * 2;
  const doubleCapuccinoPrice = cappuccinoPrice * 2;

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(espressoPrice)
  );

  await cartPage.clickAddOneEspressoButton();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(doubleEspressoPrice)
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(cappuccinoPrice)
  );

  await cartPage.clickAddOneCappuccinoButton();

  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(doubleCapuccinoPrice)
  );
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(doubleEspressoPrice)
  );

  await cartPage.assertTotalCheckoutContainsValue(
    priceFormatStr(doubleEspressoPrice + doubleCapuccinoPrice)
  );
});
