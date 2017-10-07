import { $, ElementFinder, browser } from 'protractor';

export class ShippingStepPage {

  private get proceedToCheckoutButton(): ElementFinder {
    return $('#form > p > button > span');
  }

  private get termsCheckBox(): ElementFinder {
    return $('#cgv');
  }

  public async goToPaymentStepPage() {
    await this.termsCheckBox.click();
    await (browser.sleep(3000));
    return this.proceedToCheckoutButton.click();
  }
}
