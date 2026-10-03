import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { dbFavorites } from '../db/pool';

export async function favoriteRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get<{
    Querystring: { deviceId?: string; type?: string };
  }>('/favorites', async (req, reply) => {
    const deviceId = req.headers['x-device-id'] as string || req.query.deviceId || 'guest-user';
    const favorites = await dbFavorites.list(deviceId, req.query.type);
    return {
      success: true,
      deviceId,
      favorites,
    };
  });

  fastify.post<{
    Body: { deviceId?: string; itemType: string; itemId: string; itemName: string; metadata?: any };
  }>('/favorites', async (req, reply) => {
    const deviceId = (req.headers['x-device-id'] as string) || req.body.deviceId || 'guest-user';
    const { itemType, itemId, itemName, metadata } = req.body;

    if (!itemType || !itemId || !itemName) {
      reply.status(400);
      return { success: false, error: 'itemType, itemId, and itemName are required' };
    }

    const item = await dbFavorites.add(deviceId, itemType, itemId, itemName, metadata || {});
    return {
      success: true,
      favorite: item,
    };
  });

  fastify.delete<{
    Params: { type: string; id: string };
    Querystring: { deviceId?: string };
  }>('/favorites/:type/:id', async (req, reply) => {
    const deviceId = (req.headers['x-device-id'] as string) || req.query.deviceId || 'guest-user';
    const { type, id } = req.params;

    const removed = await dbFavorites.remove(deviceId, type, id);
    return {
      success: true,
      removed,
    };
  });
}
