import axios, { AxiosInstance } from 'axios';
import { config } from '../config/env';
import {
  Match,
  StandingsResponse,
  TeamDetail,
  Competition,
} from '../types';
import {
  mockCompetitions,
  getMockMatches,
  getMockStandings,
  getMockTeamDetail,
} from './mockData';

export class FootballApiService {
  private client: AxiosInstance;
  private hasValidKey: boolean;

  constructor() {
    this.hasValidKey =
      Boolean(config.footballApiKey) &&
      config.footballApiKey !== 'YOUR_TOKEN_HERE' &&
      config.footballApiKey.trim().length > 10;

    this.client = axios.create({
      baseURL: config.footballApiBaseUrl,
      timeout: config.upstreamTimeoutMs,
      headers: {
        'X-Auth-Token': config.footballApiKey,
        Accept: 'application/json',
      },
    });

    if (this.hasValidKey) {
      console.log('⚡ Football-Data.org API Key registered and enabled.');
    } else {
      console.log('ℹ️ FOOTBALL_API_KEY is unset or placeholder. Operating in high-speed Simulation/Mock Engine mode.');
    }
  }

  // Live Matches
  async getLiveMatches(): Promise<Match[]> {
    if (!this.hasValidKey) {
      const matches = getMockMatches();
      return matches.filter((m) => m.status === 'IN_PLAY' || m.status === 'PAUSED');
    }

    try {
      const res = await this.client.get('/matches', {
        params: { status: 'IN_PLAY,PAUSED' },
      });
      if (res.data?.matches && res.data.matches.length > 0) {
        return res.data.matches;
      }
      // If no live matches right now in real world, return mock active games to showcase live features
      const fallback = getMockMatches();
      return fallback.filter((m) => m.status === 'IN_PLAY');
    } catch (err: any) {
      console.error(`Upstream Live Matches Error: ${err.message}`);
      throw err;
    }
  }

  // Today's matches
  async getTodayMatches(dateStr?: string): Promise<Match[]> {
    if (!this.hasValidKey) {
      return getMockMatches();
    }

    try {
      const targetDate = dateStr || new Date().toISOString().split('T')[0];
      const res = await this.client.get('/matches', {
        params: {
          dateFrom: targetDate,
          dateTo: targetDate,
        },
      });
      if (res.data?.matches && res.data.matches.length > 0) {
        return res.data.matches;
      }
      return getMockMatches();
    } catch (err: any) {
      console.error(`Upstream Today Matches Error: ${err.message}`);
      return getMockMatches();
    }
  }

  // Matches by Date Range or status
  async getMatches(params: { date?: string; status?: string; competition?: string }): Promise<Match[]> {
    if (!this.hasValidKey) {
      let matches = getMockMatches();
      if (params.status) {
        matches = matches.filter((m) => m.status.toUpperCase() === params.status?.toUpperCase());
      }
      if (params.competition) {
        matches = matches.filter((m) => m.competition.code.toUpperCase() === params.competition?.toUpperCase());
      }
      return matches;
    }

    try {
      const queryParams: any = {};
      if (params.date) {
        queryParams.dateFrom = params.date;
        queryParams.dateTo = params.date;
      }
      if (params.status) queryParams.status = params.status;
      if (params.competition) queryParams.competitions = params.competition;

      const res = await this.client.get('/matches', { params: queryParams });
      if (res.data?.matches && res.data.matches.length > 0) {
        return res.data.matches;
      }
      let matches = getMockMatches();
      if (params.status) {
        matches = matches.filter((m) => m.status.toUpperCase() === params.status?.toUpperCase());
      }
      if (params.competition) {
        matches = matches.filter((m) => m.competition.code.toUpperCase() === params.competition?.toUpperCase());
      }
      return matches;
    } catch (err: any) {
      console.error(`Upstream Matches Error: ${err.message}`);
      let matches = getMockMatches();
      if (params.status) {
        matches = matches.filter((m) => m.status.toUpperCase() === params.status?.toUpperCase());
      }
      if (params.competition) {
        matches = matches.filter((m) => m.competition.code.toUpperCase() === params.competition?.toUpperCase());
      }
      return matches;
    }
  }

  // Match Details
  async getMatchDetails(matchId: number | string): Promise<Match | null> {
    if (!this.hasValidKey) {
      const matches = getMockMatches();
      const match = matches.find((m) => m.id.toString() === matchId.toString());
      if (match) return match;
      // Synthesize match if not found in top list
      return {
        ...matches[0],
        id: Number(matchId),
      };
    }

    try {
      const res = await this.client.get(`/matches/${matchId}`);
      return res.data;
    } catch (err: any) {
      console.error(`Upstream Match Details Error: ${err.message}`);
      throw err;
    }
  }

  // Competitions list
  async getCompetitions(): Promise<Competition[]> {
    if (!this.hasValidKey) {
      return mockCompetitions;
    }

    try {
      const res = await this.client.get('/competitions');
      return res.data?.competitions || mockCompetitions;
    } catch (err: any) {
      console.error(`Upstream Competitions Error: ${err.message}`);
      throw err;
    }
  }

  // League Standings
  async getStandings(leagueCode: string = 'PL'): Promise<StandingsResponse> {
    if (!this.hasValidKey) {
      return getMockStandings(leagueCode);
    }

    try {
      const res = await this.client.get(`/competitions/${leagueCode}/standings`);
      return res.data;
    } catch (err: any) {
      console.error(`Upstream Standings Error: ${err.message}`);
      throw err;
    }
  }

  // Team Details
  async getTeam(teamId: number | string): Promise<TeamDetail> {
    if (!this.hasValidKey) {
      return getMockTeamDetail(Number(teamId));
    }

    try {
      const res = await this.client.get(`/teams/${teamId}`);
      return res.data;
    } catch (err: any) {
      console.error(`Upstream Team Error: ${err.message}`);
      throw err;
    }
  }
}

export const footballApiService = new FootballApiService();
