import { Page } from '@playwright/test';

export default class BasePage {
  public page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async goto(path: string, ...args) {
    await this.page.goto(`/${path}`);
  }
}
