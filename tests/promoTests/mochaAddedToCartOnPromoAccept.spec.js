import { test } from '../fixtures/fixtures';
import{
  getPriceForQuantity,
  totalPriceFormatStr,
  priceFormatStr
} from '../../src/common/helpers/getPriceForQuantity'

test('Assert discounted Mocha added to the Cart after promo accepting', async ({
  menuPage,
  cartPage,
}) => {


  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();
  await menuPage.clickAmericanoCup();

  await menuPage.assertPromoMessageIsVisible();

  await menuPage.clickYesPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(getPriceForQuantity('espresso', 1)));
  await cartPage.assertDiscountedMochaTotalCostContainsCorrectText(priceFormatStr(getPriceForQuantity('mocha', 1)));
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(getPriceForQuantity('cappuccino', 1)));
  await cartPage.assertAmericanoTotalCostContainsCorrectText(priceFormatStr(getPriceForQuantity('americano', 1)));
});
  