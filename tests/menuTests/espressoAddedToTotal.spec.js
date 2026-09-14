import { test } from '../fixtures/fixtures';
import { coffeePrices } from '../../src/constants';
import { totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Espresso cost is added to Total on menu page', async ({
  menuPage,
}) => {
  await menuPage.open();
  await menuPage.clickEspressoCup();

  await menuPage.assertTotalCheckoutContainsValue(
    totalPriceFormatStr(coffeePrices.espresso),
  );
});
