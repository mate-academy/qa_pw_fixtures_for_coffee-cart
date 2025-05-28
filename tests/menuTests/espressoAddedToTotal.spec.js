import { test } from '../_fixtures/fixtures';
import { price } from '../../src/constants';

test('Check Espresso cost is added to Total on menu page', async ({
  menuPage,
  priceFormatter,
}) => {
  await menuPage.open();
  await menuPage.clickEspressoCup();

  const totalValue = priceFormatter.totalPriceFormatStr(price.espresso);
  await menuPage.assertTotalCheckoutContainsValue(totalValue);
});
