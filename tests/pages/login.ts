import BasePage from '@pages/base';
import { Locator, Page } from '@playwright/test';

export default class LoginPage extends BasePage {
  readonly login_input: Locator;
  readonly password_input: Locator;
  readonly login_button: Locator;
  readonly burger_menu: Locator;
  readonly logout_button: Locator;

  constructor(page: Page) {
    super(page);
    this.login_input = this.page.locator('[placeholder="Username"]');
    this.password_input = this.page.locator('[placeholder="Password"]');
    this.login_button = this.page.locator('[id="login-button"]');
    this.burger_menu = this.page.locator('[id="react-burger-menu-btn"]');
    this.logout_button = this.page.locator('[id="logout_sidebar_link"]');
  }

  async login(login: string, password: string) {
    await this.login_input.fill(login);
    await this.password_input.fill(password);
    await this.login_button.click();
  }

  async logout() {
    await this.burger_menu.click();
    await this.logout_button.click();
  }

  async goto(path = ''): Promise<void> {
    await super.goto(path);
  }
}
