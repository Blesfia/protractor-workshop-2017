import { $, ElementFinder, promise } from 'protractor';

export class ProductListPage {
  private get tShirtProduct(): ElementFinder {
    return $('#center_column > .product_list > li .product_img_link');
  }

  public goToTShirtProductDetail(): promise.Promise<void> {
    return this.tShirtProduct.click();
  }
}
