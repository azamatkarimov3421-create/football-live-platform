const fs = require('fs');
const path = require('path');

const realData = JSON.parse(fs.readFileSync(path.join(__dirname, 'real_api_data.json'), 'utf8'));

// Format matches with proper structure
const matches = realData.matches.map(m => {
  return {
    id: m.id,
    utcDate: m.utcDate,
    status: m.status,
    minute: m.status === 'IN_PLAY' ? 65 : (m.status === 'PAUSED' ? 45 : null),
    matchday: m.matchday,
    competition: {
      id: m.competition.id,
      name: m.competition.name,
      code: m.competition.code,
      type: 'LEAGUE',
      emblem: m.competition.emblem || `https://crests.football-data.org/${m.competition.code}.png`,
      area: m.area
    },
    homeTeam: {
      id: m.homeTeam.id,
      name: m.homeTeam.name,
      shortName: m.homeTeam.shortName || m.homeTeam.name,
      tla: m.homeTeam.tla || m.homeTeam.name.substring(0, 3).toUpperCase(),
      crest: m.homeTeam.crest
    },
    awayTeam: {
      id: m.awayTeam.id,
      name: m.awayTeam.name,
      shortName: m.awayTeam.shortName || m.awayTeam.name,
      tla: m.awayTeam.tla || m.awayTeam.name.substring(0, 3).toUpperCase(),
      crest: m.awayTeam.crest
    },
    score: m.score,
    extra: {
      venue: m.homeTeam.name + ' Stadium',
      referee: m.referees?.[0]?.name || 'FIFA Official',
      stats: {
        possession: { home: 54, away: 46 },
        shotsTotal: { home: 12, away: 9 },
        shotsOnTarget: { home: 5, away: 4 },
        corners: { home: 6, away: 3 },
        fouls: { home: 10, away: 11 },
        yellowCards: { home: 1, away: 2 },
        redCards: { home: 0, away: 0 },
        saves: { home: 3, away: 4 }
      }
    }
  };
});

// Mark live matches
const plLive = matches.find(m => m.competition.code === 'PL');
if (plLive) { plLive.status = 'IN_PLAY'; plLive.minute = 72; }
const pdLive = matches.find(m => m.competition.code === 'PD');
if (pdLive) { pdLive.status = 'IN_PLAY'; pdLive.minute = 54; }

const backendMockContent = `import { Match, StandingsResponse, TeamDetail, Competition } from '../types';

export const mockCompetitions: Competition[] = [
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
];

export const REAL_API_MATCHES: Match[] = ${JSON.stringify(matches, null, 2)};

export function getMockMatches(): Match[] {
  return REAL_API_MATCHES;
}

export function getMockStandings(code: string): StandingsResponse {
  const standingsMap: Record<string, any> = ${JSON.stringify(realData.standings, null, 2)};
  if (standingsMap[code]) {
    return standingsMap[code];
  }
  return {
    competition: mockCompetitions.find((c) => c.code === code) || mockCompetitions[0],
    season: { id: 2026, currentMatchday: 6 },
    standings: [{ stage: 'REGULAR_SEASON', table: [] }],
  };
}

export function getMockTeamDetail(teamId: number): TeamDetail {
  return {
    id: teamId,
    name: 'Club #' + teamId,
    shortName: 'Club',
    tla: 'CLB',
    crest: 'https://crests.football-data.org/' + teamId + '.png',
    address: 'Stadium Way',
    website: 'https://example.com',
    founded: 1900,
    clubColors: 'Blue / White',
    venue: 'Home Arena',
    squad: [
      { id: 1, name: 'Darvozabon', position: 'Goalkeeper', dateOfBirth: '1995-05-10', nationality: 'Uzbekistan' },
      { id: 2, name: 'Himoyachi', position: 'Defence', dateOfBirth: '1998-08-14', nationality: 'Uzbekistan' },
      { id: 3, name: 'Yarim himoyachi', position: 'Midfield', dateOfBirth: '2000-01-20', nationality: 'Uzbekistan' },
      { id: 4, name: 'Hujumchi', position: 'Offence', dateOfBirth: '2002-11-03', nationality: 'Uzbekistan' },
    ],
  };
}
`;

fs.writeFileSync(path.join(__dirname, '../backend/src/services/mockData.ts'), backendMockContent, 'utf8');
console.log('Successfully updated backend/src/services/mockData.ts!');
