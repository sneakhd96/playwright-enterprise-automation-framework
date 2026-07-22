import { test, expect } from '@playwright/test';
import { EtlDatabaseService } from '../../services/etlDatabaseService';

test.describe('ETL Database Connection Validation', () => {
  let etlDatabaseService: EtlDatabaseService;

  test.beforeEach(() => {
    etlDatabaseService = new EtlDatabaseService();
  });

  test.afterEach(async () => {
    await etlDatabaseService.closeConnections();
  });

  test('Should connect to the staging database', async () => {
    const currentDatabase =
      await etlDatabaseService.getCurrentStagingDatabase();

    expect(currentDatabase).toBe('staging_db');
  });

  test('Should connect to the warehouse database', async () => {
    const currentDatabase =
      await etlDatabaseService.getCurrentWarehouseDatabase();

    expect(currentDatabase).toBe('dw_db');
  });
});