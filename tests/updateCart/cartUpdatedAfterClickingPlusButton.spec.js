import { test } from '../fixtures/Fixturess';
import { coffeePrices } from '../../src/pages/constants';
import { priceFormatStr } from '../../src/pages/common/helpers/getPriceForQuantity';

test('Assert cart updated correctly after clicking plus for drinks', async ({ cartPage, menuPage }) => {
  const cappuccinoPrice = coffeePrices.cappuccino;
  const espressoPrice = coffeePrices.espresso;

  const espresso1 = priceFormatStr(espressoPrice);
  const espresso2 = priceFormatStr(espressoPrice * 2);

  const cappuccino1 = priceFormatStr(cappuccinoPrice);
  const cappuccino2 = priceFormatStr(cappuccinoPrice * 2);

  const total = priceFormatStr(espressoPrice * 2 + cappuccinoPrice * 2);

  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(espresso1);

  await cartPage.clickAddOneEspressoButton();

  await cartPage.assertEspressoTotalCostContainsCorrectText(espresso2);
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(cappuccino1);

  await cartPage.clickAddOneCappuccinoButton();

  await cartPage.assertCappuccinoTotalCostContainsCorrectText(cappuccino2);
  await cartPage.assertEspressoTotalCostContainsCorrectText(espresso2);

  await cartPage.assertTotalCheckoutContainsValue(total);
});
