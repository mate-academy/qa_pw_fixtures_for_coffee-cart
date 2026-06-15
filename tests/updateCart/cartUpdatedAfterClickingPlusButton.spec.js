import { test } from '../fixtures/fixtures';
import { coffeeTypes } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Assert cart updated correctly after clicking plus for drinks', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappuccinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(coffeeTypes.espresso),
  );

  await cartPage.clickAddOneEspressoButton();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(coffeeTypes.espresso * 2),
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(coffeeTypes.cappuccino),
  );

  await cartPage.clickAddOneCappuccinoButton();

  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(coffeeTypes.cappuccino * 2),
  );
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(coffeeTypes.espresso * 2),
  );

  await cartPage.assertTotalCheckoutContainsValue(
    priceFormatStr(coffeeTypes.espresso * 2 + coffeeTypes.cappuccino * 2),
  );
});
