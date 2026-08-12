import { test } from '../fixtures/fixtures';
import { MenuPage } from '../../src/pages/MenuPage';
import { COFFEE_PRICES } from '../../src/constants';  
import { unitPriceFormatStr, priceFormatStr, totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity'; 


test('Check Espresso cup has correct cost', async ({ page, menuPage }) => {

  await menuPage.open();

  await menuPage.assertEspressoCupCostHasValue(priceFormatStr(COFFEE_PRICES.ESPRESSO_PRICE, 1));
});
