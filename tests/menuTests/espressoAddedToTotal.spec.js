import { test } from "../fixtures/fixtures";
import { MenuPage } from '../../src/pages/MenuPage';
import { totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { coffeePrices } from '../../src/constants';

test('Check Espresso cost is added to Total on menu page', async ({ menuPage }) => {
  await menuPage.open();
  await menuPage.clickEspressoCup();

  await menuPage.assertTotalCheckoutContainsValue(totalPriceFormatStr(coffeePrices.espresso));
});
