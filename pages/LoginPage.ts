import { expect, Page } from '@playwright/test';

export class LoginPage {
  page: Page;
  pageHeading;
  usernameInput;
  passwordInput;
  loginButton;
  flashMessage;

  constructor(page: Page) {
    this.page = page;

    // Locators
    this.pageHeading = page.getByRole('heading', {
      name: 'Test Login page for Automation Testing Practice',
    });

    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#submit-login');
    this.flashMessage = page.locator('#flash');
  }

  async navigateToLoginPage() {
    await this.page.goto('/login');
  }

  async verifyLoginPageDisplayed() {
    await expect(this.pageHeading).toBeVisible();
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async verifyErrorMessage(expectedMessage: string) {
    await expect(this.flashMessage).toBeVisible();
    await expect(this.flashMessage).toContainText(expectedMessage);
  }

  async verifyUserRemainsOnLoginPage() {
    await expect(this.page).toHaveURL(/\/login$/);
  }
}