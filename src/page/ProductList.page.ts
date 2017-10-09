import { $, ElementFinder, promise } from 'protractor';

export class ProductListPage {
  private get tShirtProduct(): ElementFinder {
    return $('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img');
  }

  public goToTShirtProductDetail(): promise.Promise<void> {
    return this.tShirtProduct.click();
  }
}
