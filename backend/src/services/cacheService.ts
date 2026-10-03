import { cacheAdapter } from '../config/redis';
import { config } from '../config/env';

export interface CacheMetrics {
  totalRequests: number;
  redisHits: number;
  redisMisses: number;
  dedupCoalescedRequests: number;
  upstreamApiCalls: number;
  staleFallbacksServed: number;
  cacheAdapterType: 'redis' | 'memory';
}

export class CacheService {
  // In-flight Promise deduplication registry (Single-Flight pattern)
  private inFlightPromises = new Map<string, Promise<any>>();

  // Cache and deduplication performance metrics
  private metrics: CacheMetrics = {
    totalRequests: 0,
    redisHits: 0,
    redisMisses: 0,
    dedupCoalescedRequests: 0,
    upstreamApiCalls: 0,
    staleFallbacksServed: 0,
    cacheAdapterType: 'redis',
  };

  /**
   * getOrFetch:
   * 1. Check Redis cache. If hit, return immediately.
   * 2. If in-flight fetch exists for this exact key, COALESCE / DEDUPLICATE (wait for it).
   * 3. If cache miss and not in flight, trigger fetchFn once, store in Redis with TTL,
   *    and store in durable stale backup.
   * 4. If fetchFn fails (API down/rate limited), gracefully fall back to stale cache!
   */
  async getOrFetch<T>(
    key: string,
    ttlSeconds: number,
    fetchFn: () => Promise<T>
  ): Promise<{ data: T; source: 'cache' | 'upstream' | 'coalesced' | 'stale'; timestamp: number }> {
    this.metrics.totalRequests++;
    this.metrics.cacheAdapterType = cacheAdapter.type();

    // 1. Fast-path: Check primary Redis cache
    try {
      const cached = await cacheAdapter.get(key);
      if (cached) {
        this.metrics.redisHits++;
        const parsed = JSON.parse(cached);
        return {
          data: parsed.payload,
          source: 'cache',
          timestamp: parsed.timestamp || Date.now(),
        };
      }
    } catch (err: any) {
      console.warn(`[CacheService] Redis read error for ${key}: ${err.message}`);
    }

    // Cache Miss
    this.metrics.redisMisses++;

    // 2. Request Deduplication: check if another request is already fetching this key right now
    if (this.inFlightPromises.has(key)) {
      this.metrics.dedupCoalescedRequests++;
      // Await the exact same pending Promise
      const result = await this.inFlightPromises.get(key);
      return {
        data: result,
        source: 'coalesced',
        timestamp: Date.now(),
      };
    }

    // 3. Initiate single upstream request
    const pendingPromise = (async () => {
      this.metrics.upstreamApiCalls++;
      try {
        const freshData = await fetchFn();

        const cacheEnvelope = {
          payload: freshData,
          timestamp: Date.now(),
        };
        const serialized = JSON.stringify(cacheEnvelope);

        // Save with precise TTL (e.g. 30s for live, 60s for today, 300s for standings)
        await cacheAdapter.set(key, serialized, 'EX', ttlSeconds);

        // Also save to durable stale backup (24 hours) for resilience against API failures
        await cacheAdapter.set(`stale:${key}`, serialized, 'EX', 86400);

        return freshData;
      } catch (upstreamErr: any) {
        console.error(`[CacheService] Upstream fetch failed for ${key}: ${upstreamErr.message}`);

        // 4. Stale fallback: If Football-Data API fails or throttles, serve last known data
        const staleEnvelope = await cacheAdapter.get(`stale:${key}`);
        if (staleEnvelope) {
          this.metrics.staleFallbacksServed++;
          console.warn(`[CacheService] Successfully served stale fallback for key ${key}`);
          const parsed = JSON.parse(staleEnvelope);
          return parsed.payload;
        }

        // If no stale data is available either, rethrow
        throw upstreamErr;
      } finally {
        // Remove from in-flight registry once settled
        this.inFlightPromises.delete(key);
      }
    })();

    // Register into in-flight map
    this.inFlightPromises.set(key, pendingPromise);

    const freshResult = await pendingPromise;
    return {
      data: freshResult,
      source: 'upstream',
      timestamp: Date.now(),
    };
  }

  // Invalidate specific cache key
  async invalidate(key: string): Promise<void> {
    await cacheAdapter.del(key);
    await cacheAdapter.del(`stale:${key}`);
  }

  // Get current cache performance statistics
  getMetrics(): CacheMetrics & { hitRatio: string; dedupRatio: string; inFlightCount: number } {
    const hits = this.metrics.redisHits;
    const total = this.metrics.totalRequests || 1;
    const hitRatio = ((hits / total) * 100).toFixed(2) + '%';

    const coalesced = this.metrics.dedupCoalescedRequests;
    const dedupRatio = ((coalesced / total) * 100).toFixed(2) + '%';

    return {
      ...this.metrics,
      cacheAdapterType: cacheAdapter.type(),
      hitRatio,
      dedupRatio,
      inFlightCount: this.inFlightPromises.size,
    };
  }
}

export const cacheService = new CacheService();
