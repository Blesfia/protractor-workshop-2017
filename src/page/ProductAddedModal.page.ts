import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class ProductAddedModalPage {

  private get proceedToCheckoutButton(): ElementFinder {
    return $('[style*="display: block;"] .button-container > a');
  }

  public async goToCheckoutPage(): Promise<void> {
    await browser.wait(ExpectedConditions.presenceOf(this.proceedToCheckoutButton), 3000);
    return this.proceedToCheckoutButton.click();
  }
}
