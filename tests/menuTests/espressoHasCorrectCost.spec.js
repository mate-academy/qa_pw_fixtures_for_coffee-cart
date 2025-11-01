import { test } from "../fixtures/fixtures";
import { MenuPage } from '../../src/pages/MenuPage';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { coffeePrices } from '../../src/constants';

test('Check Espresso cup has correct cost', async ({ menuPage }) => {
  await menuPage.open();

  await menuPage.assertEspressoCupCostHasValue(priceFormatStr(coffeePrices.espresso));
});
