import { test } from '../_fixtures/fixtures';
import { price } from '../../src/constants';

test('Check Espresso correctly added to the Cart', async ({
  menuPage,
  cartPage,
  priceFormatter,
}) => {
  await menuPage.open();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoNameIsContainsCorrectText();

  const expectedUnitPrice = priceFormatter.unitPriceFormatStr(
    price.espresso,
    1,
  );
  await cartPage.assertEspressoUnitContainsCorrectText(expectedUnitPrice);

  const expectedPrice = priceFormatter.priceFormatStr(price.espresso);
  await cartPage.assertEspressoTotalCostContainsCorrectText(expectedPrice);
});
