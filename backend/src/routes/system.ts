import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { cacheService } from '../services/cacheService';
import { isDatabaseHealthy } from '../db/pool';
import { cacheAdapter } from '../config/redis';
import { footballApiService } from '../services/footballApi';
import { config } from '../config/env';

export async function systemRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  // Health check endpoint for Cloudflare / Docker / Load Balancers
  fastify.get('/health', async (req, reply) => {
    return {
      status: 'UP',
      timestamp: new Date().toISOString(),
      service: 'football-backend',
      redis: cacheAdapter.type(),
      database: isDatabaseHealthy() ? 'connected' : 'memory_fallback',
    };
  });

  // Metrics endpoint to monitor 10,000 concurrency behavior
  fastify.get('/system/metrics', async (req, reply) => {
    const memory = process.memoryUsage();
    return {
      success: true,
      timestamp: Date.now(),
      metrics: {
        cache: cacheService.getMetrics(),
        process: {
          uptimeSeconds: Math.floor(process.uptime()),
          memoryRssMb: (memory.rss / (1024 * 1024)).toFixed(2),
          heapUsedMb: (memory.heapUsed / (1024 * 1024)).toFixed(2),
          heapTotalMb: (memory.heapTotal / (1024 * 1024)).toFixed(2),
        },
        database: {
          type: 'PostgreSQL Pool',
          status: isDatabaseHealthy() ? 'healthy' : 'memory_fallback',
          poolMax: config.dbPoolMax,
        },
        upstreamApi: {
          provider: 'Football-Data.org',
          configured: config.footballApiKey !== 'YOUR_TOKEN_HERE',
          timeoutMs: config.upstreamTimeoutMs,
        },
      },
    };
  });

  /**
   * POST /api/system/simulate-load
   * Simulates N concurrent requests arriving at the exact same millisecond.
   * Proves that single-flight coalescing stops 10,000 requests from hitting Football API!
   */
  fastify.post<{
    Body: { concurrency?: number };
  }>('/system/simulate-load', async (req, reply) => {
    const count = Math.min(Math.max(req.body?.concurrency || 1000, 10), 10000);
    const startTime = Date.now();

    // Invalidate live cache first to test stampede scenario
    await cacheService.invalidate('matches:live');

    // Launch `count` promises in parallel concurrently
    const promises = Array.from({ length: count }, () =>
      cacheService.getOrFetch('matches:live', config.cacheTTL.live, () =>
        footballApiService.getLiveMatches()
      )
    );

    const results = await Promise.all(promises);
    const durationMs = Date.now() - startTime;

    const sourceStats = results.reduce(
      (acc: any, curr) => {
        acc[curr.source] = (acc[curr.source] || 0) + 1;
        return acc;
      },
      { upstream: 0, coalesced: 0, cache: 0, stale: 0 }
    );

    return {
      success: true,
      simulatedConcurrentRequests: count,
      durationMs,
      requestsPerSecond: Math.round((count / (durationMs || 1)) * 1000),
      sourceDistribution: sourceStats,
      stampedePrevented: sourceStats.upstream <= 1,
      message: `Simulated ${count} simultaneous requests. Upstream API calls: ${sourceStats.upstream}. Deduplicated/Coalesced: ${sourceStats.coalesced + sourceStats.cache}.`,
    };
  });
}
