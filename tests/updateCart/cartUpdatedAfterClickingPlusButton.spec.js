import { test } from '../fixtures/fixtures';
import { 
  totalPriceFormatStr,
  priceFormatStr,
  unitPriceFormatStr
} from '../../src/common/helpers/getPriceForQuantity';
import { COFFEE_PRICES } from '../../src/constants';

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
    priceFormatStr(COFFEE_PRICES.espresso)
  );

  await cartPage.clickAddOneEspressoButton();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    unitPriceFormatStr(COFFEE_PRICES.espresso, 2)
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(COFFEE_PRICES.cappuccino)
  );

  await cartPage.clickAddOneCappuccinoButton();

  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    unitPriceFormatStr(COFFEE_PRICES.cappuccino, 2)
  );
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    unitPriceFormatStr(COFFEE_PRICES.espresso, 2)
  );

  await cartPage.assertTotalCheckoutContainsValue(
    totalPriceFormatStr(
      (COFFEE_PRICES.cappuccino * 2) + 
      (COFFEE_PRICES.espresso * 2) 
    )
  );
});
