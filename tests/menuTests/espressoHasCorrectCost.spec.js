import { test } from '../fixtures/fixtures';
import { coffePrices } from '../../src/constants';
import { priceFormatsStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Espresso cup has correct cost', async ({ menuPage }) => {
  await menuPage.open();

  await menuPage.assertEspressoCupCostHasValue(
    priceFormatsStr(coffePrices.espresso),
  );
});
