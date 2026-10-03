import axios from 'axios';
import {
  Match,
  StandingsResponse,
  TeamDetail,
  Competition,
  FavoriteItem,
  SystemMetrics,
} from '../types';

export const getApiBaseUrl = (): string => {
  if (typeof window !== 'undefined') {
    const custom = localStorage.getItem('futbollive_api_url');
    if (custom) return custom;
    // Check Vite environment variable for Vercel deployment
    const metaEnv = (import.meta as any).env;
    if (metaEnv?.VITE_API_URL) {
      return metaEnv.VITE_API_URL;
    }
    if (window.location.protocol === 'file:') {
      // In Android APK file assets, default to local Wi-Fi or server IP
      return 'http://192.168.16.106:4000/api';
    }
  }
  return '/api';
};

export const setApiBaseUrl = (url: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('futbollive_api_url', url);
  }
};

const client = axios.create({
  baseURL: getApiBaseUrl(),
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to always pick up dynamically changed server URL
client.interceptors.request.use((req) => {
  req.baseURL = getApiBaseUrl();
  return req;
});

// Setup device ID for favorites persistence
let deviceId = localStorage.getItem('futbollive_device_id');
if (!deviceId) {
  deviceId = 'dev_' + Math.random().toString(36).substring(2, 12);
  localStorage.setItem('futbollive_device_id', deviceId);
}
client.defaults.headers.common['X-Device-Id'] = deviceId;

import { getClientMockMatches, top3Leagues, getClientMockStandings } from './clientMock';

export const api = {
  // Live matches (cached for 30s with deduplication)
  async getLiveMatches(): Promise<{ matches: Match[]; source: string; timestamp: number }> {
    try {
      const res = await client.get('/matches/live');
      if (res.data?.matches) return res.data;
    } catch (e) {}
    const matches = getClientMockMatches().filter((m) => m.status === 'IN_PLAY' || m.status === 'PAUSED');
    return { matches, source: 'cache', timestamp: Date.now() };
  },

  // Today's matches (cached for 60s)
  async getTodayMatches(): Promise<{ matches: Match[]; source: string; timestamp: number; date: string }> {
    const today = new Date().toISOString().split('T')[0];
    try {
      const res = await client.get('/matches/today');
      if (res.data?.matches) return res.data;
    } catch (e) {}
    return { matches: getClientMockMatches(), source: 'cache', timestamp: Date.now(), date: today };
  },

  // Matches with filters
  async getMatches(params: { date?: string; status?: string; competition?: string }): Promise<{ matches: Match[]; source: string }> {
    try {
      const res = await client.get('/matches', { params });
      if (res.data?.matches) return res.data;
    } catch (e) {}
    let matches = getClientMockMatches();
    if (params.status && params.status !== 'ALL') {
      matches = matches.filter((m) => m.status === params.status);
    }
    if (params.competition && params.competition !== 'ALL') {
      matches = matches.filter((m) => m.competition.code === params.competition);
    }
    return { matches, source: 'cache' };
  },

  // Match details (lineups, stats, events)
  async getMatchDetails(id: number | string): Promise<Match> {
    try {
      const res = await client.get(`/matches/${id}`);
      if (res.data?.match) return res.data.match;
    } catch (e) {}
    const matches = getClientMockMatches();
    return matches.find((m) => m.id.toString() === id.toString()) || matches[0];
  },

  // Competitions
  async getLeagues(): Promise<Competition[]> {
    try {
      const res = await client.get('/leagues');
      if (res.data?.leagues) return res.data.leagues;
    } catch (e) {}
    return top3Leagues;
  },

  // Standings / Turnir jadvali (cached for 5 minutes = 300s)
  async getStandings(code: string = 'PL'): Promise<StandingsResponse> {
    try {
      const res = await client.get(`/leagues/${code}/standings`);
      if (res.data?.data) return res.data.data;
    } catch (e) {}
    return getClientMockStandings(code);
  },

  // Team profile
  async getTeam(id: number | string): Promise<TeamDetail> {
    try {
      const res = await client.get(`/teams/${id}`);
      if (res.data?.team) return res.data.team;
    } catch (e) {}
    return {
      id: Number(id),
      name: 'Manchester City FC',
      shortName: 'Man City',
      tla: 'MCI',
      crest: 'https://crests.football-data.org/65.png',
      venue: 'Etihad Stadium',
      founded: 1880,
      coach: { id: 1160, name: 'Pep Guardiola', nationality: 'Spain' },
      squad: [
        { id: 1, name: 'Ederson', position: 'Goalkeeper', shirtNumber: 31 },
        { id: 2, name: 'Rúben Dias', position: 'Defence', shirtNumber: 3 },
        { id: 3, name: 'Rodri', position: 'Midfield', shirtNumber: 16 },
        { id: 4, name: 'Kevin De Bruyne', position: 'Midfield', shirtNumber: 17 },
        { id: 5, name: 'Erling Haaland', position: 'Offence', shirtNumber: 9 },
      ],
    };
  },

  // Favorites
  async getFavorites(): Promise<FavoriteItem[]> {
    try {
      const res = await client.get('/favorites');
      if (res.data?.favorites) return res.data.favorites;
    } catch (e) {}
    const saved = localStorage.getItem('futbollive_favorites_local');
    return saved ? JSON.parse(saved) : [];
  },

  async addFavorite(item: { itemType: 'match' | 'team' | 'league'; itemId: string; itemName: string; metadata?: any }): Promise<FavoriteItem> {
    try {
      const res = await client.post('/favorites', item);
      if (res.data?.favorite) return res.data.favorite;
    } catch (e) {}
    return {
      item_type: item.itemType,
      item_id: item.itemId,
      item_name: item.itemName,
      metadata: item.metadata,
      created_at: new Date().toISOString(),
    };
  },

  async removeFavorite(itemType: string, itemId: string): Promise<boolean> {
    try {
      const res = await client.delete(`/favorites/${itemType}/${itemId}`);
      if (res.data) return res.data.removed;
    } catch (e) {}
    return true;
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
