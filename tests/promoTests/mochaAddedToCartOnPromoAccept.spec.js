import { test } from '../_fixtures/fixtures';
import { price } from '../../src/constants';

test('Assert discounted Mocha added to the Cart after promo accepting', async ({
  menuPage,
  cartPage,
  priceFormatter,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();
  await menuPage.clickAmericanoCup();

  await menuPage.assertPromoMessageIsVisible();

  await menuPage.clickYesPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  const espressoValue = priceFormatter.priceFormatStr(price.espresso);
  await cartPage.assertEspressoTotalCostContainsCorrectText(espressoValue);

  const mochaValue = priceFormatter.priceFormatStr(price.mochaDiscount);
  await cartPage.assertDiscountedMochaTotalCostContainsCorrectText(mochaValue);

  const cappuccinoValue = priceFormatter.priceFormatStr(price.cappucсino);
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(cappuccinoValue);

  const americanoValue = priceFormatter.priceFormatStr(price.americano);
  await cartPage.assertAmericanoTotalCostContainsCorrectText(americanoValue);
});
