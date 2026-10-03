import axios from 'axios';
import {
  Match,
  StandingsResponse,
  TeamDetail,
  Competition,
  FavoriteItem,
  SystemMetrics,
} from '../types';

// In development, Vite proxies /api to http://localhost:4000
const API_BASE = '/api';

const client = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Setup device ID for favorites persistence
let deviceId = localStorage.getItem('futbollive_device_id');
if (!deviceId) {
  deviceId = 'dev_' + Math.random().toString(36).substring(2, 12);
  localStorage.setItem('futbollive_device_id', deviceId);
}
client.defaults.headers.common['X-Device-Id'] = deviceId;

export const api = {
  // Live matches (cached for 30s with deduplication)
  async getLiveMatches(): Promise<{ matches: Match[]; source: string; timestamp: number }> {
    const res = await client.get('/matches/live');
    return res.data;
  },

  // Today's matches (cached for 60s)
  async getTodayMatches(): Promise<{ matches: Match[]; source: string; timestamp: number; date: string }> {
    const res = await client.get('/matches/today');
    return res.data;
  },

  // Matches with filters
  async getMatches(params: { date?: string; status?: string; competition?: string }): Promise<{ matches: Match[]; source: string }> {
    const res = await client.get('/matches', { params });
    return res.data;
  },

  // Match details (lineups, stats, events)
  async getMatchDetails(id: number | string): Promise<Match> {
    const res = await client.get(`/matches/${id}`);
    return res.data.match;
  },

  // Competitions
  async getLeagues(): Promise<Competition[]> {
    const res = await client.get('/leagues');
    return res.data.leagues;
  },

  // Standings / Turnir jadvali (cached for 5 minutes = 300s)
  async getStandings(code: string = 'PL'): Promise<StandingsResponse> {
    const res = await client.get(`/leagues/${code}/standings`);
    return res.data.data;
  },

  // Team profile
  async getTeam(id: number | string): Promise<TeamDetail> {
    const res = await client.get(`/teams/${id}`);
    return res.data.team;
  },

  // Favorites
  async getFavorites(): Promise<FavoriteItem[]> {
    const res = await client.get('/favorites');
    return res.data.favorites;
  },

  async addFavorite(item: { itemType: 'match' | 'team' | 'league'; itemId: string; itemName: string; metadata?: any }): Promise<FavoriteItem> {
    const res = await client.post('/favorites', item);
    return res.data.favorite;
  },

  async removeFavorite(itemType: string, itemId: string): Promise<boolean> {
    const res = await client.delete(`/favorites/${itemType}/${itemId}`);
    return res.data.removed;
  },

  // System Metrics & Concurrency test
  async getSystemMetrics(): Promise<SystemMetrics> {
    const res = await client.get('/system/metrics');
    return res.data.metrics;
  },

  async simulateLoad(concurrency: number = 2000): Promise<{
    simulatedConcurrentRequests: number;
    durationMs: number;
    requestsPerSecond: number;
    sourceDistribution: any;
    stampedePrevented: boolean;
    message: string;
  }> {
    const res = await client.post('/system/simulate-load', { concurrency });
    return res.data;
  },
};
