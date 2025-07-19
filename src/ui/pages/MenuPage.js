const { expect } = require('@playwright/test');

export class MenuPage {
  constructor(page) {
    this.page = page;
    this.cartLink = page.getByLabel('Cart page');
    this.totalCheckout = page.getByTestId('checkout');
    this.promoMessage = page.getByText(
      "It's your lucky day! Get an extra cup of Mocha for $4.",
    );
    this.yesPromoButton = page.getByRole('button', { name: 'Yes, of course!' });
    this.noPromoButton = page.getByRole('button', { name: "Nah, I'll skip." });
  }

  async open() {
    await this.page.goto('https://coffee-cart.app/');
  }

  findCoffeeCup(name) {
    return this.page.getByTestId(name);
  }

  async clickCoffeeCup(name) {
    await this.findCoffeeCup(name).click();
  }

  async getCoffeePrice(name) {
    return this.page
      .getByRole('listitem')
      .filter({ has: this.findCoffeeCup(name) })
      .locator('small')
      .first()
      .textContent();
  }

  async clickCartLink() {
    await this.cartLink.click();
  }

  async clickYesPromoButton() {
    await this.yesPromoButton.click();
  }

  async clickNoPromoButton() {
    await this.noPromoButton.click();
  }

  async assertTotalCheckoutContainsValue(value) {
    await expect(this.totalCheckout).toContainText(`Total: $${value}`);
  }

  async assertCoffeeCupCostHasValue(name, value) {
    return expect(
      this.page
        .getByRole('listitem')
        .filter({ has: this.findCoffeeCup(name) })
        .locator('small')
        .first(),
    ).toContainText(value);
  }

  async assertPromoMessageIsVisible() {
    await expect(this.promoMessage).toBeVisible();
  }

  async assertPromoMessageIsNotVisible() {
    await expect(this.promoMessage).not.toBeVisible();
  }
}
