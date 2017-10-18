import { browser } from 'protractor';
import { 
  MenuContentPage,
  ProductListPage,
  ProductDetailPage, 
  ProductAddedModalPage,
  SummaryStepPage,
  SignInStepPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
  BankPaymentPage,
  OrderResumePage
} from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productDetailPage: ProductDetailPage = new ProductDetailPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderResumePage: OrderResumePage = new OrderResumePage();

  describe('Abrir la página en el navegador', () => {
    it('', async () => {
      await browser.get('http://automationpractice.com/');
    });
  });
  describe('Proceso de compra de la Camiseta', () => {
    it('', async () => {
      await menuContentPage.goToTShirtMenu();
      await productListPage.goToTShirtProductDetail();
      await productDetailPage.addToCart();
      await productAddedModalPage.goToCheckoutPage();
      await summaryStepPage.goToSignInPage();
    });
  });
  describe('Logeo en la aplicación', () => {
    it('', async () => {
      await signInStepPage.goToAddressStep();
    });
  });
  describe('Seleccionar la dirección por defecto', () => {
    it('', async () => {
      await addressStepPage.goToShippingStepPage();
    });
  });
  describe('Pago en el banco', () => {
    it('', async () => {
      await shippingStepPage.goToPaymentStepPage();
      await paymentStepPage.goToCheckPaymentStepPage();
      await bankPaymentPage.goToOrderResumePage();
  
      await expect(orderResumePage.getMessageOfAccomplish())
        .toBe('Your order on My Store is complete.');
    });
  });
});
