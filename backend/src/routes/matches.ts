import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { cacheService } from '../services/cacheService';
import { footballApiService } from '../services/footballApi';
import { config } from '../config/env';

export async function matchRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  /**
   * GET /api/matches/live
   * Core requirement: 10,000 users hitting Live simultaneously.
   * TTL: 30 seconds.
   * Single-flight deduplication prevents cache stampede.
   */
  fastify.get('/matches/live', async (req, reply) => {
    try {
      const result = await cacheService.getOrFetch(
        'matches:live',
        config.cacheTTL.live, // 30 seconds
        () => footballApiService.getLiveMatches()
      );

      // Edge caching headers for Cloudflare / Nginx
      reply.header('Cache-Control', 'public, max-age=15, stale-while-revalidate=30');
      reply.header('X-Data-Source', result.source);
      reply.header('X-Cached-At', new Date(result.timestamp).toISOString());

      return {
        success: true,
        source: result.source,
        timestamp: result.timestamp,
        count: result.data.length,
        matches: result.data,
      };
    } catch (err: any) {
      fastify.log.error(err, 'Failed to fetch live matches');
      reply.status(500);
      return {
        success: false,
        error: 'Unable to retrieve live matches',
        message: err.message,
      };
    }
  });

  /**
   * GET /api/matches/today
   * TTL: 60 seconds
   */
  fastify.get('/matches/today', async (req, reply) => {
    try {
      const today = new Date().toISOString().split('T')[0];
      const cacheKey = `matches:today:${today}`;

      const result = await cacheService.getOrFetch(
        cacheKey,
        config.cacheTTL.today, // 60 seconds
        () => footballApiService.getTodayMatches(today)
      );

      reply.header('Cache-Control', 'public, max-age=30, stale-while-revalidate=60');
      reply.header('X-Data-Source', result.source);

      return {
        success: true,
        source: result.source,
        timestamp: result.timestamp,
        date: today,
        count: result.data.length,
        matches: result.data,
      };
    } catch (err: any) {
      fastify.log.error(err, 'Failed to fetch today matches');
      reply.status(500);
      return {
        success: false,
        error: 'Unable to retrieve today matches',
        message: err.message,
      };
    }
  });

  /**
   * GET /api/matches
   * Filters: ?date=YYYY-MM-DD&status=FINISHED|SCHEDULED|IN_PLAY&competition=PL
   */
  fastify.get<{
    Querystring: { date?: string; status?: string; competition?: string };
  }>('/matches', async (req, reply) => {
    try {
      const { date, status, competition } = req.query;
      const targetDate = date || new Date().toISOString().split('T')[0];
      const cacheKey = `matches:filter:${targetDate}:${status || 'all'}:${competition || 'all'}`;

      const result = await cacheService.getOrFetch(
        cacheKey,
        config.cacheTTL.today, // 60 seconds
        () => footballApiService.getMatches({ date: targetDate, status, competition })
      );

      reply.header('Cache-Control', 'public, max-age=30, stale-while-revalidate=60');
      reply.header('X-Data-Source', result.source);

      return {
        success: true,
        source: result.source,
        timestamp: result.timestamp,
        count: result.data.length,
        matches: result.data,
      };
    } catch (err: any) {
      fastify.log.error(err, 'Failed to fetch filtered matches');
      reply.status(500);
      return {
        success: false,
        error: 'Unable to retrieve matches',
        message: err.message,
      };
    }
  });

  /**
   * GET /api/matches/:id
   * Match details (lineups, stats, events)
   */
  fastify.get<{
    Params: { id: string };
  }>('/matches/:id', async (req, reply) => {
    try {
      const matchId = req.params.id;
      const cacheKey = `match:details:${matchId}`;

      const result = await cacheService.getOrFetch(
        cacheKey,
        config.cacheTTL.matchDetail, // 30s
        () => footballApiService.getMatchDetails(matchId)
      );

      if (!result.data) {
        reply.status(404);
        return { success: false, error: 'Match not found' };
      }

      reply.header('Cache-Control', 'public, max-age=15, stale-while-revalidate=30');
      reply.header('X-Data-Source', result.source);

      return {
        success: true,
        source: result.source,
        timestamp: result.timestamp,
        match: result.data,
      };
    } catch (err: any) {
      fastify.log.error(err, `Failed to fetch match details for ${req.params.id}`);
      reply.status(500);
      return {
        success: false,
        error: 'Unable to retrieve match details',
        message: err.message,
      };
    }
  });
}
