import { APIRequestContext } from '@playwright/test';

export class PracticeApiClient {
  request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getHealthCheck() {
    return await this.request.get('/api/health-check');
  }

  async getInvalidEndpoint() {
    return await this.request.get('/api/endpoint-that-does-not-exist');
  }
}