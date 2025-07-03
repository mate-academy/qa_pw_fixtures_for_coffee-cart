import { test } from '../fixtures/fixtures';
import { 
  priceFormatStr
} from '../../src/common/helpers/getPriceForQuantity';
import { COFFEE_PRICES } from '../../src/constants';

test('Check Espresso correctly added to the Cart', async ({
   cartPage,
   menuPage 
}) => {

      
  await menuPage.open();
  await menuPage.clickEspressoCup();
  
  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoNameIsContainsCorrectText();
  await cartPage.assertEspressoUnitContainsCorrectText(
    `${priceFormatStr(COFFEE_PRICES.espresso)} x 1`
  );
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(COFFEE_PRICES.espresso)
  );
});