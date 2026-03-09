import { test } from '../fixtures/fixtures';
import { coffeeUnitPrices } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Cappuccino cup has correct cost', 
  async ({ 
    menuPage 
  }) => {

  await menuPage.open();

  await menuPage.assertCappuccinoCupCostHasValue(
    priceFormatStr(coffeeUnitPrices.cappuccino)
  );
});
