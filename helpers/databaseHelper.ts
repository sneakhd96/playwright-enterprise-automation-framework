import mysql, {
  Pool,
  RowDataPacket,
  ResultSetHeader,
} from 'mysql2/promise';

type SqlParameter = string | number | boolean | Date | Buffer | null;

function requireEnvironmentVariable(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(
      `Missing required environment variable: ${name}. Check your .env file.`,
    );
  }

  return value;
}

export function createDatabasePool(database: string): Pool {
  return mysql.createPool({
    host: requireEnvironmentVariable('DB_HOST'),
    port: Number(process.env.DB_PORT ?? 3306),
    user: requireEnvironmentVariable('DB_USER'),
    password: requireEnvironmentVariable('DB_PASSWORD'),
    database,
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0,
  });
}

export async function queryRows<T extends RowDataPacket[]>(
  pool: Pool,
  sql: string,
  parameters: SqlParameter[] = [],
): Promise<T> {
  const [rows] = await pool.execute<T>(sql, parameters);
  return rows;
}

export async function executeStatement(
  pool: Pool,
  sql: string,
  parameters: SqlParameter[] = [],
): Promise<ResultSetHeader> {
  const [result] = await pool.execute<ResultSetHeader>(
    sql,
    parameters,
  );

  return result;
}