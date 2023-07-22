import BasePage from '@pages/base';
import { Locator, Page } from '@playwright/test';

export default class CartPage extends BasePage {
  public backpack_item: Locator;
  public cart: Locator;
  public add_to_card: Locator;
  public checkout_button: Locator;
  public first_name_checkout_info: Locator;
  public last_name_checkout_info: Locator;
  public zip_code_checkout_info: Locator;
  public continue_button: Locator;
  public finish_button: Locator;
  public complete_container: Locator;

  constructor(page: Page) {
    super(page);
    this.setPage = page;
  }

  set setPage(page: Page) {
    this.page = page;
    this.cart = page.locator('[class="shopping_cart_link"]');
    this.add_to_card = page.locator('button[data-test*="add-to-cart"]');
    this.checkout_button = page.locator('[id="checkout"]');
    this.first_name_checkout_info = page.locator('[name="firstName"]');
    this.last_name_checkout_info = page.locator('[name="lastName"]');
    this.zip_code_checkout_info = page.locator('[name="postalCode"]');
    this.continue_button = page.locator('[name="continue"]');
    this.finish_button = page.locator('[id="finish"]');
    this.complete_container = page.locator('[id="checkout_complete_container"]');
  }

  async openCart() {
    await this.cart.click();
  }

  async goto(path = 'cart.html') {
    await super.goto(path);
  }

  async checkoutItem(firstName: string, lastName: string, zipCode: string) {
    await this.checkout_button.click();
    await this.first_name_checkout_info.fill(firstName);
    await this.last_name_checkout_info.fill(lastName);
    await this.zip_code_checkout_info.fill(zipCode);
    await this.continue_button.click();
    await this.finish_button.click();
  }
}
