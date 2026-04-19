import { test } from '../fixtures/fixtures';
import { ESSPRESSO_COST } from '../../src/constants';
import { CAPPUCCINO_COST } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Assert cart updated correctly after clicking plus for drinks', async ({
  menuPage, cartPage
}) => {

  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(ESSPRESSO_COST));

  await cartPage.clickAddOneEspressoButton();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(ESSPRESSO_COST*2));
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(CAPPUCCINO_COST));

  await cartPage.clickAddOneCappuccinoButton();

  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(CAPPUCCINO_COST*2)
  );
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(ESSPRESSO_COST*2)
  );

  await cartPage.assertTotalCheckoutContainsValue(
    priceFormatStr((ESSPRESSO_COST*2)+(CAPPUCCINO_COST*2)));
});
