import { test } from '../fixtures/fixtures';
import{
  getPriceForQuantity,
  totalPriceFormatStr
} from '../../src/common/helpers/getPriceForQuantity'

test('Check Espresso cost is added to Total on menu page', async ({ menuPage }) => {
  await menuPage.open();
  await menuPage.clickEspressoCup();

  await menuPage.assertTotalCheckoutContainsValue(totalPriceFormatStr(getPriceForQuantity('espresso', 1)));
});
