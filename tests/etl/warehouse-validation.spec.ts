import { expect, test } from '@playwright/test';
import { EtlDatabaseService } from '../../services/etlDatabaseService';

test.describe('ETL warehouse validation', () => {
  let etlDatabaseService: EtlDatabaseService;

  test.beforeEach(() => {
    etlDatabaseService = new EtlDatabaseService();
  });

  test.afterEach(async () => {
    await etlDatabaseService.closeConnections();
  });

  test('should load 30 customer dimension records', async () => {
    const customerCount =
      await etlDatabaseService.getCustomerCount();

    expect(customerCount).toBe(30);
  });

  test('should load 29 product dimension records', async () => {
    const productCount =
      await etlDatabaseService.getProductCount();

    expect(productCount).toBe(29);
  });

  test('should load 32 fact sales records', async () => {
    const factSalesCount =
      await etlDatabaseService.getFactSalesCount();

    expect(factSalesCount).toBe(32);
  });

  test('should not contain duplicate order IDs', async () => {
    const duplicateOrderCount =
      await etlDatabaseService.getDuplicateOrderCount();

    expect(duplicateOrderCount).toBe(0);
  });
});