import { expect, Page } from '@playwright/test';

export class SecureAreaPage {
  page: Page;
  successMessage;
  logoutButton;

  constructor(page: Page) {
    this.page = page;

    // Locators
    this.successMessage = page.locator('#flash');
    this.logoutButton = page.locator('a[href="/logout"]');
  }

  async verifyUserLoggedIn() {
    await expect(this.page).toHaveURL(/\/secure$/);
    await expect(this.successMessage).toBeVisible();
    await expect(this.successMessage).toContainText(
      'You logged into a secure area!'
    );
    await expect(this.logoutButton).toBeVisible();
  }

  async logout() {
    await this.logoutButton.click();
  }
}