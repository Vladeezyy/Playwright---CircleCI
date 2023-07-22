import { test, expect } from '@fixtures/basePages';
import { configuration } from 'env/config';

test.describe('SauseDemo. Autorithation', () => {
  test('Log in with standard user.', async ({ loginPage }) => {
    await test.step('Go to login page', async () => {
      await loginPage.goto();
    });
    await test.step('Log in', async () => {
      await loginPage.login(configuration.STANDATD_USER, configuration.USER_PASSWORD);
      await expect(loginPage.page).toHaveURL('/inventory.html');
    });
  });

  test('Log out.', async ({ loginPage, baseURL }) => {
    await test.step('Go to login page', async () => {
      await loginPage.goto();
    });
    await test.step('Log in', async () => {
      await loginPage.login(configuration.STANDATD_USER, configuration.USER_PASSWORD);
      await expect(loginPage.page).toHaveURL('/inventory.html');
    });
    await test.step('Log out', async () => {
      await loginPage.logout();
      await expect(loginPage.page).toHaveURL(baseURL);
    });
  });
});
