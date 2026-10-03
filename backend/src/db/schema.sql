-- PostgreSQL Schema for 10,000 Concurrent Football Platform

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    device_id VARCHAR(128) NOT NULL UNIQUE,
    username VARCHAR(64) DEFAULT 'Football Fan',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    last_active TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS favorites (
    id SERIAL PRIMARY KEY,
    device_id VARCHAR(128) NOT NULL,
    item_type VARCHAR(32) NOT NULL, -- 'match', 'team', 'league'
    item_id VARCHAR(64) NOT NULL,
    item_name VARCHAR(128) NOT NULL,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_user_favorite UNIQUE (device_id, item_type, item_id)
);

CREATE INDEX IF NOT EXISTS idx_favorites_device ON favorites(device_id);
CREATE INDEX IF NOT EXISTS idx_favorites_type ON favorites(item_type);

-- Durable snapshot storage (backup when external API is down and Redis is cold)
CREATE TABLE IF NOT EXISTS cache_snapshots (
    cache_key VARCHAR(128) PRIMARY KEY,
    payload JSONB NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS server_metrics (
    id SERIAL PRIMARY KEY,
    recorded_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    active_connections INT DEFAULT 0,
    redis_hits BIGINT DEFAULT 0,
    redis_misses BIGINT DEFAULT 0,
    dedup_saves BIGINT DEFAULT 0
);
