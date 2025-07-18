import { test } from '../_fixtures/fixtures';

test('Check Cappuccino correctly added to the Cart', async ({
  menuPage,
  cartPage,
  coffeeCatalog,
  getFormattedPrice,
}) => {
  await menuPage.open();
  await menuPage.clickCoffeeCup(coffeeCatalog.cappuccino.name);

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  const cup = getFormattedPrice('cappuccino', 1);

  await cartPage.assertCappuccinoNameIsContainsCorrectText();
  await cartPage.assertCappuccinoUnitContainsCorrectText(
    cup.unitPriceFormatStr,
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    cup.totalPriceFormatStr,
  );
});
