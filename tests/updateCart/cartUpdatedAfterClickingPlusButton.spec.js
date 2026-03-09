import { test } from '../fixtures/fixtures';
import { coffeeUnitPrices } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Assert cart updated correctly after clicking plus for drinks', async ({
  cartPage,
  menuPage
}) => {

  await menuPage.open();
  await menuPage.clickCappuccinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(coffeeUnitPrices.espresso)
  );

  await cartPage.clickAddOneEspressoButton();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(coffeeUnitPrices.espresso * 2)
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(coffeeUnitPrices.cappuccino)
  );

  await cartPage.clickAddOneCappuccinoButton();

  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(coffeeUnitPrices.cappuccino * 2)
  );
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(coffeeUnitPrices.espresso * 2)
  );

  await cartPage.assertTotalCheckoutContainsValue(
    priceFormatStr(
      coffeeUnitPrices.espresso * 2
      +
      coffeeUnitPrices.cappuccino * 2
    )
  );
});
