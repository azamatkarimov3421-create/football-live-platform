import Redis from 'ioredis';
import { config } from './env';

export interface CacheAdapter {
  get(key: string): Promise<string | null>;
  set(key: string, value: string, mode?: string, duration?: number): Promise<'OK' | null>;
  del(key: string): Promise<number>;
  isReady(): boolean;
  type(): 'redis' | 'memory';
}

// In-memory fallback if Redis is not running or unreachable
class InMemoryCache implements CacheAdapter {
  private store = new Map<string, { value: string; expiresAt: number | null }>();

  async get(key: string): Promise<string | null> {
    const item = this.store.get(key);
    if (!item) return null;
    if (item.expiresAt !== null && Date.now() > item.expiresAt) {
      this.store.delete(key);
      return null;
    }
    return item.value;
  }

  async set(key: string, value: string, mode?: string, duration?: number): Promise<'OK'> {
    let expiresAt: number | null = null;
    if (mode === 'EX' && duration) {
      expiresAt = Date.now() + duration * 1000;
    }
    this.store.set(key, { value, expiresAt });
    return 'OK';
  }

  async del(key: string): Promise<number> {
    const existed = this.store.delete(key);
    return existed ? 1 : 0;
  }

  isReady(): boolean {
    return true;
  }

  type(): 'memory' {
    return 'memory';
  }
}

class RedisCache implements CacheAdapter {
  private client: Redis | null = null;
  private connected = false;
  private memoryFallback = new InMemoryCache();

  constructor() {
    try {
      this.client = new Redis(config.redisUrl, {
        maxRetriesPerRequest: 0,
        connectTimeout: 1000,
        enableOfflineQueue: false,
        enableReadyCheck: true,
        lazyConnect: true,
        retryStrategy: () => null, // Do not retry indefinitely if Redis is not present locally
      });

      this.client.on('connect', () => {
        this.connected = true;
        console.log('✅ Connected to Redis cache service.');
      });

      this.client.on('error', (err) => {
        this.connected = false;
        // Suppress repeated spam logs if Redis is intentionally offline in local dev
      });

      // Attempt async connection
      this.client.connect().catch((err) => {
        this.connected = false;
        console.warn(`⚠️ Redis server connection deferred (${err.message}). High-speed memory cache active.`);
      });
    } catch (err: any) {
      this.connected = false;
      console.warn(`⚠️ Redis init skipped: ${err.message}. Using high-speed memory cache.`);
    }
  }

  async get(key: string): Promise<string | null> {
    if (this.connected && this.client) {
      try {
        return await this.client.get(key);
      } catch (err) {
        return await this.memoryFallback.get(key);
      }
    }
    return await this.memoryFallback.get(key);
  }

  async set(key: string, value: string, mode?: string, duration?: number): Promise<'OK' | null> {
    // Keep in-memory in sync for instantaneous fallback
    await this.memoryFallback.set(key, value, mode, duration);

    if (this.connected && this.client) {
      try {
        if (mode === 'EX' && duration) {
          return await this.client.set(key, value, 'EX', duration);
        }
        return await this.client.set(key, value);
      } catch (err) {
        return 'OK';
      }
    }
    return 'OK';
  }

  async del(key: string): Promise<number> {
    await this.memoryFallback.del(key);
    if (this.connected && this.client) {
      try {
        return await this.client.del(key);
      } catch {
        return 1;
      }
    }
    return 1;
  }

  isReady(): boolean {
    return this.connected;
  }

  type(): 'redis' | 'memory' {
    return this.connected ? 'redis' : 'memory';
  }
}

export const cacheAdapter: CacheAdapter = new RedisCache();
