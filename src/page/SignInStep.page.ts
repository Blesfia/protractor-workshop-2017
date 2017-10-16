import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private get emailTextBox(): ElementFinder {
    return $('#email');
  }
  private get passwordTextBox(): ElementFinder {
    return $('#passwd');
  }
  private get signInButton(): ElementFinder {
    return $('#SubmitLogin');
  }

  private async fillForm() {
    await this.emailTextBox.sendKeys('aperdomobo@gmail.com');
    await this.passwordTextBox.sendKeys('WorkshopProtractor');
  }
  public async goToAddressStep() {
    await this.fillForm();
    return this.signInButton.click();
  }
}
