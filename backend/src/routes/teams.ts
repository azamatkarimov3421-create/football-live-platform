import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { cacheService } from '../services/cacheService';
import { footballApiService } from '../services/footballApi';
import { config } from '../config/env';

export async function teamRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  /**
   * GET /api/teams/:id
   * Team detail and squad
   * TTL: 15 minutes (900 seconds)
   */
  fastify.get<{
    Params: { id: string };
  }>('/teams/:id', async (req, reply) => {
    try {
      const teamId = req.params.id;
      const cacheKey = `team:${teamId}`;

      const result = await cacheService.getOrFetch(
        cacheKey,
        config.cacheTTL.teams, // 15 mins
        () => footballApiService.getTeam(teamId)
      );

      reply.header('Cache-Control', 'public, max-age=300, stale-while-revalidate=900');
      reply.header('X-Data-Source', result.source);

      return {
        success: true,
        source: result.source,
        timestamp: result.timestamp,
        team: result.data,
      };
    } catch (err: any) {
      fastify.log.error(err, `Failed to fetch team ${req.params.id}`);
      reply.status(500);
      return {
        success: false,
        error: 'Unable to retrieve team details',
        message: err.message,
      };
    }
  });
}
