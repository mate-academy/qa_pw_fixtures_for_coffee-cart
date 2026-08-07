import { test } from '../fixtures/fixtures';
import { PRICES } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Assert cart updated correctly after clicking plus for drinks', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  let espressoTotal = priceFormatStr(PRICES.espresso);
  await cartPage.assertEspressoTotalCostContainsCorrectText(espressoTotal);

  await cartPage.clickAddOneEspressoButton();

  espressoTotal = priceFormatStr(PRICES.espresso * 2);
  await cartPage.assertEspressoTotalCostContainsCorrectText(espressoTotal);

  let cappuccinoTotal = priceFormatStr(PRICES.cappuccino);
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(cappuccinoTotal);

  await cartPage.clickAddOneCappuccinoButton();

  cappuccinoTotal = priceFormatStr(PRICES.cappuccino * 2);

  await cartPage.assertCappuccinoTotalCostContainsCorrectText(cappuccinoTotal);
  await cartPage.assertEspressoTotalCostContainsCorrectText(espressoTotal);

  const total = PRICES.espresso * 2 + PRICES.cappuccino * 2;
  const totalCheckOut = priceFormatStr(total);
  await cartPage.assertTotalCheckoutContainsValue(totalCheckOut);
});
