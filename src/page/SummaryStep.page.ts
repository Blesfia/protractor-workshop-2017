import { $, ElementFinder, promise } from 'protractor';

export class SummaryStepPage {

  private get proceedToCheckoutButton(): ElementFinder {
    return $('.cart_navigation > a.standard-checkout');
  }

  public goToSignInPage(): promise.Promise<void> {
    return this.proceedToCheckoutButton.click();
  }
}
