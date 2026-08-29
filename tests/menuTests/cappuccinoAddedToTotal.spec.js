import { test } from '../fixtures/fixtures';
import{
  getPriceForQuantity,
  totalPriceFormatStr
} from '../../src/common/helpers/getPriceForQuantity'

test('Check Cappuccino cost is added to Total on menu page', async ({
  menuPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.assertTotalCheckoutContainsValue(totalPriceFormatStr(getPriceForQuantity('cappuccino', 1)));
});
