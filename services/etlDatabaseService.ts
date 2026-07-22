import { Pool, RowDataPacket } from 'mysql2/promise';
import {
  createDatabasePool,
  queryRows,
} from '../helpers/databaseHelper';

interface DatabaseRow extends RowDataPacket {
  current_database: string;
}
interface CountRow extends RowDataPacket {
  record_count: number;
}
export class EtlDatabaseService {
  private readonly stagingPool: Pool;
  private readonly warehousePool: Pool;

  constructor() {
    const stagingDatabase = process.env.STAGING_DATABASE;
    const warehouseDatabase = process.env.WAREHOUSE_DATABASE;

    if (!stagingDatabase) {
      throw new Error(
        'STAGING_DATABASE is missing from the .env file.',
      );
    }

    if (!warehouseDatabase) {
      throw new Error(
        'WAREHOUSE_DATABASE is missing from the .env file.',
      );
    }

    this.stagingPool = createDatabasePool(stagingDatabase);
    this.warehousePool = createDatabasePool(warehouseDatabase);
  }

  async getCurrentStagingDatabase(): Promise<string> {
    const rows = await queryRows<DatabaseRow[]>(
      this.stagingPool,
      'SELECT DATABASE() AS current_database',
    );

    return rows[0].current_database;
  }

  async getCurrentWarehouseDatabase(): Promise<string> {
    const rows = await queryRows<DatabaseRow[]>(
      this.warehousePool,
      'SELECT DATABASE() AS current_database',
    );

    return rows[0].current_database;
  }
async getCustomerCount(): Promise<number> {
  const rows = await queryRows<CountRow[]>(
    this.warehousePool,
    `
      SELECT COUNT(*) AS record_count
      FROM dim_customer
    `,
  );

  return Number(rows[0].record_count);
}

async getProductCount(): Promise<number> {
  const rows = await queryRows<CountRow[]>(
    this.warehousePool,
    `
      SELECT COUNT(*) AS record_count
      FROM dim_product
    `,
  );

  return Number(rows[0].record_count);
}

async getFactSalesCount(): Promise<number> {
  const rows = await queryRows<CountRow[]>(
    this.warehousePool,
    `
      SELECT COUNT(*) AS record_count
      FROM fact_sales
    `,
  );

  return Number(rows[0].record_count);
}

async getDuplicateOrderCount(): Promise<number> {
  const rows = await queryRows<CountRow[]>(
    this.warehousePool,
    `
      SELECT COUNT(*) AS record_count
      FROM (
        SELECT order_id
        FROM fact_sales
        GROUP BY order_id
        HAVING COUNT(*) > 1
      ) AS duplicate_orders
    `,
  );

  return Number(rows[0].record_count);
}
  async closeConnections(): Promise<void> {
    await Promise.all([
      this.stagingPool.end(),
      this.warehousePool.end(),
    ]);
  }
}