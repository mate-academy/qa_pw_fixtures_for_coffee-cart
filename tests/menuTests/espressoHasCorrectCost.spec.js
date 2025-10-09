import { test } from '../fixtures/fixtures';
import { MenuPage } from '../../src/pages/MenuPage';
import { coffeePrices } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Espresso cup has correct cost', async ({ menuPage }) => {
  await menuPage.open();

  const espressoPrice = coffeePrices.espresso;

  await menuPage.assertEspressoCupCostHasValue(
    priceFormatStr(espressoPrice)
  );
});
