import { test } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/ui/constants/coffeePricesConstants';
import { totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Espresso cost is added to Total on menu page', async ({
  menuPage,
}) => {
  await menuPage.open();
  await menuPage.clickEspressoCup();

  await menuPage.assertTotalCheckoutContainsValue(
    totalPriceFormatStr(COFFEE_PRICES.espresso, 1),
  );
});
