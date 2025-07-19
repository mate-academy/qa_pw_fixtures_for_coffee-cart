const { test, expect } = require('@playwright/test');

export class CartPage {
  constructor(page) {
    this.page = page;
    this.cartListRow = page.getByRole('listitem');
    this.emptyState = page.getByText('No coffee, go add some.');
    this.checkoutPrice = page.getByTestId('checkout');
  }

  async open() {
    await this.page.goto('https://coffee-cart.app/cart');
  }

  async waitForLoading() {
    await this.page.waitForURL('https://coffee-cart.app/cart');
  }

  async reload() {
    await this.page.reload();
  }

  async assertCoffeeIsVisible(coffeeName) {
    await expect(
      this.cartListRow.filter({ hasText: coffeeName }),
    ).toBeVisible();
  }

  async assertCoffeeIsNotVisible(coffeeName) {
    await expect(
      this.cartListRow.filter({ hasText: coffeeName }),
    ).not.toBeVisible();
  }

  async assertCoffeeNameContainsCorrectText(coffeeName, expectedText) {
    const field = await this.cartListRow
      .filter({ hasText: coffeeName })
      .locator('div')
      .nth(0);
    await expect(field).toContainText(expectedText);
  }

  async assertCoffeeUnitContainsCorrectText(coffeeName, expectedText) {
    const field = await this.cartListRow
      .filter({ hasText: coffeeName })
      .locator('div')
      .nth(1);
    await expect(field).toContainText(expectedText);
  }

  async assertCoffeeTotalCostContainsCorrectText(coffeeName, expectedText) {
    const field = await this.cartListRow
      .filter({ hasText: coffeeName })
      .locator('div')
      .nth(3);
    await expect(field).toContainText(expectedText);
  }

  async assertCoffeeRowIsCorrect(coffeeName, expected) {
    await test.step(`Check that ${coffeeName} row has correct information`, async () => {
      const row = await this.cartListRow

        .filter({ hasText: coffeeName })
        .locator('div');

      const nameField = row.nth(0);
      const unitPriceField = row.nth(1);
      const totalPriceField = row.nth(3);

      await expect(nameField).toContainText(coffeeName);
      await expect(unitPriceField).toContainText(expected.unitPriceFormatStr);
      await expect(totalPriceField).toContainText(expected.totalPriceFormatStr);
    });
  }

  async assertNoCoffeeMessageIsVisible() {
    await expect(this.emptyState).toBeVisible();
  }

  async assertCheckoutContainsText(totalText) {
    await test.step(`Check Total price`, async () => {
      await expect(this.checkoutPrice).toContainText(`Total: $${totalText}`);
    });
  }

  async clickRemoveAllCoffeeButton(coffeeName) {
    await this.page.getByLabel(`Remove all ${coffeeName}`).click();
  }

  async clickRemoveOneCoffeeButton(coffeeName) {
    return this.page
      .getByRole('button', { name: `Remove one ${coffeeName}` })
      .click();
  }

  async clickAddOneCoffeeButton(coffeeName) {
    return this.page
      .getByRole('button', { name: `Add one ${coffeeName}` })
      .click();
  }
}
