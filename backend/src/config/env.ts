import dotenv from 'dotenv';
import path from 'path';

// Load .env from backend directory or root directory
dotenv.config({ path: path.resolve(__dirname, '../../.env') });
dotenv.config();

export const config = {
  port: parseInt(process.env.PORT || '4000', 10),
  host: process.env.HOST || '0.0.0.0',
  nodeEnv: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',

  // Football-Data.org API configuration
  footballApiKey: process.env.FOOTBALL_API_KEY || 'YOUR_TOKEN_HERE',
  footballApiBaseUrl: process.env.FOOTBALL_API_BASE_URL || 'https://api.football-data.org/v4',
  upstreamTimeoutMs: parseInt(process.env.UPSTREAM_TIMEOUT_MS || '8000', 10),

  // Redis Cache configuration
  redisUrl: process.env.REDIS_URL || 'redis://127.0.0.1:6379',
  redisHost: process.env.REDIS_HOST || '127.0.0.1',
  redisPort: parseInt(process.env.REDIS_PORT || '6379', 10),
  redisPassword: process.env.REDIS_PASSWORD || undefined,

  // PostgreSQL configuration
  databaseUrl: process.env.DATABASE_URL || 'postgresql://postgres:postgres@127.0.0.1:5432/football_db',
  dbPoolMax: parseInt(process.env.DB_POOL_MAX || '30', 10),
  dbIdleTimeoutMillis: parseInt(process.env.DB_IDLE_TIMEOUT_MS || '30000', 10),
  dbConnectionTimeoutMillis: parseInt(process.env.DB_CONN_TIMEOUT_MS || '5000', 10),

  // Rate Limiter
  rateLimitMax: parseInt(process.env.RATE_LIMIT_MAX || '2000', 10),
  rateLimitWindowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000', 10),

  // Caching Rules (strict requirements from specification)
  cacheTTL: {
    live: 30,         // 30 seconds for active live matches
    today: 60,        // 60 seconds for today's fixture list
    standings: 300,   // 5 minutes (300 seconds) for league tables
    teams: 900,       // 15 minutes for team rosters
    matchDetail: 30,  // 30s for in-play match details, 600s if finished
    leagues: 1800,    // 30 minutes for league metadata
  },
};
