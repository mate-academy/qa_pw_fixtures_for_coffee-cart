import { test } from '../fixtures/fixtures';
import { MenuPage } from '../../src/pages/MenuPage';
import { CartPage } from '../../src/pages/CartPage';
import { coffeePrices } from '../../src/constants';
import { unitPriceFormatStr,
         priceFormatStr,
         totalPriceFormatStr
        } from '../../src/common/helpers/getPriceForQuantity';

test('Check Cappuccino correctly added to the Cart', async ({ 
  menuPage,
  cartPage
}) => {

  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  const cappuccinoPrice = coffeePrices.cappucino;
  const cappuccinoUnits = 1;

  await cartPage.assertCappuccinoNameIsContainsCorrectText();
  await cartPage.assertCappuccinoUnitContainsCorrectText(
    unitPriceFormatStr(cappuccinoPrice, cappuccinoUnits)
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(cappuccinoPrice * cappuccinoUnits)
  );
});
