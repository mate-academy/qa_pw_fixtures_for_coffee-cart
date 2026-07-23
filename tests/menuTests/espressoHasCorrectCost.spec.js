import { test } from '../fixtures/fixtures';
import { coffeePrices } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Espresso cup has correct cost', async ({ menuPage }) => {

  await menuPage.open();

  await menuPage.assertEspressoCupCostHasValue(
    priceFormatStr(coffeePrices.espresso));
});
