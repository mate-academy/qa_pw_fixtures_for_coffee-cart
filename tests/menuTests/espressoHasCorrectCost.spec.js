import { test } from '../_fixtures/fixtures';
import { price } from '../../src/constants';

test('Check Espresso cup has correct cost', async ({
  menuPage,
  priceFormatter,
}) => {
  await menuPage.open();

  const espressoValue = priceFormatter.priceFormatStr(price.espresso);
  await menuPage.assertEspressoCupCostHasValue(espressoValue);
});
