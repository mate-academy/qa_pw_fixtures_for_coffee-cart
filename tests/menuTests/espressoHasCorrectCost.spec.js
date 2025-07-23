import { test } from '../fixtures/fixtures';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { coffeePrices } from '../../src/constants';

test('Check Espresso cup has correct cost', async ({ menuPage }) => {

  await menuPage.open();

  // eslint-disable-next-line max-len
  await menuPage.assertEspressoCupCostHasValue(priceFormatStr(coffeePrices.espresso));
});
