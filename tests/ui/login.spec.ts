import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { SecureAreaPage } from '../../pages/SecureAreaPage';
import { loginTestData } from '../../test-data/loginTestData';

test.describe('Login UI Tests', () => {
  test('should log in successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const secureAreaPage = new SecureAreaPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.verifyLoginPageDisplayed();
    await loginPage.login(
      loginTestData.validUser.username,
      loginTestData.validUser.password
    );

    await secureAreaPage.verifyUserLoggedIn();
  });

  test('should display an error for an invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.verifyLoginPageDisplayed();
    await loginPage.login(
      loginTestData.invalidPasswordUser.username,
      loginTestData.invalidPasswordUser.password
    );

    await loginPage.verifyErrorMessage(
      loginTestData.invalidPasswordUser.expectedError
    );
    await loginPage.verifyUserRemainsOnLoginPage();
  });
});