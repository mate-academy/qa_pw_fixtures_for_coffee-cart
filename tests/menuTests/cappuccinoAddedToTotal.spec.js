import { test } from '../fixtures/fixtures'
import { CAPPUCCINO_COST } from '../../src/constants';
import { totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Cappuccino cost is added to Total on menu page', async ({
  menuPage,
}) => {

  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.assertTotalCheckoutContainsValue(
    totalPriceFormatStr(CAPPUCCINO_COST));

});
