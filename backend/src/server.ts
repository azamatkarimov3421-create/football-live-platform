import fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import compress from '@fastify/compress';
import rateLimit from '@fastify/rate-limit';
import { config } from './config/env';
import { initDatabase } from './db/pool';
import { matchRoutes } from './routes/matches';
import { leagueRoutes } from './routes/leagues';
import { teamRoutes } from './routes/teams';
import { favoriteRoutes } from './routes/favorites';
import { systemRoutes } from './routes/system';

export function buildServer() {
  const app = fastify({
    logger: {
      level: config.isProduction ? 'warn' : 'info',
    },
    // Trust proxy headers from Cloudflare / Nginx
    trustProxy: true,
    bodyLimit: 1048576, // 1MB
  });

  // Tune underlying HTTP server keep-alive for high concurrency
  app.server.keepAliveTimeout = 65000;
  app.server.headersTimeout = 66000;

  // 1. CORS Configuration
  app.register(cors, {
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Device-Id', 'cf-connecting-ip'],
    credentials: true,
  });

  // 2. High-performance compression (Brotli + Gzip) to reduce network bandwidth for 10,000 clients
  app.register(compress, {
    encodings: ['br', 'gzip', 'deflate'],
    threshold: 1024, // compress bodies > 1KB
  });

  // 3. Rate Limiting Protection (Supports Cloudflare Connecting IP)
  app.register(rateLimit, {
    max: config.rateLimitMax,
    timeWindow: config.rateLimitWindowMs,
    keyGenerator: (req) => {
      // Cloudflare header takes highest priority
      const cfIp = req.headers['cf-connecting-ip'];
      if (typeof cfIp === 'string') return cfIp;
      return req.ip;
    },
    errorResponseBuilder: (req, context) => ({
      statusCode: 429,
      error: 'Too Many Requests',
      message: `Rate limit exceeded. Try again in ${Math.ceil(context.ttl / 1000)}s. Cloudflare protection active.`,
    }),
  });

  // 4. Global Error Handler
  app.setErrorHandler((error, request, reply) => {
    app.log.error(error);
    reply.status(error.statusCode || 500).send({
      success: false,
      error: error.name || 'InternalServerError',
      message: error.message || 'An unexpected error occurred',
      timestamp: Date.now(),
    });
  });

  // 5. Register Routes with /api prefix
  app.register(matchRoutes, { prefix: '/api' });
  app.register(leagueRoutes, { prefix: '/api' });
  app.register(teamRoutes, { prefix: '/api' });
  app.register(favoriteRoutes, { prefix: '/api' });
  app.register(systemRoutes, { prefix: '/api' });

  // Root route check
  app.get('/', async () => {
    return {
      service: 'FutbolLive Pro API',
      version: '1.0.0',
      status: 'ONLINE',
      docs: '/api/system/metrics',
      time: new Date().toISOString(),
    };
  });

  return app;
}

export async function start() {
  const app = buildServer();

  // Initialize DB pool
  await initDatabase();

  try {
    const address = await app.listen({ port: config.port, host: config.host });
    console.log(`🚀 Football API Backend listening on ${address}`);
    console.log(`⚡ 10,000 concurrency cache engine initialized. Live TTL: ${config.cacheTTL.live}s, Today TTL: ${config.cacheTTL.today}s, Standings TTL: ${config.cacheTTL.standings}s`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }

  // Graceful shutdown handling
  const shutdown = async (signal: string) => {
    console.log(`🛑 Received ${signal}. Shutting down gracefully...`);
    try {
      await app.close();
      console.log('✅ Fastify server closed.');
      process.exit(0);
    } catch (err) {
      console.error('Error during shutdown:', err);
      process.exit(1);
    }
  };

  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('SIGTERM', () => shutdown('SIGTERM'));
}

if (require.main === module) {
  start();
}
