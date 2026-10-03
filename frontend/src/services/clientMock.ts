import { Match, Competition, StandingsResponse } from '../types';

export const top3Leagues: Competition[] = [
  {
    id: 2021,
    name: 'Premier League',
    code: 'PL',
    type: 'LEAGUE',
    emblem: 'https://crests.football-data.org/PL.png',
    area: { name: 'England', code: 'ENG', flag: 'https://crests.football-data.org/770.svg' },
  },
  {
    id: 2014,
    name: 'La Liga',
    code: 'PD',
    type: 'LEAGUE',
    emblem: 'https://crests.football-data.org/laliga.png',
    area: { name: 'Spain', code: 'ESP', flag: 'https://crests.football-data.org/760.svg' },
  },
  {
    id: 2001,
    name: 'UEFA Champions League',
    code: 'CL',
    type: 'CUP',
    emblem: 'https://crests.football-data.org/CL.png',
    area: { name: 'Europe', code: 'EUR', flag: 'https://crests.football-data.org/EUR.svg' },
  },
  {
    id: 2019,
    name: 'Serie A',
    code: 'SA',
    type: 'LEAGUE',
    emblem: 'https://crests.football-data.org/SA.png',
    area: { name: 'Italy', code: 'ITA', flag: 'https://crests.football-data.org/784.svg' },
  },
];

export function getClientMockMatches(): Match[] {
  const now = new Date();

  return [
    // -------------------------------------------------------------
    // 1. PREMIER LEAGUE (Angliya Premyer Ligasi)
    // -------------------------------------------------------------
    {
      id: 4001,
      utcDate: new Date(now.getTime() - 68 * 60000).toISOString(),
      status: 'IN_PLAY',
      minute: 68,
      matchday: 28,
      stage: 'REGULAR_SEASON',
      competition: top3Leagues[0],
      homeTeam: {
        id: 65,
        name: 'Manchester City FC',
        shortName: 'Man City',
        tla: 'MCI',
        crest: 'https://crests.football-data.org/65.png',
      },
      awayTeam: {
        id: 57,
        name: 'Arsenal FC',
        shortName: 'Arsenal',
        tla: 'ARS',
        crest: 'https://crests.football-data.org/57.png',
      },
      score: {
        winner: null,
        duration: 'REGULAR',
        fullTime: { home: 2, away: 1 },
        halfTime: { home: 1, away: 1 },
      },
      extra: {
        referee: 'Michael Oliver',
        venue: 'Etihad Stadium, Manchester',
        stats: {
          possession: { home: 62, away: 38 },
          shotsTotal: { home: 14, away: 7 },
          shotsOnTarget: { home: 6, away: 3 },
          corners: { home: 8, away: 2 },
          fouls: { home: 9, away: 12 },
          yellowCards: { home: 1, away: 3 },
          redCards: { home: 0, away: 0 },
          saves: { home: 2, away: 4 },
          passes: { home: 512, away: 308 },
          passAccuracy: { home: 89, away: 81 },
        },
      },
    },
    {
      id: 4004,
      utcDate: new Date(now.getTime() - 150 * 60000).toISOString(),
      status: 'FINISHED',
      matchday: 28,
      stage: 'REGULAR_SEASON',
      competition: top3Leagues[0],
      homeTeam: {
        id: 64,
        name: 'Liverpool FC',
        shortName: 'Liverpool',
        tla: 'LIV',
        crest: 'https://crests.football-data.org/64.png',
      },
      awayTeam: {
        id: 66,
        name: 'Manchester United FC',
        shortName: 'Man United',
        tla: 'MUN',
        crest: 'https://crests.football-data.org/66.png',
      },
      score: {
        winner: 'HOME_TEAM',
        duration: 'REGULAR',
        fullTime: { home: 3, away: 0 },
        halfTime: { home: 1, away: 0 },
      },
      extra: {
        referee: 'Anthony Taylor',
        venue: 'Anfield, Liverpool',
      },
    },
    {
      id: 4010,
      utcDate: new Date(now.getTime() + 180 * 60000).toISOString(),
      status: 'TIMED',
      matchday: 28,
      stage: 'REGULAR_SEASON',
      competition: top3Leagues[0],
      homeTeam: {
        id: 61,
        name: 'Chelsea FC',
        shortName: 'Chelsea',
        tla: 'CHE',
        crest: 'https://crests.football-data.org/61.png',
      },
      awayTeam: {
        id: 73,
        name: 'Tottenham Hotspur FC',
        shortName: 'Tottenham',
        tla: 'TOT',
        crest: 'https://crests.football-data.org/73.png',
      },
      score: {
        winner: null,
        duration: 'REGULAR',
        fullTime: { home: null, away: null },
        halfTime: { home: null, away: null },
      },
      extra: {
        venue: 'Stamford Bridge, London',
      },
    },

    // -------------------------------------------------------------
    // 2. LA LIGA (Ispaniya La Ligasi)
    // -------------------------------------------------------------
    {
      id: 4002,
      utcDate: new Date(now.getTime() - 33 * 60000).toISOString(),
      status: 'IN_PLAY',
      minute: 33,
      matchday: 28,
      stage: 'REGULAR_SEASON',
      competition: top3Leagues[1],
      homeTeam: {
        id: 86,
        name: 'Real Madrid CF',
        shortName: 'Real Madrid',
        tla: 'RMA',
        crest: 'https://crests.football-data.org/86.png',
      },
      awayTeam: {
        id: 81,
        name: 'FC Barcelona',
        shortName: 'Barcelona',
        tla: 'FCB',
        crest: 'https://crests.football-data.org/81.png',
      },
      score: {
        winner: null,
        duration: 'REGULAR',
        fullTime: { home: 1, away: 1 },
        halfTime: { home: 1, away: 1 },
      },
      extra: {
        referee: 'Jesús Gil Manzano',
        venue: 'Santiago Bernabéu, Madrid',
        stats: {
          possession: { home: 49, away: 51 },
          shotsTotal: { home: 8, away: 9 },
          shotsOnTarget: { home: 4, away: 5 },
          corners: { home: 4, away: 5 },
          fouls: { home: 6, away: 7 },
          yellowCards: { home: 1, away: 1 },
          redCards: { home: 0, away: 0 },
          saves: { home: 4, away: 3 },
          passes: { home: 245, away: 260 },
          passAccuracy: { home: 87, away: 88 },
        },
      },
    },
    {
      id: 4011,
      utcDate: new Date(now.getTime() - 180 * 60000).toISOString(),
      status: 'FINISHED',
      matchday: 28,
      stage: 'REGULAR_SEASON',
      competition: top3Leagues[1],
      homeTeam: {
        id: 78,
        name: 'Club Atlético de Madrid',
        shortName: 'Atlético',
        tla: 'ATM',
        crest: 'https://crests.football-data.org/78.png',
      },
      awayTeam: {
        id: 559,
        name: 'Sevilla FC',
        shortName: 'Sevilla',
        tla: 'SEV',
        crest: 'https://crests.football-data.org/559.png',
      },
      score: {
        winner: 'HOME_TEAM',
        duration: 'REGULAR',
        fullTime: { home: 2, away: 0 },
        halfTime: { home: 1, away: 0 },
      },
      extra: {
        venue: 'Cívitas Metropolitano, Madrid',
      },
    },
    {
      id: 4012,
      utcDate: new Date(now.getTime() + 120 * 60000).toISOString(),
      status: 'TIMED',
      matchday: 28,
      stage: 'REGULAR_SEASON',
      competition: top3Leagues[1],
      homeTeam: {
        id: 92,
        name: 'Real Sociedad de Fútbol',
        shortName: 'Real Sociedad',
        tla: 'RSO',
        crest: 'https://crests.football-data.org/92.png',
      },
      awayTeam: {
        id: 77,
        name: 'Athletic Club',
        shortName: 'Athletic',
        tla: 'ATH',
        crest: 'https://crests.football-data.org/77.png',
      },
      score: {
        winner: null,
        duration: 'REGULAR',
        fullTime: { home: null, away: null },
        halfTime: { home: null, away: null },
      },
      extra: {
        venue: 'Reale Arena, San Sebastián',
      },
    },

    // -------------------------------------------------------------
    // 3. UEFA CHAMPIONS LEAGUE (Chempionlar Ligasi)
    // -------------------------------------------------------------
    {
      id: 4003,
      utcDate: new Date(now.getTime() - 83 * 60000).toISOString(),
      status: 'IN_PLAY',
      minute: 83,
      matchday: 6,
      stage: 'GROUP_STAGE',
      competition: top3Leagues[2],
      homeTeam: {
        id: 108,
        name: 'FC Internazionale Milano',
        shortName: 'Inter',
        tla: 'INT',
        crest: 'https://crests.football-data.org/108.png',
      },
      awayTeam: {
        id: 98,
        name: 'AC Milan',
        shortName: 'Milan',
        tla: 'MIL',
        crest: 'https://crests.football-data.org/98.png',
      },
      score: {
        winner: null,
        duration: 'REGULAR',
        fullTime: { home: 3, away: 2 },
        halfTime: { home: 2, away: 1 },
      },
      extra: {
        referee: 'Daniele Orsato',
        venue: 'San Siro, Milano',
        stats: {
          possession: { home: 54, away: 46 },
          shotsTotal: { home: 16, away: 11 },
          shotsOnTarget: { home: 7, away: 5 },
          corners: { home: 6, away: 4 },
          fouls: { home: 11, away: 14 },
          yellowCards: { home: 2, away: 4 },
          redCards: { home: 0, away: 1 },
          saves: { home: 3, away: 4 },
          passes: { home: 440, away: 370 },
          passAccuracy: { home: 86, away: 82 },
        },
      },
    },
    {
      id: 4006,
      utcDate: new Date(now.getTime() + 240 * 60000).toISOString(),
      status: 'TIMED',
      matchday: 6,
      stage: 'GROUP_STAGE',
      competition: top3Leagues[2],
      homeTeam: {
        id: 524,
        name: 'Paris Saint-Germain FC',
        shortName: 'PSG',
        tla: 'PSG',
        crest: 'https://crests.football-data.org/524.png',
      },
      awayTeam: {
        id: 5,
        name: 'FC Bayern München',
        shortName: 'Bayern',
        tla: 'FCB',
        crest: 'https://crests.football-data.org/5.png',
      },
      score: {
        winner: null,
        duration: 'REGULAR',
        fullTime: { home: null, away: null },
        halfTime: { home: null, away: null },
      },
      extra: {
        venue: 'Parc des Princes, Paris',
      },
    },
  ];
}

export function getClientMockStandings(code: string = 'PL'): StandingsResponse {
  const comp = top3Leagues.find((c) => c.code === code) || top3Leagues[0];

  const premierLeagueTable = [
    { id: 65, name: 'Manchester City FC', short: 'Man City', tla: 'MCI', crest: 'https://crests.football-data.org/65.png', p: 28, w: 21, d: 4, l: 3, gf: 67, ga: 25, pts: 67, form: 'W,W,D,W,W' },
    { id: 64, name: 'Liverpool FC', short: 'Liverpool', tla: 'LIV', crest: 'https://crests.football-data.org/64.png', p: 28, w: 20, d: 5, l: 3, gf: 65, ga: 26, pts: 65, form: 'W,W,W,D,W' },
    { id: 57, name: 'Arsenal FC', short: 'Arsenal', tla: 'ARS', crest: 'https://crests.football-data.org/57.png', p: 28, w: 20, d: 4, l: 4, gf: 70, ga: 24, pts: 64, form: 'W,W,W,W,L' },
    { id: 58, name: 'Aston Villa FC', short: 'Aston Villa', tla: 'AVL', crest: 'https://crests.football-data.org/58.png', p: 28, w: 17, d: 4, l: 7, gf: 59, ga: 41, pts: 55, form: 'L,W,W,W,L' },
    { id: 73, name: 'Tottenham Hotspur FC', short: 'Tottenham', tla: 'TOT', crest: 'https://crests.football-data.org/73.png', p: 28, w: 16, d: 5, l: 7, gf: 59, ga: 42, pts: 53, form: 'W,L,W,D,W' },
    { id: 66, name: 'Manchester United FC', short: 'Man United', tla: 'MUN', crest: 'https://crests.football-data.org/66.png', p: 28, w: 15, d: 2, l: 11, gf: 39, ga: 39, pts: 47, form: 'W,W,L,L,W' },
  ];

  return {
    competition: comp,
    season: { id: 2026, startDate: '2025-08-15', endDate: '2026-05-25', currentMatchday: 28 },
    standings: [
      {
        stage: 'REGULAR_SEASON',
        type: 'TOTAL',
        group: null,
        table: premierLeagueTable.map((item, idx) => ({
          position: idx + 1,
          team: { id: item.id, name: item.name, shortName: item.short, tla: item.tla, crest: item.crest },
          playedGames: item.p,
          form: item.form,
          won: item.w,
          draw: item.d,
          lost: item.l,
          points: item.pts,
          goalsFor: item.gf,
          goalsAgainst: item.ga,
          goalDifference: item.gf - item.ga,
        })),
      },
    ],
  };
}
