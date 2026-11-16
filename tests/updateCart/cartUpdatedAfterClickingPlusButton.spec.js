import { test } from '../fixtures/fixtures';
import { prices } from '../../src/constants';
import { 
  priceFormatStr,
  totalPriceFormatStr, 
  totalPrice
} 
from '../../src/common/helpers/getPriceForQuantity';

test('Assert cart updated correctly after clicking plus for drinks', async ({
  page,
  menuPage,
  cartPage
}) => {
  const cappuccinoPrice = prices.Cappuccino;
  const espressoPrice = prices.Espresso;

  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(espressoPrice));

  await cartPage.clickAddOneEspressoButton();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(totalPrice(espressoPrice, 2))
);

await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(cappuccinoPrice)
);

await cartPage.clickAddOneCappuccinoButton();

await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(totalPrice(cappuccinoPrice, 2))
);

await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(totalPrice(espressoPrice, 2))
);

  await cartPage.assertTotalCheckoutContainsValue(priceFormatStr(totalPrice(espressoPrice, 2) + totalPrice(cappuccinoPrice, 2)));
});
