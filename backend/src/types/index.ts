export interface Competition {
  id: number;
  name: string;
  code: string;
  type?: string;
  emblem: string;
  area?: {
    name: string;
    code: string;
    flag: string;
  };
}

export interface TeamBrief {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
}

export interface MatchScore {
  winner: 'HOME_TEAM' | 'AWAY_TEAM' | 'DRAW' | null;
  duration: string;
  fullTime: {
    home: number | null;
    away: number | null;
  };
  halfTime: {
    home: number | null;
    away: number | null;
  };
}

export interface MatchEvent {
  minute: number;
  type: 'GOAL' | 'YELLOW_CARD' | 'RED_CARD' | 'SUBSTITUTION' | 'VAR_GOAL_DISALLOWED' | 'PENALTY';
  player: string;
  team: 'home' | 'away';
  assist?: string;
  detail?: string;
}

export interface MatchStats {
  possession: { home: number; away: number };
  shotsTotal: { home: number; away: number };
  shotsOnTarget: { home: number; away: number };
  corners: { home: number; away: number };
  fouls: { home: number; away: number };
  yellowCards: { home: number; away: number };
  redCards: { home: number; away: number };
  saves: { home: number; away: number };
  passes: { home: number; away: number };
  passAccuracy: { home: number; away: number };
}

export interface Player {
  id: number;
  name: string;
  position: 'Goalkeeper' | 'Defence' | 'Midfield' | 'Offence' | string;
  shirtNumber?: number;
  dateOfBirth?: string;
  nationality?: string;
}

export interface MatchDetailsExtra {
  referee?: string;
  venue?: string;
  attendance?: number;
  events?: MatchEvent[];
  stats?: MatchStats;
  lineups?: {
    home: {
      coach: string;
      formation: string;
      startingXI: Player[];
      substitutes: Player[];
    };
    away: {
      coach: string;
      formation: string;
      startingXI: Player[];
      substitutes: Player[];
    };
  };
}

export interface Match {
  id: number;
  utcDate: string;
  status:
    | 'SCHEDULED'
    | 'TIMED'
    | 'IN_PLAY'
    | 'PAUSED'
    | 'EXTRA_TIME'
    | 'PENALTY_SHOOTOUT'
    | 'FINISHED'
    | 'SUSPENDED'
    | 'POSTPONED'
    | 'CANCELLED'
    | 'AWARDED';
  minute?: number | string;
  matchday?: number;
  stage?: string;
  competition: Competition;
  homeTeam: TeamBrief;
  awayTeam: TeamBrief;
  score: MatchScore;
  extra?: MatchDetailsExtra;
}

export interface StandingTableItem {
  position: number;
  team: TeamBrief;
  playedGames: number;
  form: string;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}

export interface StandingsResponse {
  competition: Competition;
  season: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
  };
  standings: Array<{
    stage: string;
    type: string;
    group: string | null;
    table: StandingTableItem[];
  }>;
}

export interface TeamDetail extends TeamBrief {
  address?: string;
  website?: string;
  founded?: number;
  clubColors?: string;
  venue?: string;
  coach?: {
    id: number;
    name: string;
    nationality: string;
  };
  squad: Player[];
  recentMatches?: Match[];
}
