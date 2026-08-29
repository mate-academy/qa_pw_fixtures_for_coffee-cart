import { test } from '../fixtures/fixtures';
import{
  getPriceForQuantity,
  totalPriceFormatStr,
  priceFormatStr
} from '../../src/common/helpers/getPriceForQuantity'

test('Assert cart updated correctly after clicking plus for drinks', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(getPriceForQuantity('espresso', 1)));

  await cartPage.clickAddOneEspressoButton();

  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(getPriceForQuantity('espresso', 2)));
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(getPriceForQuantity('cappuccino', 1)));

  await cartPage.clickAddOneCappuccinoButton();

  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(getPriceForQuantity('cappuccino', 2)));
  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(getPriceForQuantity('espresso', 2)));

  await cartPage.assertTotalCheckoutContainsValue(totalPriceFormatStr(getPriceForQuantity('cappuccino', 2) + getPriceForQuantity('espresso', 2)));
});
