import { test, expect } from '@playwright/test';
import { PracticeApiClient } from '../../clients/PracticeApiClient';

test.describe('Practice API Tests', () => {
  test('should return a successful health-check response', async ({ request }) => {
    const apiClient = new PracticeApiClient(request);

    const response = await apiClient.getHealthCheck();

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
  });

  test('should return the expected health-check response body', async ({ request }) => {
    const apiClient = new PracticeApiClient(request);

    const response = await apiClient.getHealthCheck();
    const responseBody = await response.json();

    expect(response.status()).toBe(200);
    expect(responseBody).toBeDefined();
  });

  test('should return 404 for an invalid endpoint', async ({ request }) => {
    const apiClient = new PracticeApiClient(request);

    const response = await apiClient.getInvalidEndpoint();

    expect(response.status()).toBe(404);
    expect(response.ok()).toBeFalsy();
  });
});