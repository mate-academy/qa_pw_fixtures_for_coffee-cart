import { test } from '../_fixtures/fixtures';
import { price } from '../../src/constants';

test('Check Cappuccino correctly added to the Cart', async ({
  cartPage,
  menuPage,
  priceFormatter,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCappuccinoNameIsContainsCorrectText();

  const expectedUnitPrice = priceFormatter.unitPriceFormatStr(
    price.cappucсino,
    1,
  );
  await cartPage.assertCappuccinoUnitContainsCorrectText(expectedUnitPrice);

  const expectedPrice = priceFormatter.priceFormatStr(price.cappucсino);
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(expectedPrice);
});
