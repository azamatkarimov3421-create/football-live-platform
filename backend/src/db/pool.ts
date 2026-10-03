import { Pool, PoolConfig } from 'pg';
import { config } from '../config/env';

const poolConfig: PoolConfig = {
  connectionString: config.databaseUrl,
  max: config.dbPoolMax, // up to 30-50 pooled clients for 10k users
  idleTimeoutMillis: config.dbIdleTimeoutMillis,
  connectionTimeoutMillis: config.dbConnectionTimeoutMillis,
  allowExitOnIdle: false,
};

export const pool = new Pool(poolConfig);

let isDbConnected = false;

// In-memory fallback for favorites & snapshots when PostgreSQL is disconnected
const inMemoryFavorites: Array<{
  id: number;
  device_id: string;
  item_type: string;
  item_id: string;
  item_name: string;
  metadata: any;
  created_at: Date;
}> = [];

let memoryIdSeq = 1;

export async function initDatabase(): Promise<boolean> {
  try {
    const client = await pool.connect();
    await client.query('SELECT 1');
    client.release();
    isDbConnected = true;
    console.log('✅ PostgreSQL connection pool initialized successfully.');

    // Auto-run schema migrations
    const fs = await import('fs');
    const path = await import('path');
    const schemaPath = path.resolve(__dirname, 'schema.sql');
    if (fs.existsSync(schemaPath)) {
      const sql = fs.readFileSync(schemaPath, 'utf8');
      await pool.query(sql);
      console.log('✅ PostgreSQL tables and indexes verified.');
    }
    return true;
  } catch (err: any) {
    isDbConnected = false;
    console.warn(`⚠️ PostgreSQL pool connection skipped (${err.message}). Using high-performance in-memory fallback for user favorites.`);
    return false;
  }
}

export function isDatabaseHealthy(): boolean {
  return isDbConnected;
}

// Database helper for favorites with dual-mode (PG or in-memory)
export const dbFavorites = {
  async list(deviceId: string, type?: string) {
    if (isDbConnected) {
      try {
        let query = 'SELECT * FROM favorites WHERE device_id = $1';
        const params: any[] = [deviceId];
        if (type) {
          query += ' AND item_type = $2';
          params.push(type);
        }
        query += ' ORDER BY created_at DESC';
        const res = await pool.query(query, params);
        return res.rows;
      } catch (err) {
        console.error('Error fetching favorites from DB:', err);
      }
    }
    return inMemoryFavorites.filter(
      (f) => f.device_id === deviceId && (!type || f.item_type === type)
    );
  },

  async add(deviceId: string, itemType: string, itemId: string, itemName: string, metadata: any = {}) {
    if (isDbConnected) {
      try {
        const query = `
          INSERT INTO favorites (device_id, item_type, item_id, item_name, metadata)
          VALUES ($1, $2, $3, $4, $5)
          ON CONFLICT (device_id, item_type, item_id) 
          DO UPDATE SET metadata = $5, item_name = $4
          RETURNING *;
        `;
        const res = await pool.query(query, [deviceId, itemType, itemId, itemName, JSON.stringify(metadata)]);
        return res.rows[0];
      } catch (err) {
        console.error('Error adding favorite to DB:', err);
      }
    }
    const existingIdx = inMemoryFavorites.findIndex(
      (f) => f.device_id === deviceId && f.item_type === itemType && f.item_id === itemId
    );
    const item = {
      id: existingIdx >= 0 ? inMemoryFavorites[existingIdx].id : memoryIdSeq++,
      device_id: deviceId,
      item_type: itemType,
      item_id: itemId,
      item_name: itemName,
      metadata,
      created_at: new Date(),
    };
    if (existingIdx >= 0) {
      inMemoryFavorites[existingIdx] = item;
    } else {
      inMemoryFavorites.push(item);
    }
    return item;
  },

  async remove(deviceId: string, itemType: string, itemId: string) {
    if (isDbConnected) {
      try {
        const query = 'DELETE FROM favorites WHERE device_id = $1 AND item_type = $2 AND item_id = $3';
        await pool.query(query, [deviceId, itemType, itemId]);
        return true;
      } catch (err) {
        console.error('Error removing favorite from DB:', err);
      }
    }
    const idx = inMemoryFavorites.findIndex(
      (f) => f.device_id === deviceId && f.item_type === itemType && f.item_id === itemId
    );
    if (idx >= 0) {
      inMemoryFavorites.splice(idx, 1);
      return true;
    }
    return false;
  },
};
