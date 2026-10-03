import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { cacheService } from '../services/cacheService';
import { footballApiService } from '../services/footballApi';
import { config } from '../config/env';

export async function leagueRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  /**
   * GET /api/leagues
   * List of top football leagues
   */
  fastify.get('/leagues', async (req, reply) => {
    try {
      const result = await cacheService.getOrFetch(
        'competitions:list',
        config.cacheTTL.leagues, // 30 minutes
        () => footballApiService.getCompetitions()
      );

      reply.header('Cache-Control', 'public, max-age=600, stale-while-revalidate=1800');
      reply.header('X-Data-Source', result.source);

      return {
        success: true,
        source: result.source,
        timestamp: result.timestamp,
        leagues: result.data,
      };
    } catch (err: any) {
      fastify.log.error(err, 'Failed to fetch competitions');
      reply.status(500);
      return {
        success: false,
        error: 'Unable to retrieve leagues',
        message: err.message,
      };
    }
  });

  /**
   * GET /api/leagues/:code/standings
   * Tournament table / Turnir jadvali: cached for 5 minutes (300 seconds)
   */
  fastify.get<{
    Params: { code: string };
  }>('/leagues/:code/standings', async (req, reply) => {
    try {
      const code = req.params.code.toUpperCase();
      const cacheKey = `standings:${code}`;

      const result = await cacheService.getOrFetch(
        cacheKey,
        config.cacheTTL.standings, // 300 seconds = 5 minutes
        () => footballApiService.getStandings(code)
      );

      // Cloudflare / proxy headers: max-age 300s
      reply.header('Cache-Control', 'public, max-age=120, stale-while-revalidate=300');
      reply.header('X-Data-Source', result.source);

      return {
        success: true,
        source: result.source,
        timestamp: result.timestamp,
        data: result.data,
      };
    } catch (err: any) {
      fastify.log.error(err, `Failed to fetch standings for ${req.params.code}`);
      reply.status(500);
      return {
        success: false,
        error: `Unable to retrieve standings for league ${req.params.code}`,
        message: err.message,
      };
    }
  });
}
