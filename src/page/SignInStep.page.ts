import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private get emailTextBox(): ElementFinder {
    return $('#email');
  }
  private get passwordTextBox(): ElementFinder {
    return $('#passwd');
  }
  private get signInButton(): ElementFinder {
    return $('#SubmitLogin > span');
  }

  public async goToAddressStep(): Promise<void> {
    await this.emailTextBox.sendKeys('aperdomobo@gmail.com');
    await this.passwordTextBox.sendKeys('WorkshopProtractor');
    await this.signInButton.click();
  }
}
