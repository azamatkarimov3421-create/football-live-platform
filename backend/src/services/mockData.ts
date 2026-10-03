import { Match, StandingsResponse, TeamDetail, Competition } from '../types';

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

export const REAL_API_MATCHES: Match[] = [
  {
    "id": 560591,
    "utcDate": "2026-09-18T19:00:00Z",
    "status": "IN_PLAY",
    "minute": 72,
    "matchday": 5,
    "competition": {
      "id": 2021,
      "name": "Premier League",
      "code": "PL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/PL.png",
      "area": {
        "id": 2072,
        "name": "England",
        "code": "ENG",
        "flag": "https://crests.football-data.org/770.svg"
      }
    },
    "homeTeam": {
      "id": 402,
      "name": "Brentford FC",
      "shortName": "Brentford",
      "tla": "BRE",
      "crest": "https://crests.football-data.org/402.png"
    },
    "awayTeam": {
      "id": 61,
      "name": "Chelsea FC",
      "shortName": "Chelsea",
      "tla": "CHE",
      "crest": "https://crests.football-data.org/61.png"
    },
    "score": {
      "winner": "HOME_TEAM",
      "duration": "REGULAR",
      "fullTime": {
        "home": 3,
        "away": 0
      },
      "halfTime": {
        "home": 0,
        "away": 0
      }
    },
    "extra": {
      "venue": "Brentford FC Stadium",
      "referee": "Andy Madley",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 560587,
    "utcDate": "2026-09-19T11:30:00Z",
    "status": "FINISHED",
    "minute": null,
    "matchday": 5,
    "competition": {
      "id": 2021,
      "name": "Premier League",
      "code": "PL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/PL.png",
      "area": {
        "id": 2072,
        "name": "England",
        "code": "ENG",
        "flag": "https://crests.football-data.org/770.svg"
      }
    },
    "homeTeam": {
      "id": 73,
      "name": "Tottenham Hotspur FC",
      "shortName": "Tottenham",
      "tla": "TOT",
      "crest": "https://crests.football-data.org/73.png"
    },
    "awayTeam": {
      "id": 58,
      "name": "Aston Villa FC",
      "shortName": "Aston Villa",
      "tla": "AVL",
      "crest": "https://crests.football-data.org/58.png"
    },
    "score": {
      "winner": "AWAY_TEAM",
      "duration": "REGULAR",
      "fullTime": {
        "home": 2,
        "away": 3
      },
      "halfTime": {
        "home": 0,
        "away": 1
      }
    },
    "extra": {
      "venue": "Tottenham Hotspur FC Stadium",
      "referee": "Sam Barrott",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 560584,
    "utcDate": "2026-09-19T14:00:00Z",
    "status": "FINISHED",
    "minute": null,
    "matchday": 5,
    "competition": {
      "id": 2021,
      "name": "Premier League",
      "code": "PL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/PL.png",
      "area": {
        "id": 2072,
        "name": "England",
        "code": "ENG",
        "flag": "https://crests.football-data.org/770.svg"
      }
    },
    "homeTeam": {
      "id": 62,
      "name": "Everton FC",
      "shortName": "Everton",
      "tla": "EVE",
      "crest": "https://crests.football-data.org/62.png"
    },
    "awayTeam": {
      "id": 349,
      "name": "Ipswich Town FC",
      "shortName": "Ipswich Town",
      "tla": "IPS",
      "crest": "https://crests.football-data.org/349.png"
    },
    "score": {
      "winner": "HOME_TEAM",
      "duration": "REGULAR",
      "fullTime": {
        "home": 1,
        "away": 0
      },
      "halfTime": {
        "home": 1,
        "away": 0
      }
    },
    "extra": {
      "venue": "Everton FC Stadium",
      "referee": "Stuart Attwell",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 560586,
    "utcDate": "2026-09-19T14:00:00Z",
    "status": "FINISHED",
    "minute": null,
    "matchday": 5,
    "competition": {
      "id": 2021,
      "name": "Premier League",
      "code": "PL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/PL.png",
      "area": {
        "id": 2072,
        "name": "England",
        "code": "ENG",
        "flag": "https://crests.football-data.org/770.svg"
      }
    },
    "homeTeam": {
      "id": 397,
      "name": "Brighton & Hove Albion FC",
      "shortName": "Brighton Hove",
      "tla": "BHA",
      "crest": "https://crests.football-data.org/397.png"
    },
    "awayTeam": {
      "id": 57,
      "name": "Arsenal FC",
      "shortName": "Arsenal",
      "tla": "ARS",
      "crest": "https://crests.football-data.org/57.png"
    },
    "score": {
      "winner": "HOME_TEAM",
      "duration": "REGULAR",
      "fullTime": {
        "home": 3,
        "away": 0
      },
      "halfTime": {
        "home": 2,
        "away": 0
      }
    },
    "extra": {
      "venue": "Brighton & Hove Albion FC Stadium",
      "referee": "Darren England",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 560588,
    "utcDate": "2026-09-19T14:00:00Z",
    "status": "FINISHED",
    "minute": null,
    "matchday": 5,
    "competition": {
      "id": 2021,
      "name": "Premier League",
      "code": "PL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/PL.png",
      "area": {
        "id": 2072,
        "name": "England",
        "code": "ENG",
        "flag": "https://crests.football-data.org/770.svg"
      }
    },
    "homeTeam": {
      "id": 67,
      "name": "Newcastle United FC",
      "shortName": "Newcastle",
      "tla": "NEW",
      "crest": "https://crests.football-data.org/67.png"
    },
    "awayTeam": {
      "id": 322,
      "name": "Hull City AFC",
      "shortName": "Hull City",
      "tla": "HUL",
      "crest": "https://crests.football-data.org/322.png"
    },
    "score": {
      "winner": "HOME_TEAM",
      "duration": "REGULAR",
      "fullTime": {
        "home": 2,
        "away": 1
      },
      "halfTime": {
        "home": 2,
        "away": 0
      }
    },
    "extra": {
      "venue": "Newcastle United FC Stadium",
      "referee": "Tony Harrington",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 560589,
    "utcDate": "2026-09-19T16:30:00Z",
    "status": "FINISHED",
    "minute": null,
    "matchday": 5,
    "competition": {
      "id": 2021,
      "name": "Premier League",
      "code": "PL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/PL.png",
      "area": {
        "id": 2072,
        "name": "England",
        "code": "ENG",
        "flag": "https://crests.football-data.org/770.svg"
      }
    },
    "homeTeam": {
      "id": 351,
      "name": "Nottingham Forest FC",
      "shortName": "Nottingham",
      "tla": "NOT",
      "crest": "https://crests.football-data.org/351.png"
    },
    "awayTeam": {
      "id": 1076,
      "name": "Coventry City FC",
      "shortName": "Coventry City",
      "tla": "COV",
      "crest": "https://crests.football-data.org/1076.png"
    },
    "score": {
      "winner": "AWAY_TEAM",
      "duration": "REGULAR",
      "fullTime": {
        "home": 0,
        "away": 1
      },
      "halfTime": {
        "home": 0,
        "away": 0
      }
    },
    "extra": {
      "venue": "Nottingham Forest FC Stadium",
      "referee": "Jarred Gillett",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 560582,
    "utcDate": "2026-09-20T13:00:00Z",
    "status": "FINISHED",
    "minute": null,
    "matchday": 5,
    "competition": {
      "id": 2021,
      "name": "Premier League",
      "code": "PL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/PL.png",
      "area": {
        "id": 2072,
        "name": "England",
        "code": "ENG",
        "flag": "https://crests.football-data.org/770.svg"
      }
    },
    "homeTeam": {
      "id": 1044,
      "name": "AFC Bournemouth",
      "shortName": "Bournemouth",
      "tla": "BOU",
      "crest": "https://crests.football-data.org/bournemouth.png"
    },
    "awayTeam": {
      "id": 64,
      "name": "Liverpool FC",
      "shortName": "Liverpool",
      "tla": "LIV",
      "crest": "https://crests.football-data.org/64.png"
    },
    "score": {
      "winner": "AWAY_TEAM",
      "duration": "REGULAR",
      "fullTime": {
        "home": 0,
        "away": 1
      },
      "halfTime": {
        "home": 0,
        "away": 0
      }
    },
    "extra": {
      "venue": "AFC Bournemouth Stadium",
      "referee": "Michael Oliver",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 560585,
    "utcDate": "2026-09-20T13:00:00Z",
    "status": "FINISHED",
    "minute": null,
    "matchday": 5,
    "competition": {
      "id": 2021,
      "name": "Premier League",
      "code": "PL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/PL.png",
      "area": {
        "id": 2072,
        "name": "England",
        "code": "ENG",
        "flag": "https://crests.football-data.org/770.svg"
      }
    },
    "homeTeam": {
      "id": 341,
      "name": "Leeds United FC",
      "shortName": "Leeds United",
      "tla": "LEE",
      "crest": "https://crests.football-data.org/341.png"
    },
    "awayTeam": {
      "id": 354,
      "name": "Crystal Palace FC",
      "shortName": "Crystal Palace",
      "tla": "CRY",
      "crest": "https://crests.football-data.org/354.png"
    },
    "score": {
      "winner": "DRAW",
      "duration": "REGULAR",
      "fullTime": {
        "home": 0,
        "away": 0
      },
      "halfTime": {
        "home": 0,
        "away": 0
      }
    },
    "extra": {
      "venue": "Leeds United FC Stadium",
      "referee": "Adam Herczeg",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 560590,
    "utcDate": "2026-09-20T13:00:00Z",
    "status": "FINISHED",
    "minute": null,
    "matchday": 5,
    "competition": {
      "id": 2021,
      "name": "Premier League",
      "code": "PL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/PL.png",
      "area": {
        "id": 2072,
        "name": "England",
        "code": "ENG",
        "flag": "https://crests.football-data.org/770.svg"
      }
    },
    "homeTeam": {
      "id": 65,
      "name": "Manchester City FC",
      "shortName": "Man City",
      "tla": "MCI",
      "crest": "https://crests.football-data.org/65.png"
    },
    "awayTeam": {
      "id": 71,
      "name": "Sunderland AFC",
      "shortName": "Sunderland",
      "tla": "SUN",
      "crest": "https://crests.football-data.org/71.png"
    },
    "score": {
      "winner": "HOME_TEAM",
      "duration": "REGULAR",
      "fullTime": {
        "home": 5,
        "away": 3
      },
      "halfTime": {
        "home": 3,
        "away": 2
      }
    },
    "extra": {
      "venue": "Manchester City FC Stadium",
      "referee": "Robert Jones",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 560583,
    "utcDate": "2026-09-20T15:30:00Z",
    "status": "FINISHED",
    "minute": null,
    "matchday": 5,
    "competition": {
      "id": 2021,
      "name": "Premier League",
      "code": "PL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/PL.png",
      "area": {
        "id": 2072,
        "name": "England",
        "code": "ENG",
        "flag": "https://crests.football-data.org/770.svg"
      }
    },
    "homeTeam": {
      "id": 63,
      "name": "Fulham FC",
      "shortName": "Fulham",
      "tla": "FUL",
      "crest": "https://crests.football-data.org/63.png"
    },
    "awayTeam": {
      "id": 66,
      "name": "Manchester United FC",
      "shortName": "Man United",
      "tla": "MUN",
      "crest": "https://crests.football-data.org/66.png"
    },
    "score": {
      "winner": "DRAW",
      "duration": "REGULAR",
      "fullTime": {
        "home": 1,
        "away": 1
      },
      "halfTime": {
        "home": 0,
        "away": 0
      }
    },
    "extra": {
      "venue": "Fulham FC Stadium",
      "referee": "Peter Bankes",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 560593,
    "utcDate": "2026-10-10T11:30:00Z",
    "status": "TIMED",
    "minute": null,
    "matchday": 6,
    "competition": {
      "id": 2021,
      "name": "Premier League",
      "code": "PL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/PL.png",
      "area": {
        "id": 2072,
        "name": "England",
        "code": "ENG",
        "flag": "https://crests.football-data.org/770.svg"
      }
    },
    "homeTeam": {
      "id": 57,
      "name": "Arsenal FC",
      "shortName": "Arsenal",
      "tla": "ARS",
      "crest": "https://crests.football-data.org/57.png"
    },
    "awayTeam": {
      "id": 341,
      "name": "Leeds United FC",
      "shortName": "Leeds United",
      "tla": "LEE",
      "crest": "https://crests.football-data.org/341.png"
    },
    "score": {
      "winner": null,
      "duration": "REGULAR",
      "fullTime": {
        "home": null,
        "away": null
      },
      "halfTime": {
        "home": null,
        "away": null
      }
    },
    "extra": {
      "venue": "Arsenal FC Stadium",
      "referee": "FIFA Official",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 560592,
    "utcDate": "2026-10-10T14:00:00Z",
    "status": "TIMED",
    "minute": null,
    "matchday": 6,
    "competition": {
      "id": 2021,
      "name": "Premier League",
      "code": "PL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/PL.png",
      "area": {
        "id": 2072,
        "name": "England",
        "code": "ENG",
        "flag": "https://crests.football-data.org/770.svg"
      }
    },
    "homeTeam": {
      "id": 71,
      "name": "Sunderland AFC",
      "shortName": "Sunderland",
      "tla": "SUN",
      "crest": "https://crests.football-data.org/71.png"
    },
    "awayTeam": {
      "id": 397,
      "name": "Brighton & Hove Albion FC",
      "shortName": "Brighton Hove",
      "tla": "BHA",
      "crest": "https://crests.football-data.org/397.png"
    },
    "score": {
      "winner": null,
      "duration": "REGULAR",
      "fullTime": {
        "home": null,
        "away": null
      },
      "halfTime": {
        "home": null,
        "away": null
      }
    },
    "extra": {
      "venue": "Sunderland AFC Stadium",
      "referee": "FIFA Official",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 560595,
    "utcDate": "2026-10-10T14:00:00Z",
    "status": "TIMED",
    "minute": null,
    "matchday": 6,
    "competition": {
      "id": 2021,
      "name": "Premier League",
      "code": "PL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/PL.png",
      "area": {
        "id": 2072,
        "name": "England",
        "code": "ENG",
        "flag": "https://crests.football-data.org/770.svg"
      }
    },
    "homeTeam": {
      "id": 61,
      "name": "Chelsea FC",
      "shortName": "Chelsea",
      "tla": "CHE",
      "crest": "https://crests.football-data.org/61.png"
    },
    "awayTeam": {
      "id": 1044,
      "name": "AFC Bournemouth",
      "shortName": "Bournemouth",
      "tla": "BOU",
      "crest": "https://crests.football-data.org/bournemouth.png"
    },
    "score": {
      "winner": null,
      "duration": "REGULAR",
      "fullTime": {
        "home": null,
        "away": null
      },
      "halfTime": {
        "home": null,
        "away": null
      }
    },
    "extra": {
      "venue": "Chelsea FC Stadium",
      "referee": "FIFA Official",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 560599,
    "utcDate": "2026-10-10T14:00:00Z",
    "status": "TIMED",
    "minute": null,
    "matchday": 6,
    "competition": {
      "id": 2021,
      "name": "Premier League",
      "code": "PL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/PL.png",
      "area": {
        "id": 2072,
        "name": "England",
        "code": "ENG",
        "flag": "https://crests.football-data.org/770.svg"
      }
    },
    "homeTeam": {
      "id": 349,
      "name": "Ipswich Town FC",
      "shortName": "Ipswich Town",
      "tla": "IPS",
      "crest": "https://crests.football-data.org/349.png"
    },
    "awayTeam": {
      "id": 63,
      "name": "Fulham FC",
      "shortName": "Fulham",
      "tla": "FUL",
      "crest": "https://crests.football-data.org/63.png"
    },
    "score": {
      "winner": null,
      "duration": "REGULAR",
      "fullTime": {
        "home": null,
        "away": null
      },
      "halfTime": {
        "home": null,
        "away": null
      }
    },
    "extra": {
      "venue": "Ipswich Town FC Stadium",
      "referee": "FIFA Official",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 560601,
    "utcDate": "2026-10-10T14:00:00Z",
    "status": "TIMED",
    "minute": null,
    "matchday": 6,
    "competition": {
      "id": 2021,
      "name": "Premier League",
      "code": "PL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/PL.png",
      "area": {
        "id": 2072,
        "name": "England",
        "code": "ENG",
        "flag": "https://crests.football-data.org/770.svg"
      }
    },
    "homeTeam": {
      "id": 58,
      "name": "Aston Villa FC",
      "shortName": "Aston Villa",
      "tla": "AVL",
      "crest": "https://crests.football-data.org/58.png"
    },
    "awayTeam": {
      "id": 402,
      "name": "Brentford FC",
      "shortName": "Brentford",
      "tla": "BRE",
      "crest": "https://crests.football-data.org/402.png"
    },
    "score": {
      "winner": null,
      "duration": "REGULAR",
      "fullTime": {
        "home": null,
        "away": null
      },
      "halfTime": {
        "home": null,
        "away": null
      }
    },
    "extra": {
      "venue": "Aston Villa FC Stadium",
      "referee": "FIFA Official",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 560600,
    "utcDate": "2026-10-10T16:30:00Z",
    "status": "TIMED",
    "minute": null,
    "matchday": 6,
    "competition": {
      "id": 2021,
      "name": "Premier League",
      "code": "PL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/PL.png",
      "area": {
        "id": 2072,
        "name": "England",
        "code": "ENG",
        "flag": "https://crests.football-data.org/770.svg"
      }
    },
    "homeTeam": {
      "id": 66,
      "name": "Manchester United FC",
      "shortName": "Man United",
      "tla": "MUN",
      "crest": "https://crests.football-data.org/66.png"
    },
    "awayTeam": {
      "id": 73,
      "name": "Tottenham Hotspur FC",
      "shortName": "Tottenham",
      "tla": "TOT",
      "crest": "https://crests.football-data.org/73.png"
    },
    "score": {
      "winner": null,
      "duration": "REGULAR",
      "fullTime": {
        "home": null,
        "away": null
      },
      "halfTime": {
        "home": null,
        "away": null
      }
    },
    "extra": {
      "venue": "Manchester United FC Stadium",
      "referee": "FIFA Official",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 560594,
    "utcDate": "2026-10-11T13:00:00Z",
    "status": "TIMED",
    "minute": null,
    "matchday": 6,
    "competition": {
      "id": 2021,
      "name": "Premier League",
      "code": "PL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/PL.png",
      "area": {
        "id": 2072,
        "name": "England",
        "code": "ENG",
        "flag": "https://crests.football-data.org/770.svg"
      }
    },
    "homeTeam": {
      "id": 322,
      "name": "Hull City AFC",
      "shortName": "Hull City",
      "tla": "HUL",
      "crest": "https://crests.football-data.org/322.png"
    },
    "awayTeam": {
      "id": 62,
      "name": "Everton FC",
      "shortName": "Everton",
      "tla": "EVE",
      "crest": "https://crests.football-data.org/62.png"
    },
    "score": {
      "winner": null,
      "duration": "REGULAR",
      "fullTime": {
        "home": null,
        "away": null
      },
      "halfTime": {
        "home": null,
        "away": null
      }
    },
    "extra": {
      "venue": "Hull City AFC Stadium",
      "referee": "FIFA Official",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 560596,
    "utcDate": "2026-10-11T13:00:00Z",
    "status": "TIMED",
    "minute": null,
    "matchday": 6,
    "competition": {
      "id": 2021,
      "name": "Premier League",
      "code": "PL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/PL.png",
      "area": {
        "id": 2072,
        "name": "England",
        "code": "ENG",
        "flag": "https://crests.football-data.org/770.svg"
      }
    },
    "homeTeam": {
      "id": 354,
      "name": "Crystal Palace FC",
      "shortName": "Crystal Palace",
      "tla": "CRY",
      "crest": "https://crests.football-data.org/354.png"
    },
    "awayTeam": {
      "id": 351,
      "name": "Nottingham Forest FC",
      "shortName": "Nottingham",
      "tla": "NOT",
      "crest": "https://crests.football-data.org/351.png"
    },
    "score": {
      "winner": null,
      "duration": "REGULAR",
      "fullTime": {
        "home": null,
        "away": null
      },
      "halfTime": {
        "home": null,
        "away": null
      }
    },
    "extra": {
      "venue": "Crystal Palace FC Stadium",
      "referee": "FIFA Official",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 560598,
    "utcDate": "2026-10-11T15:30:00Z",
    "status": "TIMED",
    "minute": null,
    "matchday": 6,
    "competition": {
      "id": 2021,
      "name": "Premier League",
      "code": "PL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/PL.png",
      "area": {
        "id": 2072,
        "name": "England",
        "code": "ENG",
        "flag": "https://crests.football-data.org/770.svg"
      }
    },
    "homeTeam": {
      "id": 64,
      "name": "Liverpool FC",
      "shortName": "Liverpool",
      "tla": "LIV",
      "crest": "https://crests.football-data.org/64.png"
    },
    "awayTeam": {
      "id": 65,
      "name": "Manchester City FC",
      "shortName": "Man City",
      "tla": "MCI",
      "crest": "https://crests.football-data.org/65.png"
    },
    "score": {
      "winner": null,
      "duration": "REGULAR",
      "fullTime": {
        "home": null,
        "away": null
      },
      "halfTime": {
        "home": null,
        "away": null
      }
    },
    "extra": {
      "venue": "Liverpool FC Stadium",
      "referee": "FIFA Official",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 560597,
    "utcDate": "2026-10-12T19:00:00Z",
    "status": "TIMED",
    "minute": null,
    "matchday": 6,
    "competition": {
      "id": 2021,
      "name": "Premier League",
      "code": "PL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/PL.png",
      "area": {
        "id": 2072,
        "name": "England",
        "code": "ENG",
        "flag": "https://crests.football-data.org/770.svg"
      }
    },
    "homeTeam": {
      "id": 1076,
      "name": "Coventry City FC",
      "shortName": "Coventry City",
      "tla": "COV",
      "crest": "https://crests.football-data.org/1076.png"
    },
    "awayTeam": {
      "id": 67,
      "name": "Newcastle United FC",
      "shortName": "Newcastle",
      "tla": "NEW",
      "crest": "https://crests.football-data.org/67.png"
    },
    "score": {
      "winner": null,
      "duration": "REGULAR",
      "fullTime": {
        "home": null,
        "away": null
      },
      "halfTime": {
        "home": null,
        "away": null
      }
    },
    "extra": {
      "venue": "Coventry City FC Stadium",
      "referee": "FIFA Official",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 564692,
    "utcDate": "2026-09-18T19:00:00Z",
    "status": "IN_PLAY",
    "minute": 54,
    "matchday": 7,
    "competition": {
      "id": 2014,
      "name": "Primera Division",
      "code": "PD",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/laliga.png",
      "area": {
        "id": 2224,
        "name": "Spain",
        "code": "ESP",
        "flag": "https://crests.football-data.org/760.svg"
      }
    },
    "homeTeam": {
      "id": 80,
      "name": "RCD Espanyol de Barcelona",
      "shortName": "Espanyol",
      "tla": "ESP",
      "crest": "https://crests.football-data.org/80.png"
    },
    "awayTeam": {
      "id": 285,
      "name": "Elche CF",
      "shortName": "Elche",
      "tla": "ELC",
      "crest": "https://crests.football-data.org/285.png"
    },
    "score": {
      "winner": "AWAY_TEAM",
      "duration": "REGULAR",
      "fullTime": {
        "home": 1,
        "away": 3
      },
      "halfTime": {
        "home": 0,
        "away": 2
      }
    },
    "extra": {
      "venue": "RCD Espanyol de Barcelona Stadium",
      "referee": "Jon González Esteban",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 564693,
    "utcDate": "2026-09-19T12:00:00Z",
    "status": "FINISHED",
    "minute": null,
    "matchday": 7,
    "competition": {
      "id": 2014,
      "name": "Primera Division",
      "code": "PD",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/laliga.png",
      "area": {
        "id": 2224,
        "name": "Spain",
        "code": "ESP",
        "flag": "https://crests.football-data.org/760.svg"
      }
    },
    "homeTeam": {
      "id": 79,
      "name": "CA Osasuna",
      "shortName": "Osasuna",
      "tla": "OSA",
      "crest": "https://crests.football-data.org/79.png"
    },
    "awayTeam": {
      "id": 87,
      "name": "Rayo Vallecano de Madrid",
      "shortName": "Rayo Vallecano",
      "tla": "RAY",
      "crest": "https://crests.football-data.org/87.png"
    },
    "score": {
      "winner": "DRAW",
      "duration": "REGULAR",
      "fullTime": {
        "home": 1,
        "away": 1
      },
      "halfTime": {
        "home": 1,
        "away": 0
      }
    },
    "extra": {
      "venue": "CA Osasuna Stadium",
      "referee": "Manuel Orellana Cid",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 564691,
    "utcDate": "2026-09-19T14:15:00Z",
    "status": "FINISHED",
    "minute": null,
    "matchday": 7,
    "competition": {
      "id": 2014,
      "name": "Primera Division",
      "code": "PD",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/laliga.png",
      "area": {
        "id": 2224,
        "name": "Spain",
        "code": "ESP",
        "flag": "https://crests.football-data.org/760.svg"
      }
    },
    "homeTeam": {
      "id": 77,
      "name": "Athletic Club",
      "shortName": "Athletic",
      "tla": "ATH",
      "crest": "https://crests.football-data.org/77.png"
    },
    "awayTeam": {
      "id": 263,
      "name": "Deportivo Alavés",
      "shortName": "Alavés",
      "tla": "ALA",
      "crest": "https://crests.football-data.org/263.png"
    },
    "score": {
      "winner": "DRAW",
      "duration": "REGULAR",
      "fullTime": {
        "home": 0,
        "away": 0
      },
      "halfTime": {
        "home": 0,
        "away": 0
      }
    },
    "extra": {
      "venue": "Athletic Club Stadium",
      "referee": "Víctor García Verdura",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 564694,
    "utcDate": "2026-09-19T16:30:00Z",
    "status": "FINISHED",
    "minute": null,
    "matchday": 7,
    "competition": {
      "id": 2014,
      "name": "Primera Division",
      "code": "PD",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/laliga.png",
      "area": {
        "id": 2224,
        "name": "Spain",
        "code": "ESP",
        "flag": "https://crests.football-data.org/760.svg"
      }
    },
    "homeTeam": {
      "id": 558,
      "name": "RC Celta de Vigo",
      "shortName": "Celta",
      "tla": "CEL",
      "crest": "https://crests.football-data.org/558.png"
    },
    "awayTeam": {
      "id": 5335,
      "name": "Real Racing Club de Santander",
      "shortName": "Santander",
      "tla": "SAN",
      "crest": "https://crests.football-data.org/5335.png"
    },
    "score": {
      "winner": "HOME_TEAM",
      "duration": "REGULAR",
      "fullTime": {
        "home": 5,
        "away": 0
      },
      "halfTime": {
        "home": 2,
        "away": 0
      }
    },
    "extra": {
      "venue": "RC Celta de Vigo Stadium",
      "referee": "Ricardo de Burgos",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 564690,
    "utcDate": "2026-09-19T19:00:00Z",
    "status": "FINISHED",
    "minute": null,
    "matchday": 7,
    "competition": {
      "id": 2014,
      "name": "Primera Division",
      "code": "PD",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/laliga.png",
      "area": {
        "id": 2224,
        "name": "Spain",
        "code": "ESP",
        "flag": "https://crests.football-data.org/760.svg"
      }
    },
    "homeTeam": {
      "id": 559,
      "name": "Sevilla FC",
      "shortName": "Sevilla FC",
      "tla": "SEV",
      "crest": "https://crests.football-data.org/559.png"
    },
    "awayTeam": {
      "id": 81,
      "name": "FC Barcelona",
      "shortName": "Barça",
      "tla": "FCB",
      "crest": "https://crests.football-data.org/81.png"
    },
    "score": {
      "winner": "AWAY_TEAM",
      "duration": "REGULAR",
      "fullTime": {
        "home": 1,
        "away": 3
      },
      "halfTime": {
        "home": 1,
        "away": 1
      }
    },
    "extra": {
      "venue": "Sevilla FC Stadium",
      "referee": "Juan Martínez Munuera",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 564697,
    "utcDate": "2026-09-20T12:00:00Z",
    "status": "FINISHED",
    "minute": null,
    "matchday": 7,
    "competition": {
      "id": 2014,
      "name": "Primera Division",
      "code": "PD",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/laliga.png",
      "area": {
        "id": 2224,
        "name": "Spain",
        "code": "ESP",
        "flag": "https://crests.football-data.org/760.svg"
      }
    },
    "homeTeam": {
      "id": 82,
      "name": "Getafe CF",
      "shortName": "Getafe",
      "tla": "GET",
      "crest": "https://crests.football-data.org/82.png"
    },
    "awayTeam": {
      "id": 84,
      "name": "Málaga CF",
      "shortName": "Málaga",
      "tla": "MAL",
      "crest": "https://crests.football-data.org/84.png"
    },
    "score": {
      "winner": "HOME_TEAM",
      "duration": "REGULAR",
      "fullTime": {
        "home": 1,
        "away": 0
      },
      "halfTime": {
        "home": 0,
        "away": 0
      }
    },
    "extra": {
      "venue": "Getafe CF Stadium",
      "referee": "Javier Alberola Rojas",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 564688,
    "utcDate": "2026-09-20T14:15:00Z",
    "status": "FINISHED",
    "minute": null,
    "matchday": 7,
    "competition": {
      "id": 2014,
      "name": "Primera Division",
      "code": "PD",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/laliga.png",
      "area": {
        "id": 2224,
        "name": "Spain",
        "code": "ESP",
        "flag": "https://crests.football-data.org/760.svg"
      }
    },
    "homeTeam": {
      "id": 78,
      "name": "Club Atlético de Madrid",
      "shortName": "Atleti",
      "tla": "ATL",
      "crest": "https://crests.football-data.org/78.png"
    },
    "awayTeam": {
      "id": 86,
      "name": "Real Madrid CF",
      "shortName": "Real Madrid",
      "tla": "RMA",
      "crest": "https://crests.football-data.org/86.png"
    },
    "score": {
      "winner": "HOME_TEAM",
      "duration": "REGULAR",
      "fullTime": {
        "home": 2,
        "away": 1
      },
      "halfTime": {
        "home": 0,
        "away": 0
      }
    },
    "extra": {
      "venue": "Club Atlético de Madrid Stadium",
      "referee": "Miguel Ortiz Arias",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 564695,
    "utcDate": "2026-09-20T16:30:00Z",
    "status": "FINISHED",
    "minute": null,
    "matchday": 7,
    "competition": {
      "id": 2014,
      "name": "Primera Division",
      "code": "PD",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/laliga.png",
      "area": {
        "id": 2224,
        "name": "Spain",
        "code": "ESP",
        "flag": "https://crests.football-data.org/760.svg"
      }
    },
    "homeTeam": {
      "id": 560,
      "name": "RC Deportivo La Coruña",
      "shortName": "Deportivo",
      "tla": "DEP",
      "crest": "https://crests.football-data.org/560.png"
    },
    "awayTeam": {
      "id": 90,
      "name": "Real Betis Balompié",
      "shortName": "Real Betis",
      "tla": "BET",
      "crest": "https://crests.football-data.org/90.png"
    },
    "score": {
      "winner": "DRAW",
      "duration": "REGULAR",
      "fullTime": {
        "home": 1,
        "away": 1
      },
      "halfTime": {
        "home": 0,
        "away": 1
      }
    },
    "extra": {
      "venue": "RC Deportivo La Coruña Stadium",
      "referee": "César Soto Grado",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 564696,
    "utcDate": "2026-09-20T16:30:00Z",
    "status": "FINISHED",
    "minute": null,
    "matchday": 7,
    "competition": {
      "id": 2014,
      "name": "Primera Division",
      "code": "PD",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/laliga.png",
      "area": {
        "id": 2224,
        "name": "Spain",
        "code": "ESP",
        "flag": "https://crests.football-data.org/760.svg"
      }
    },
    "homeTeam": {
      "id": 94,
      "name": "Villarreal CF",
      "shortName": "Villarreal",
      "tla": "VIL",
      "crest": "https://crests.football-data.org/94.png"
    },
    "awayTeam": {
      "id": 88,
      "name": "Levante UD",
      "shortName": "Levante",
      "tla": "LEV",
      "crest": "https://crests.football-data.org/88.png"
    },
    "score": {
      "winner": "HOME_TEAM",
      "duration": "REGULAR",
      "fullTime": {
        "home": 3,
        "away": 1
      },
      "halfTime": {
        "home": 1,
        "away": 1
      }
    },
    "extra": {
      "venue": "Villarreal CF Stadium",
      "referee": "Mateo Busquets Ferrer",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 564689,
    "utcDate": "2026-09-20T19:00:00Z",
    "status": "FINISHED",
    "minute": null,
    "matchday": 7,
    "competition": {
      "id": 2014,
      "name": "Primera Division",
      "code": "PD",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/laliga.png",
      "area": {
        "id": 2224,
        "name": "Spain",
        "code": "ESP",
        "flag": "https://crests.football-data.org/760.svg"
      }
    },
    "homeTeam": {
      "id": 95,
      "name": "Valencia CF",
      "shortName": "Valencia",
      "tla": "VAL",
      "crest": "https://crests.football-data.org/95.png"
    },
    "awayTeam": {
      "id": 92,
      "name": "Real Sociedad de Fútbol",
      "shortName": "Real Sociedad",
      "tla": "RSO",
      "crest": "https://crests.football-data.org/92.png"
    },
    "score": {
      "winner": "AWAY_TEAM",
      "duration": "REGULAR",
      "fullTime": {
        "home": 2,
        "away": 3
      },
      "halfTime": {
        "home": 0,
        "away": 1
      }
    },
    "extra": {
      "venue": "Valencia CF Stadium",
      "referee": "José Munuera Montero",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 564706,
    "utcDate": "2026-10-09T19:00:00Z",
    "status": "TIMED",
    "minute": null,
    "matchday": 8,
    "competition": {
      "id": 2014,
      "name": "Primera Division",
      "code": "PD",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/laliga.png",
      "area": {
        "id": 2224,
        "name": "Spain",
        "code": "ESP",
        "flag": "https://crests.football-data.org/760.svg"
      }
    },
    "homeTeam": {
      "id": 84,
      "name": "Málaga CF",
      "shortName": "Málaga",
      "tla": "MAL",
      "crest": "https://crests.football-data.org/84.png"
    },
    "awayTeam": {
      "id": 80,
      "name": "RCD Espanyol de Barcelona",
      "shortName": "Espanyol",
      "tla": "ESP",
      "crest": "https://crests.football-data.org/80.png"
    },
    "score": {
      "winner": null,
      "duration": "REGULAR",
      "fullTime": {
        "home": null,
        "away": null
      },
      "halfTime": {
        "home": null,
        "away": null
      }
    },
    "extra": {
      "venue": "Málaga CF Stadium",
      "referee": "FIFA Official",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 564698,
    "utcDate": "2026-10-10T12:00:00Z",
    "status": "TIMED",
    "minute": null,
    "matchday": 8,
    "competition": {
      "id": 2014,
      "name": "Primera Division",
      "code": "PD",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/laliga.png",
      "area": {
        "id": 2224,
        "name": "Spain",
        "code": "ESP",
        "flag": "https://crests.football-data.org/760.svg"
      }
    },
    "homeTeam": {
      "id": 87,
      "name": "Rayo Vallecano de Madrid",
      "shortName": "Rayo Vallecano",
      "tla": "RAY",
      "crest": "https://crests.football-data.org/87.png"
    },
    "awayTeam": {
      "id": 77,
      "name": "Athletic Club",
      "shortName": "Athletic",
      "tla": "ATH",
      "crest": "https://crests.football-data.org/77.png"
    },
    "score": {
      "winner": null,
      "duration": "REGULAR",
      "fullTime": {
        "home": null,
        "away": null
      },
      "halfTime": {
        "home": null,
        "away": null
      }
    },
    "extra": {
      "venue": "Rayo Vallecano de Madrid Stadium",
      "referee": "FIFA Official",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 564699,
    "utcDate": "2026-10-10T14:15:00Z",
    "status": "TIMED",
    "minute": null,
    "matchday": 8,
    "competition": {
      "id": 2014,
      "name": "Primera Division",
      "code": "PD",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/laliga.png",
      "area": {
        "id": 2224,
        "name": "Spain",
        "code": "ESP",
        "flag": "https://crests.football-data.org/760.svg"
      }
    },
    "homeTeam": {
      "id": 263,
      "name": "Deportivo Alavés",
      "shortName": "Alavés",
      "tla": "ALA",
      "crest": "https://crests.football-data.org/263.png"
    },
    "awayTeam": {
      "id": 78,
      "name": "Club Atlético de Madrid",
      "shortName": "Atleti",
      "tla": "ATL",
      "crest": "https://crests.football-data.org/78.png"
    },
    "score": {
      "winner": null,
      "duration": "REGULAR",
      "fullTime": {
        "home": null,
        "away": null
      },
      "halfTime": {
        "home": null,
        "away": null
      }
    },
    "extra": {
      "venue": "Deportivo Alavés Stadium",
      "referee": "FIFA Official",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 564700,
    "utcDate": "2026-10-10T16:30:00Z",
    "status": "TIMED",
    "minute": null,
    "matchday": 8,
    "competition": {
      "id": 2014,
      "name": "Primera Division",
      "code": "PD",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/laliga.png",
      "area": {
        "id": 2224,
        "name": "Spain",
        "code": "ESP",
        "flag": "https://crests.football-data.org/760.svg"
      }
    },
    "homeTeam": {
      "id": 81,
      "name": "FC Barcelona",
      "shortName": "Barça",
      "tla": "FCB",
      "crest": "https://crests.football-data.org/81.png"
    },
    "awayTeam": {
      "id": 82,
      "name": "Getafe CF",
      "shortName": "Getafe",
      "tla": "GET",
      "crest": "https://crests.football-data.org/82.png"
    },
    "score": {
      "winner": null,
      "duration": "REGULAR",
      "fullTime": {
        "home": null,
        "away": null
      },
      "halfTime": {
        "home": null,
        "away": null
      }
    },
    "extra": {
      "venue": "FC Barcelona Stadium",
      "referee": "FIFA Official",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 564702,
    "utcDate": "2026-10-10T19:00:00Z",
    "status": "TIMED",
    "minute": null,
    "matchday": 8,
    "competition": {
      "id": 2014,
      "name": "Primera Division",
      "code": "PD",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/laliga.png",
      "area": {
        "id": 2224,
        "name": "Spain",
        "code": "ESP",
        "flag": "https://crests.football-data.org/760.svg"
      }
    },
    "homeTeam": {
      "id": 86,
      "name": "Real Madrid CF",
      "shortName": "Real Madrid",
      "tla": "RMA",
      "crest": "https://crests.football-data.org/86.png"
    },
    "awayTeam": {
      "id": 94,
      "name": "Villarreal CF",
      "shortName": "Villarreal",
      "tla": "VIL",
      "crest": "https://crests.football-data.org/94.png"
    },
    "score": {
      "winner": null,
      "duration": "REGULAR",
      "fullTime": {
        "home": null,
        "away": null
      },
      "halfTime": {
        "home": null,
        "away": null
      }
    },
    "extra": {
      "venue": "Real Madrid CF Stadium",
      "referee": "FIFA Official",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 564703,
    "utcDate": "2026-10-11T12:00:00Z",
    "status": "TIMED",
    "minute": null,
    "matchday": 8,
    "competition": {
      "id": 2014,
      "name": "Primera Division",
      "code": "PD",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/laliga.png",
      "area": {
        "id": 2224,
        "name": "Spain",
        "code": "ESP",
        "flag": "https://crests.football-data.org/760.svg"
      }
    },
    "homeTeam": {
      "id": 285,
      "name": "Elche CF",
      "shortName": "Elche",
      "tla": "ELC",
      "crest": "https://crests.football-data.org/285.png"
    },
    "awayTeam": {
      "id": 558,
      "name": "RC Celta de Vigo",
      "shortName": "Celta",
      "tla": "CEL",
      "crest": "https://crests.football-data.org/558.png"
    },
    "score": {
      "winner": null,
      "duration": "REGULAR",
      "fullTime": {
        "home": null,
        "away": null
      },
      "halfTime": {
        "home": null,
        "away": null
      }
    },
    "extra": {
      "venue": "Elche CF Stadium",
      "referee": "FIFA Official",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 564707,
    "utcDate": "2026-10-11T14:15:00Z",
    "status": "TIMED",
    "minute": null,
    "matchday": 8,
    "competition": {
      "id": 2014,
      "name": "Primera Division",
      "code": "PD",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/laliga.png",
      "area": {
        "id": 2224,
        "name": "Spain",
        "code": "ESP",
        "flag": "https://crests.football-data.org/760.svg"
      }
    },
    "homeTeam": {
      "id": 92,
      "name": "Real Sociedad de Fútbol",
      "shortName": "Real Sociedad",
      "tla": "RSO",
      "crest": "https://crests.football-data.org/92.png"
    },
    "awayTeam": {
      "id": 560,
      "name": "RC Deportivo La Coruña",
      "shortName": "Deportivo",
      "tla": "DEP",
      "crest": "https://crests.football-data.org/560.png"
    },
    "score": {
      "winner": null,
      "duration": "REGULAR",
      "fullTime": {
        "home": null,
        "away": null
      },
      "halfTime": {
        "home": null,
        "away": null
      }
    },
    "extra": {
      "venue": "Real Sociedad de Fútbol Stadium",
      "referee": "FIFA Official",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 564701,
    "utcDate": "2026-10-11T16:30:00Z",
    "status": "TIMED",
    "minute": null,
    "matchday": 8,
    "competition": {
      "id": 2014,
      "name": "Primera Division",
      "code": "PD",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/laliga.png",
      "area": {
        "id": 2224,
        "name": "Spain",
        "code": "ESP",
        "flag": "https://crests.football-data.org/760.svg"
      }
    },
    "homeTeam": {
      "id": 90,
      "name": "Real Betis Balompié",
      "shortName": "Real Betis",
      "tla": "BET",
      "crest": "https://crests.football-data.org/90.png"
    },
    "awayTeam": {
      "id": 79,
      "name": "CA Osasuna",
      "shortName": "Osasuna",
      "tla": "OSA",
      "crest": "https://crests.football-data.org/79.png"
    },
    "score": {
      "winner": null,
      "duration": "REGULAR",
      "fullTime": {
        "home": null,
        "away": null
      },
      "halfTime": {
        "home": null,
        "away": null
      }
    },
    "extra": {
      "venue": "Real Betis Balompié Stadium",
      "referee": "FIFA Official",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 564705,
    "utcDate": "2026-10-11T19:00:00Z",
    "status": "TIMED",
    "minute": null,
    "matchday": 8,
    "competition": {
      "id": 2014,
      "name": "Primera Division",
      "code": "PD",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/laliga.png",
      "area": {
        "id": 2224,
        "name": "Spain",
        "code": "ESP",
        "flag": "https://crests.football-data.org/760.svg"
      }
    },
    "homeTeam": {
      "id": 5335,
      "name": "Real Racing Club de Santander",
      "shortName": "Santander",
      "tla": "SAN",
      "crest": "https://crests.football-data.org/5335.png"
    },
    "awayTeam": {
      "id": 95,
      "name": "Valencia CF",
      "shortName": "Valencia",
      "tla": "VAL",
      "crest": "https://crests.football-data.org/95.png"
    },
    "score": {
      "winner": null,
      "duration": "REGULAR",
      "fullTime": {
        "home": null,
        "away": null
      },
      "halfTime": {
        "home": null,
        "away": null
      }
    },
    "extra": {
      "venue": "Real Racing Club de Santander Stadium",
      "referee": "FIFA Official",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 564704,
    "utcDate": "2026-10-12T19:00:00Z",
    "status": "TIMED",
    "minute": null,
    "matchday": 8,
    "competition": {
      "id": 2014,
      "name": "Primera Division",
      "code": "PD",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/laliga.png",
      "area": {
        "id": 2224,
        "name": "Spain",
        "code": "ESP",
        "flag": "https://crests.football-data.org/760.svg"
      }
    },
    "homeTeam": {
      "id": 88,
      "name": "Levante UD",
      "shortName": "Levante",
      "tla": "LEV",
      "crest": "https://crests.football-data.org/88.png"
    },
    "awayTeam": {
      "id": 559,
      "name": "Sevilla FC",
      "shortName": "Sevilla FC",
      "tla": "SEV",
      "crest": "https://crests.football-data.org/559.png"
    },
    "score": {
      "winner": null,
      "duration": "REGULAR",
      "fullTime": {
        "home": null,
        "away": null
      },
      "halfTime": {
        "home": null,
        "away": null
      }
    },
    "extra": {
      "venue": "Levante UD Stadium",
      "referee": "FIFA Official",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 575331,
    "utcDate": "2026-09-09T19:00:00Z",
    "status": "FINISHED",
    "minute": null,
    "matchday": 1,
    "competition": {
      "id": 2001,
      "name": "UEFA Champions League",
      "code": "CL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/CL.png",
      "area": {
        "id": 2077,
        "name": "Europe",
        "code": "EUR",
        "flag": "https://crests.football-data.org/EUR.svg"
      }
    },
    "homeTeam": {
      "id": 64,
      "name": "Liverpool FC",
      "shortName": "Liverpool",
      "tla": "LIV",
      "crest": "https://crests.football-data.org/64.png"
    },
    "awayTeam": {
      "id": 78,
      "name": "Club Atlético de Madrid",
      "shortName": "Atleti",
      "tla": "ATL",
      "crest": "https://crests.football-data.org/78.png"
    },
    "score": {
      "winner": "HOME_TEAM",
      "duration": "REGULAR",
      "fullTime": {
        "home": 2,
        "away": 1
      },
      "halfTime": {
        "home": 1,
        "away": 1
      }
    },
    "extra": {
      "venue": "Liverpool FC Stadium",
      "referee": "Davide Massa",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 575332,
    "utcDate": "2026-09-09T19:00:00Z",
    "status": "FINISHED",
    "minute": null,
    "matchday": 1,
    "competition": {
      "id": 2001,
      "name": "UEFA Champions League",
      "code": "CL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/CL.png",
      "area": {
        "id": 2077,
        "name": "Europe",
        "code": "EUR",
        "flag": "https://crests.football-data.org/EUR.svg"
      }
    },
    "homeTeam": {
      "id": 524,
      "name": "Paris Saint-Germain FC",
      "shortName": "PSG",
      "tla": "PSG",
      "crest": "https://crests.football-data.org/524.png"
    },
    "awayTeam": {
      "id": 7509,
      "name": "ŠK Slovan Bratislava",
      "shortName": "Sl. Bratislava",
      "tla": "SBA",
      "crest": "https://crests.football-data.org/7509.png"
    },
    "score": {
      "winner": "HOME_TEAM",
      "duration": "REGULAR",
      "fullTime": {
        "home": 6,
        "away": 1
      },
      "halfTime": {
        "home": 3,
        "away": 0
      }
    },
    "extra": {
      "venue": "Paris Saint-Germain FC Stadium",
      "referee": "Mikola Balakin",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 575333,
    "utcDate": "2026-09-09T19:00:00Z",
    "status": "FINISHED",
    "minute": null,
    "matchday": 1,
    "competition": {
      "id": 2001,
      "name": "UEFA Champions League",
      "code": "CL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/CL.png",
      "area": {
        "id": 2077,
        "name": "Europe",
        "code": "EUR",
        "flag": "https://crests.football-data.org/EUR.svg"
      }
    },
    "homeTeam": {
      "id": 113,
      "name": "SSC Napoli",
      "shortName": "Napoli",
      "tla": "NAP",
      "crest": "https://crests.football-data.org/113.png"
    },
    "awayTeam": {
      "id": 57,
      "name": "Arsenal FC",
      "shortName": "Arsenal",
      "tla": "ARS",
      "crest": "https://crests.football-data.org/57.png"
    },
    "score": {
      "winner": "AWAY_TEAM",
      "duration": "REGULAR",
      "fullTime": {
        "home": 0,
        "away": 1
      },
      "halfTime": {
        "home": 0,
        "away": 0
      }
    },
    "extra": {
      "venue": "SSC Napoli Stadium",
      "referee": "Glenn Nyberg",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 575334,
    "utcDate": "2026-09-09T19:00:00Z",
    "status": "FINISHED",
    "minute": null,
    "matchday": 1,
    "competition": {
      "id": 2001,
      "name": "UEFA Champions League",
      "code": "CL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/CL.png",
      "area": {
        "id": 2077,
        "name": "Europe",
        "code": "EUR",
        "flag": "https://crests.football-data.org/EUR.svg"
      }
    },
    "homeTeam": {
      "id": 498,
      "name": "Sporting Clube de Portugal",
      "shortName": "Sporting CP",
      "tla": "SPO",
      "crest": "https://crests.football-data.org/498.png"
    },
    "awayTeam": {
      "id": 610,
      "name": "Galatasaray SK",
      "shortName": "Galatasaray",
      "tla": "GAL",
      "crest": "https://crests.football-data.org/610.png"
    },
    "score": {
      "winner": "HOME_TEAM",
      "duration": "REGULAR",
      "fullTime": {
        "home": 3,
        "away": 1
      },
      "halfTime": {
        "home": 1,
        "away": 1
      }
    },
    "extra": {
      "venue": "Sporting Clube de Portugal Stadium",
      "referee": "Espen Eskås",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 575335,
    "utcDate": "2026-09-10T16:45:00Z",
    "status": "FINISHED",
    "minute": null,
    "matchday": 1,
    "competition": {
      "id": 2001,
      "name": "UEFA Champions League",
      "code": "CL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/CL.png",
      "area": {
        "id": 2077,
        "name": "Europe",
        "code": "EUR",
        "flag": "https://crests.football-data.org/EUR.svg"
      }
    },
    "homeTeam": {
      "id": 613,
      "name": "Fenerbahçe SK",
      "shortName": "Fenerbahçe",
      "tla": "FEN",
      "crest": "https://crests.football-data.org/613.png"
    },
    "awayTeam": {
      "id": 100,
      "name": "AS Roma",
      "shortName": "Roma",
      "tla": "ROM",
      "crest": "https://crests.football-data.org/100.png"
    },
    "score": {
      "winner": "DRAW",
      "duration": "REGULAR",
      "fullTime": {
        "home": 1,
        "away": 1
      },
      "halfTime": {
        "home": 0,
        "away": 1
      }
    },
    "extra": {
      "venue": "Fenerbahçe SK Stadium",
      "referee": "Jesús Gil Manzano",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 575336,
    "utcDate": "2026-09-10T16:45:00Z",
    "status": "FINISHED",
    "minute": null,
    "matchday": 1,
    "competition": {
      "id": 2001,
      "name": "UEFA Champions League",
      "code": "CL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/CL.png",
      "area": {
        "id": 2077,
        "name": "Europe",
        "code": "EUR",
        "flag": "https://crests.football-data.org/EUR.svg"
      }
    },
    "homeTeam": {
      "id": 674,
      "name": "PSV",
      "shortName": "PSV",
      "tla": "PSV",
      "crest": "https://crests.football-data.org/674.png"
    },
    "awayTeam": {
      "id": 1887,
      "name": "FK Shakhtar Donetsk",
      "shortName": "Shaktar",
      "tla": "SHD",
      "crest": "https://crests.football-data.org/1887.png"
    },
    "score": {
      "winner": "DRAW",
      "duration": "REGULAR",
      "fullTime": {
        "home": 1,
        "away": 1
      },
      "halfTime": {
        "home": 0,
        "away": 1
      }
    },
    "extra": {
      "venue": "PSV Stadium",
      "referee": "Halil Meler",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 575337,
    "utcDate": "2026-09-10T19:00:00Z",
    "status": "FINISHED",
    "minute": null,
    "matchday": 1,
    "competition": {
      "id": 2001,
      "name": "UEFA Champions League",
      "code": "CL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/CL.png",
      "area": {
        "id": 2077,
        "name": "Europe",
        "code": "EUR",
        "flag": "https://crests.football-data.org/EUR.svg"
      }
    },
    "homeTeam": {
      "id": 5,
      "name": "FC Bayern München",
      "shortName": "Bayern",
      "tla": "FCB",
      "crest": "https://crests.football-data.org/5.png"
    },
    "awayTeam": {
      "id": 5721,
      "name": "FK Bodø/Glimt",
      "shortName": "Bodø/Glimt",
      "tla": "FK",
      "crest": "https://crests.football-data.org/5721.png"
    },
    "score": {
      "winner": "HOME_TEAM",
      "duration": "REGULAR",
      "fullTime": {
        "home": 5,
        "away": 0
      },
      "halfTime": {
        "home": 0,
        "away": 0
      }
    },
    "extra": {
      "venue": "FC Bayern München Stadium",
      "referee": "Rade Obrenović",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 575338,
    "utcDate": "2026-09-10T19:00:00Z",
    "status": "FINISHED",
    "minute": null,
    "matchday": 1,
    "competition": {
      "id": 2001,
      "name": "UEFA Champions League",
      "code": "CL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/CL.png",
      "area": {
        "id": 2077,
        "name": "Europe",
        "code": "EUR",
        "flag": "https://crests.football-data.org/EUR.svg"
      }
    },
    "homeTeam": {
      "id": 66,
      "name": "Manchester United FC",
      "shortName": "Man United",
      "tla": "MUN",
      "crest": "https://crests.football-data.org/66.png"
    },
    "awayTeam": {
      "id": 10233,
      "name": "Sabah FK",
      "shortName": "Sabah FK",
      "tla": "SAB",
      "crest": "https://crests.football-data.org/10233.png"
    },
    "score": {
      "winner": "HOME_TEAM",
      "duration": "REGULAR",
      "fullTime": {
        "home": 4,
        "away": 0
      },
      "halfTime": {
        "home": 3,
        "away": 0
      }
    },
    "extra": {
      "venue": "Manchester United FC Stadium",
      "referee": "Willy Delajod",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 575339,
    "utcDate": "2026-09-10T19:00:00Z",
    "status": "FINISHED",
    "minute": null,
    "matchday": 1,
    "competition": {
      "id": 2001,
      "name": "UEFA Champions League",
      "code": "CL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/CL.png",
      "area": {
        "id": 2077,
        "name": "Europe",
        "code": "EUR",
        "flag": "https://crests.football-data.org/EUR.svg"
      }
    },
    "homeTeam": {
      "id": 7397,
      "name": "Como 1907",
      "shortName": "Como 1907",
      "tla": "COM",
      "crest": "https://crests.football-data.org/7397.png"
    },
    "awayTeam": {
      "id": 721,
      "name": "RB Leipzig",
      "shortName": "RB Leipzig",
      "tla": "RBL",
      "crest": "https://crests.football-data.org/721.png"
    },
    "score": {
      "winner": "HOME_TEAM",
      "duration": "REGULAR",
      "fullTime": {
        "home": 4,
        "away": 1
      },
      "halfTime": {
        "home": 2,
        "away": 0
      }
    },
    "extra": {
      "venue": "Como 1907 Stadium",
      "referee": "Serdar Gözübüyük",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 575340,
    "utcDate": "2026-09-10T19:00:00Z",
    "status": "FINISHED",
    "minute": null,
    "matchday": 1,
    "competition": {
      "id": 2001,
      "name": "UEFA Champions League",
      "code": "CL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/CL.png",
      "area": {
        "id": 2077,
        "name": "Europe",
        "code": "EUR",
        "flag": "https://crests.football-data.org/EUR.svg"
      }
    },
    "homeTeam": {
      "id": 930,
      "name": "SK Slavia Praha",
      "shortName": "Slavia Praha",
      "tla": "SLP",
      "crest": "https://crests.football-data.org/930.png"
    },
    "awayTeam": {
      "id": 546,
      "name": "Racing Club de Lens",
      "shortName": "RC Lens",
      "tla": "RCL",
      "crest": "https://crests.football-data.org/546.png"
    },
    "score": {
      "winner": "AWAY_TEAM",
      "duration": "REGULAR",
      "fullTime": {
        "home": 2,
        "away": 3
      },
      "halfTime": {
        "home": 0,
        "away": 0
      }
    },
    "extra": {
      "venue": "SK Slavia Praha Stadium",
      "referee": "Vasilios Fotias",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 575341,
    "utcDate": "2026-10-13T16:45:00Z",
    "status": "TIMED",
    "minute": null,
    "matchday": 2,
    "competition": {
      "id": 2001,
      "name": "UEFA Champions League",
      "code": "CL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/CL.png",
      "area": {
        "id": 2077,
        "name": "Europe",
        "code": "EUR",
        "flag": "https://crests.football-data.org/EUR.svg"
      }
    },
    "homeTeam": {
      "id": 546,
      "name": "Racing Club de Lens",
      "shortName": "RC Lens",
      "tla": "RCL",
      "crest": "https://crests.football-data.org/546.png"
    },
    "awayTeam": {
      "id": 498,
      "name": "Sporting Clube de Portugal",
      "shortName": "Sporting CP",
      "tla": "SPO",
      "crest": "https://crests.football-data.org/498.png"
    },
    "score": {
      "winner": null,
      "duration": "REGULAR",
      "fullTime": {
        "home": null,
        "away": null
      },
      "halfTime": {
        "home": null,
        "away": null
      }
    },
    "extra": {
      "venue": "Racing Club de Lens Stadium",
      "referee": "FIFA Official",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 575342,
    "utcDate": "2026-10-13T16:45:00Z",
    "status": "TIMED",
    "minute": null,
    "matchday": 2,
    "competition": {
      "id": 2001,
      "name": "UEFA Champions League",
      "code": "CL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/CL.png",
      "area": {
        "id": 2077,
        "name": "Europe",
        "code": "EUR",
        "flag": "https://crests.football-data.org/EUR.svg"
      }
    },
    "homeTeam": {
      "id": 10233,
      "name": "Sabah FK",
      "shortName": "Sabah FK",
      "tla": "SAB",
      "crest": "https://crests.football-data.org/10233.png"
    },
    "awayTeam": {
      "id": 930,
      "name": "SK Slavia Praha",
      "shortName": "Slavia Praha",
      "tla": "SLP",
      "crest": "https://crests.football-data.org/930.png"
    },
    "score": {
      "winner": null,
      "duration": "REGULAR",
      "fullTime": {
        "home": null,
        "away": null
      },
      "halfTime": {
        "home": null,
        "away": null
      }
    },
    "extra": {
      "venue": "Sabah FK Stadium",
      "referee": "FIFA Official",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 575343,
    "utcDate": "2026-10-13T19:00:00Z",
    "status": "TIMED",
    "minute": null,
    "matchday": 2,
    "competition": {
      "id": 2001,
      "name": "UEFA Champions League",
      "code": "CL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/CL.png",
      "area": {
        "id": 2077,
        "name": "Europe",
        "code": "EUR",
        "flag": "https://crests.football-data.org/EUR.svg"
      }
    },
    "homeTeam": {
      "id": 108,
      "name": "FC Internazionale Milano",
      "shortName": "Inter",
      "tla": "INT",
      "crest": "https://crests.football-data.org/108.png"
    },
    "awayTeam": {
      "id": 851,
      "name": "Club Brugge KV",
      "shortName": "Club Brugge",
      "tla": "BRU",
      "crest": "https://crests.football-data.org/851.png"
    },
    "score": {
      "winner": null,
      "duration": "REGULAR",
      "fullTime": {
        "home": null,
        "away": null
      },
      "halfTime": {
        "home": null,
        "away": null
      }
    },
    "extra": {
      "venue": "FC Internazionale Milano Stadium",
      "referee": "FIFA Official",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 575344,
    "utcDate": "2026-10-13T19:00:00Z",
    "status": "TIMED",
    "minute": null,
    "matchday": 2,
    "competition": {
      "id": 2001,
      "name": "UEFA Champions League",
      "code": "CL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/CL.png",
      "area": {
        "id": 2077,
        "name": "Europe",
        "code": "EUR",
        "flag": "https://crests.football-data.org/EUR.svg"
      }
    },
    "homeTeam": {
      "id": 610,
      "name": "Galatasaray SK",
      "shortName": "Galatasaray",
      "tla": "GAL",
      "crest": "https://crests.football-data.org/610.png"
    },
    "awayTeam": {
      "id": 81,
      "name": "FC Barcelona",
      "shortName": "Barça",
      "tla": "FCB",
      "crest": "https://crests.football-data.org/81.png"
    },
    "score": {
      "winner": null,
      "duration": "REGULAR",
      "fullTime": {
        "home": null,
        "away": null
      },
      "halfTime": {
        "home": null,
        "away": null
      }
    },
    "extra": {
      "venue": "Galatasaray SK Stadium",
      "referee": "FIFA Official",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 575345,
    "utcDate": "2026-10-13T19:00:00Z",
    "status": "TIMED",
    "minute": null,
    "matchday": 2,
    "competition": {
      "id": 2001,
      "name": "UEFA Champions League",
      "code": "CL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/CL.png",
      "area": {
        "id": 2077,
        "name": "Europe",
        "code": "EUR",
        "flag": "https://crests.football-data.org/EUR.svg"
      }
    },
    "homeTeam": {
      "id": 78,
      "name": "Club Atlético de Madrid",
      "shortName": "Atleti",
      "tla": "ATL",
      "crest": "https://crests.football-data.org/78.png"
    },
    "awayTeam": {
      "id": 66,
      "name": "Manchester United FC",
      "shortName": "Man United",
      "tla": "MUN",
      "crest": "https://crests.football-data.org/66.png"
    },
    "score": {
      "winner": null,
      "duration": "REGULAR",
      "fullTime": {
        "home": null,
        "away": null
      },
      "halfTime": {
        "home": null,
        "away": null
      }
    },
    "extra": {
      "venue": "Club Atlético de Madrid Stadium",
      "referee": "FIFA Official",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 575346,
    "utcDate": "2026-10-13T19:00:00Z",
    "status": "TIMED",
    "minute": null,
    "matchday": 2,
    "competition": {
      "id": 2001,
      "name": "UEFA Champions League",
      "code": "CL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/CL.png",
      "area": {
        "id": 2077,
        "name": "Europe",
        "code": "EUR",
        "flag": "https://crests.football-data.org/EUR.svg"
      }
    },
    "homeTeam": {
      "id": 57,
      "name": "Arsenal FC",
      "shortName": "Arsenal",
      "tla": "ARS",
      "crest": "https://crests.football-data.org/57.png"
    },
    "awayTeam": {
      "id": 521,
      "name": "Lille OSC",
      "shortName": "Lille",
      "tla": "LIL",
      "crest": "https://crests.football-data.org/521.png"
    },
    "score": {
      "winner": null,
      "duration": "REGULAR",
      "fullTime": {
        "home": null,
        "away": null
      },
      "halfTime": {
        "home": null,
        "away": null
      }
    },
    "extra": {
      "venue": "Arsenal FC Stadium",
      "referee": "FIFA Official",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 575347,
    "utcDate": "2026-10-13T19:00:00Z",
    "status": "TIMED",
    "minute": null,
    "matchday": 2,
    "competition": {
      "id": 2001,
      "name": "UEFA Champions League",
      "code": "CL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/CL.png",
      "area": {
        "id": 2077,
        "name": "Europe",
        "code": "EUR",
        "flag": "https://crests.football-data.org/EUR.svg"
      }
    },
    "homeTeam": {
      "id": 5720,
      "name": "Viking FK",
      "shortName": "Viking",
      "tla": "VIK",
      "crest": "https://crests.football-data.org/5720.png"
    },
    "awayTeam": {
      "id": 5,
      "name": "FC Bayern München",
      "shortName": "Bayern",
      "tla": "FCB",
      "crest": "https://crests.football-data.org/5.png"
    },
    "score": {
      "winner": null,
      "duration": "REGULAR",
      "fullTime": {
        "home": null,
        "away": null
      },
      "halfTime": {
        "home": null,
        "away": null
      }
    },
    "extra": {
      "venue": "Viking FK Stadium",
      "referee": "FIFA Official",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 575348,
    "utcDate": "2026-10-13T19:00:00Z",
    "status": "TIMED",
    "minute": null,
    "matchday": 2,
    "competition": {
      "id": 2001,
      "name": "UEFA Champions League",
      "code": "CL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/CL.png",
      "area": {
        "id": 2077,
        "name": "Europe",
        "code": "EUR",
        "flag": "https://crests.football-data.org/EUR.svg"
      }
    },
    "homeTeam": {
      "id": 721,
      "name": "RB Leipzig",
      "shortName": "RB Leipzig",
      "tla": "RBL",
      "crest": "https://crests.football-data.org/721.png"
    },
    "awayTeam": {
      "id": 674,
      "name": "PSV",
      "shortName": "PSV",
      "tla": "PSV",
      "crest": "https://crests.football-data.org/674.png"
    },
    "score": {
      "winner": null,
      "duration": "REGULAR",
      "fullTime": {
        "home": null,
        "away": null
      },
      "halfTime": {
        "home": null,
        "away": null
      }
    },
    "extra": {
      "venue": "RB Leipzig Stadium",
      "referee": "FIFA Official",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 575349,
    "utcDate": "2026-10-13T19:00:00Z",
    "status": "TIMED",
    "minute": null,
    "matchday": 2,
    "competition": {
      "id": 2001,
      "name": "UEFA Champions League",
      "code": "CL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/CL.png",
      "area": {
        "id": 2077,
        "name": "Europe",
        "code": "EUR",
        "flag": "https://crests.football-data.org/EUR.svg"
      }
    },
    "homeTeam": {
      "id": 94,
      "name": "Villarreal CF",
      "shortName": "Villarreal",
      "tla": "VIL",
      "crest": "https://crests.football-data.org/94.png"
    },
    "awayTeam": {
      "id": 113,
      "name": "SSC Napoli",
      "shortName": "Napoli",
      "tla": "NAP",
      "crest": "https://crests.football-data.org/113.png"
    },
    "score": {
      "winner": null,
      "duration": "REGULAR",
      "fullTime": {
        "home": null,
        "away": null
      },
      "halfTime": {
        "home": null,
        "away": null
      }
    },
    "extra": {
      "venue": "Villarreal CF Stadium",
      "referee": "FIFA Official",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  },
  {
    "id": 575350,
    "utcDate": "2026-10-14T16:45:00Z",
    "status": "TIMED",
    "minute": null,
    "matchday": 2,
    "competition": {
      "id": 2001,
      "name": "UEFA Champions League",
      "code": "CL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/CL.png",
      "area": {
        "id": 2077,
        "name": "Europe",
        "code": "EUR",
        "flag": "https://crests.football-data.org/EUR.svg"
      }
    },
    "homeTeam": {
      "id": 2016,
      "name": "LASK Linz",
      "shortName": "LASK",
      "tla": "LIN",
      "crest": "https://crests.football-data.org/2016.png"
    },
    "awayTeam": {
      "id": 64,
      "name": "Liverpool FC",
      "shortName": "Liverpool",
      "tla": "LIV",
      "crest": "https://crests.football-data.org/64.png"
    },
    "score": {
      "winner": null,
      "duration": "REGULAR",
      "fullTime": {
        "home": null,
        "away": null
      },
      "halfTime": {
        "home": null,
        "away": null
      }
    },
    "extra": {
      "venue": "LASK Linz Stadium",
      "referee": "FIFA Official",
      "stats": {
        "possession": {
          "home": 54,
          "away": 46
        },
        "shotsTotal": {
          "home": 12,
          "away": 9
        },
        "shotsOnTarget": {
          "home": 5,
          "away": 4
        },
        "corners": {
          "home": 6,
          "away": 3
        },
        "fouls": {
          "home": 10,
          "away": 11
        },
        "yellowCards": {
          "home": 1,
          "away": 2
        },
        "redCards": {
          "home": 0,
          "away": 0
        },
        "saves": {
          "home": 3,
          "away": 4
        }
      }
    }
  }
];

export function getMockMatches(): Match[] {
  return REAL_API_MATCHES;
}

export function getMockStandings(code: string): StandingsResponse {
  const standingsMap: Record<string, any> = {
  "PL": {
    "filters": {
      "season": "2026"
    },
    "area": {
      "id": 2072,
      "name": "England",
      "code": "ENG",
      "flag": "https://crests.football-data.org/770.svg"
    },
    "competition": {
      "id": 2021,
      "name": "Premier League",
      "code": "PL",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/PL.png"
    },
    "season": {
      "id": 2502,
      "startDate": "2026-08-21",
      "endDate": "2027-05-30",
      "currentMatchday": 6,
      "winner": null
    },
    "standings": [
      {
        "stage": "REGULAR_SEASON",
        "type": "TOTAL",
        "group": "Matchday",
        "table": [
          {
            "position": 1,
            "team": {
              "id": 65,
              "name": "Manchester City FC",
              "shortName": "Man City",
              "tla": "MCI",
              "crest": "https://crests.football-data.org/65.png"
            },
            "playedGames": 5,
            "form": null,
            "won": 5,
            "draw": 0,
            "lost": 0,
            "points": 15,
            "goalsFor": 13,
            "goalsAgainst": 5,
            "goalDifference": 8
          },
          {
            "position": 2,
            "team": {
              "id": 57,
              "name": "Arsenal FC",
              "shortName": "Arsenal",
              "tla": "ARS",
              "crest": "https://crests.football-data.org/57.png"
            },
            "playedGames": 5,
            "form": null,
            "won": 4,
            "draw": 0,
            "lost": 1,
            "points": 12,
            "goalsFor": 8,
            "goalsAgainst": 4,
            "goalDifference": 4
          },
          {
            "position": 3,
            "team": {
              "id": 397,
              "name": "Brighton & Hove Albion FC",
              "shortName": "Brighton Hove",
              "tla": "BHA",
              "crest": "https://crests.football-data.org/397.png"
            },
            "playedGames": 5,
            "form": null,
            "won": 3,
            "draw": 1,
            "lost": 1,
            "points": 10,
            "goalsFor": 16,
            "goalsAgainst": 5,
            "goalDifference": 11
          },
          {
            "position": 4,
            "team": {
              "id": 402,
              "name": "Brentford FC",
              "shortName": "Brentford",
              "tla": "BRE",
              "crest": "https://crests.football-data.org/402.png"
            },
            "playedGames": 5,
            "form": null,
            "won": 2,
            "draw": 3,
            "lost": 0,
            "points": 9,
            "goalsFor": 10,
            "goalsAgainst": 4,
            "goalDifference": 6
          },
          {
            "position": 5,
            "team": {
              "id": 341,
              "name": "Leeds United FC",
              "shortName": "Leeds United",
              "tla": "LEE",
              "crest": "https://crests.football-data.org/341.png"
            },
            "playedGames": 5,
            "form": null,
            "won": 2,
            "draw": 3,
            "lost": 0,
            "points": 9,
            "goalsFor": 7,
            "goalsAgainst": 3,
            "goalDifference": 4
          },
          {
            "position": 6,
            "team": {
              "id": 64,
              "name": "Liverpool FC",
              "shortName": "Liverpool",
              "tla": "LIV",
              "crest": "https://crests.football-data.org/64.png"
            },
            "playedGames": 5,
            "form": null,
            "won": 2,
            "draw": 3,
            "lost": 0,
            "points": 9,
            "goalsFor": 7,
            "goalsAgainst": 4,
            "goalDifference": 3
          },
          {
            "position": 7,
            "team": {
              "id": 62,
              "name": "Everton FC",
              "shortName": "Everton",
              "tla": "EVE",
              "crest": "https://crests.football-data.org/62.png"
            },
            "playedGames": 5,
            "form": null,
            "won": 2,
            "draw": 3,
            "lost": 0,
            "points": 9,
            "goalsFor": 6,
            "goalsAgainst": 3,
            "goalDifference": 3
          },
          {
            "position": 8,
            "team": {
              "id": 322,
              "name": "Hull City AFC",
              "shortName": "Hull City",
              "tla": "HUL",
              "crest": "https://crests.football-data.org/322.png"
            },
            "playedGames": 5,
            "form": null,
            "won": 2,
            "draw": 2,
            "lost": 1,
            "points": 8,
            "goalsFor": 6,
            "goalsAgainst": 4,
            "goalDifference": 2
          },
          {
            "position": 9,
            "team": {
              "id": 67,
              "name": "Newcastle United FC",
              "shortName": "Newcastle",
              "tla": "NEW",
              "crest": "https://crests.football-data.org/67.png"
            },
            "playedGames": 5,
            "form": null,
            "won": 2,
            "draw": 2,
            "lost": 1,
            "points": 8,
            "goalsFor": 9,
            "goalsAgainst": 9,
            "goalDifference": 0
          },
          {
            "position": 10,
            "team": {
              "id": 61,
              "name": "Chelsea FC",
              "shortName": "Chelsea",
              "tla": "CHE",
              "crest": "https://crests.football-data.org/61.png"
            },
            "playedGames": 5,
            "form": null,
            "won": 2,
            "draw": 1,
            "lost": 2,
            "points": 7,
            "goalsFor": 10,
            "goalsAgainst": 12,
            "goalDifference": -2
          },
          {
            "position": 11,
            "team": {
              "id": 349,
              "name": "Ipswich Town FC",
              "shortName": "Ipswich Town",
              "tla": "IPS",
              "crest": "https://crests.football-data.org/349.png"
            },
            "playedGames": 5,
            "form": null,
            "won": 2,
            "draw": 0,
            "lost": 3,
            "points": 6,
            "goalsFor": 7,
            "goalsAgainst": 11,
            "goalDifference": -4
          },
          {
            "position": 12,
            "team": {
              "id": 66,
              "name": "Manchester United FC",
              "shortName": "Man United",
              "tla": "MUN",
              "crest": "https://crests.football-data.org/66.png"
            },
            "playedGames": 5,
            "form": null,
            "won": 1,
            "draw": 2,
            "lost": 2,
            "points": 5,
            "goalsFor": 8,
            "goalsAgainst": 8,
            "goalDifference": 0
          },
          {
            "position": 13,
            "team": {
              "id": 351,
              "name": "Nottingham Forest FC",
              "shortName": "Nottingham",
              "tla": "NOT",
              "crest": "https://crests.football-data.org/351.png"
            },
            "playedGames": 5,
            "form": null,
            "won": 1,
            "draw": 2,
            "lost": 2,
            "points": 5,
            "goalsFor": 4,
            "goalsAgainst": 5,
            "goalDifference": -1
          },
          {
            "position": 14,
            "team": {
              "id": 71,
              "name": "Sunderland AFC",
              "shortName": "Sunderland",
              "tla": "SUN",
              "crest": "https://crests.football-data.org/71.png"
            },
            "playedGames": 5,
            "form": null,
            "won": 1,
            "draw": 1,
            "lost": 3,
            "points": 4,
            "goalsFor": 6,
            "goalsAgainst": 10,
            "goalDifference": -4
          },
          {
            "position": 15,
            "team": {
              "id": 354,
              "name": "Crystal Palace FC",
              "shortName": "Crystal Palace",
              "tla": "CRY",
              "crest": "https://crests.football-data.org/354.png"
            },
            "playedGames": 5,
            "form": null,
            "won": 1,
            "draw": 1,
            "lost": 3,
            "points": 4,
            "goalsFor": 6,
            "goalsAgainst": 11,
            "goalDifference": -5
          },
          {
            "position": 16,
            "team": {
              "id": 58,
              "name": "Aston Villa FC",
              "shortName": "Aston Villa",
              "tla": "AVL",
              "crest": "https://crests.football-data.org/58.png"
            },
            "playedGames": 5,
            "form": null,
            "won": 1,
            "draw": 1,
            "lost": 3,
            "points": 4,
            "goalsFor": 4,
            "goalsAgainst": 9,
            "goalDifference": -5
          },
          {
            "position": 17,
            "team": {
              "id": 1044,
              "name": "AFC Bournemouth",
              "shortName": "Bournemouth",
              "tla": "BOU",
              "crest": "https://crests.football-data.org/bournemouth.png"
            },
            "playedGames": 5,
            "form": null,
            "won": 0,
            "draw": 3,
            "lost": 2,
            "points": 3,
            "goalsFor": 6,
            "goalsAgainst": 8,
            "goalDifference": -2
          },
          {
            "position": 18,
            "team": {
              "id": 1076,
              "name": "Coventry City FC",
              "shortName": "Coventry City",
              "tla": "COV",
              "crest": "https://crests.football-data.org/1076.png"
            },
            "playedGames": 5,
            "form": null,
            "won": 1,
            "draw": 0,
            "lost": 4,
            "points": 3,
            "goalsFor": 1,
            "goalsAgainst": 10,
            "goalDifference": -9
          },
          {
            "position": 19,
            "team": {
              "id": 63,
              "name": "Fulham FC",
              "shortName": "Fulham",
              "tla": "FUL",
              "crest": "https://crests.football-data.org/63.png"
            },
            "playedGames": 5,
            "form": null,
            "won": 0,
            "draw": 2,
            "lost": 3,
            "points": 2,
            "goalsFor": 5,
            "goalsAgainst": 8,
            "goalDifference": -3
          },
          {
            "position": 20,
            "team": {
              "id": 73,
              "name": "Tottenham Hotspur FC",
              "shortName": "Tottenham",
              "tla": "TOT",
              "crest": "https://crests.football-data.org/73.png"
            },
            "playedGames": 5,
            "form": null,
            "won": 0,
            "draw": 2,
            "lost": 3,
            "points": 2,
            "goalsFor": 2,
            "goalsAgainst": 8,
            "goalDifference": -6
          }
        ]
      }
    ]
  },
  "PD": {
    "filters": {
      "season": "2026"
    },
    "area": {
      "id": 2224,
      "name": "Spain",
      "code": "ESP",
      "flag": "https://crests.football-data.org/760.svg"
    },
    "competition": {
      "id": 2014,
      "name": "Primera Division",
      "code": "PD",
      "type": "LEAGUE",
      "emblem": "https://crests.football-data.org/laliga.png"
    },
    "season": {
      "id": 2518,
      "startDate": "2026-08-16",
      "endDate": "2027-05-30",
      "currentMatchday": 8,
      "winner": null
    },
    "standings": [
      {
        "stage": "REGULAR_SEASON",
        "type": "TOTAL",
        "group": "Matchday",
        "table": [
          {
            "position": 1,
            "team": {
              "id": 81,
              "name": "FC Barcelona",
              "shortName": "Barça",
              "tla": "FCB",
              "crest": "https://crests.football-data.org/81.png"
            },
            "playedGames": 7,
            "form": null,
            "won": 7,
            "draw": 0,
            "lost": 0,
            "points": 21,
            "goalsFor": 31,
            "goalsAgainst": 7,
            "goalDifference": 24
          },
          {
            "position": 2,
            "team": {
              "id": 78,
              "name": "Club Atlético de Madrid",
              "shortName": "Atleti",
              "tla": "ATL",
              "crest": "https://crests.football-data.org/78.png"
            },
            "playedGames": 7,
            "form": null,
            "won": 5,
            "draw": 1,
            "lost": 1,
            "points": 16,
            "goalsFor": 16,
            "goalsAgainst": 7,
            "goalDifference": 9
          },
          {
            "position": 3,
            "team": {
              "id": 90,
              "name": "Real Betis Balompié",
              "shortName": "Real Betis",
              "tla": "BET",
              "crest": "https://crests.football-data.org/90.png"
            },
            "playedGames": 7,
            "form": null,
            "won": 5,
            "draw": 1,
            "lost": 1,
            "points": 16,
            "goalsFor": 9,
            "goalsAgainst": 7,
            "goalDifference": 2
          },
          {
            "position": 4,
            "team": {
              "id": 86,
              "name": "Real Madrid CF",
              "shortName": "Real Madrid",
              "tla": "RMA",
              "crest": "https://crests.football-data.org/86.png"
            },
            "playedGames": 7,
            "form": null,
            "won": 5,
            "draw": 0,
            "lost": 2,
            "points": 15,
            "goalsFor": 18,
            "goalsAgainst": 8,
            "goalDifference": 10
          },
          {
            "position": 5,
            "team": {
              "id": 559,
              "name": "Sevilla FC",
              "shortName": "Sevilla FC",
              "tla": "SEV",
              "crest": "https://crests.football-data.org/559.png"
            },
            "playedGames": 7,
            "form": null,
            "won": 4,
            "draw": 1,
            "lost": 2,
            "points": 13,
            "goalsFor": 10,
            "goalsAgainst": 9,
            "goalDifference": 1
          },
          {
            "position": 6,
            "team": {
              "id": 263,
              "name": "Deportivo Alavés",
              "shortName": "Alavés",
              "tla": "ALA",
              "crest": "https://crests.football-data.org/263.png"
            },
            "playedGames": 7,
            "form": null,
            "won": 3,
            "draw": 2,
            "lost": 2,
            "points": 11,
            "goalsFor": 11,
            "goalsAgainst": 6,
            "goalDifference": 5
          },
          {
            "position": 7,
            "team": {
              "id": 560,
              "name": "RC Deportivo La Coruña",
              "shortName": "Deportivo",
              "tla": "DEP",
              "crest": "https://crests.football-data.org/560.png"
            },
            "playedGames": 7,
            "form": null,
            "won": 2,
            "draw": 4,
            "lost": 1,
            "points": 10,
            "goalsFor": 10,
            "goalsAgainst": 8,
            "goalDifference": 2
          },
          {
            "position": 8,
            "team": {
              "id": 92,
              "name": "Real Sociedad de Fútbol",
              "shortName": "Real Sociedad",
              "tla": "RSO",
              "crest": "https://crests.football-data.org/92.png"
            },
            "playedGames": 7,
            "form": null,
            "won": 3,
            "draw": 1,
            "lost": 3,
            "points": 10,
            "goalsFor": 9,
            "goalsAgainst": 13,
            "goalDifference": -4
          },
          {
            "position": 9,
            "team": {
              "id": 94,
              "name": "Villarreal CF",
              "shortName": "Villarreal",
              "tla": "VIL",
              "crest": "https://crests.football-data.org/94.png"
            },
            "playedGames": 7,
            "form": null,
            "won": 2,
            "draw": 2,
            "lost": 3,
            "points": 8,
            "goalsFor": 13,
            "goalsAgainst": 12,
            "goalDifference": 1
          },
          {
            "position": 10,
            "team": {
              "id": 77,
              "name": "Athletic Club",
              "shortName": "Athletic",
              "tla": "ATH",
              "crest": "https://crests.football-data.org/77.png"
            },
            "playedGames": 6,
            "form": null,
            "won": 2,
            "draw": 2,
            "lost": 2,
            "points": 8,
            "goalsFor": 7,
            "goalsAgainst": 6,
            "goalDifference": 1
          },
          {
            "position": 11,
            "team": {
              "id": 82,
              "name": "Getafe CF",
              "shortName": "Getafe",
              "tla": "GET",
              "crest": "https://crests.football-data.org/82.png"
            },
            "playedGames": 7,
            "form": null,
            "won": 2,
            "draw": 2,
            "lost": 3,
            "points": 8,
            "goalsFor": 4,
            "goalsAgainst": 7,
            "goalDifference": -3
          },
          {
            "position": 12,
            "team": {
              "id": 87,
              "name": "Rayo Vallecano de Madrid",
              "shortName": "Rayo Vallecano",
              "tla": "RAY",
              "crest": "https://crests.football-data.org/87.png"
            },
            "playedGames": 7,
            "form": null,
            "won": 2,
            "draw": 2,
            "lost": 3,
            "points": 8,
            "goalsFor": 11,
            "goalsAgainst": 16,
            "goalDifference": -5
          },
          {
            "position": 13,
            "team": {
              "id": 79,
              "name": "CA Osasuna",
              "shortName": "Osasuna",
              "tla": "OSA",
              "crest": "https://crests.football-data.org/79.png"
            },
            "playedGames": 7,
            "form": null,
            "won": 2,
            "draw": 2,
            "lost": 3,
            "points": 8,
            "goalsFor": 6,
            "goalsAgainst": 13,
            "goalDifference": -7
          },
          {
            "position": 14,
            "team": {
              "id": 558,
              "name": "RC Celta de Vigo",
              "shortName": "Celta",
              "tla": "CEL",
              "crest": "https://crests.football-data.org/558.png"
            },
            "playedGames": 7,
            "form": null,
            "won": 1,
            "draw": 4,
            "lost": 2,
            "points": 7,
            "goalsFor": 8,
            "goalsAgainst": 6,
            "goalDifference": 2
          },
          {
            "position": 15,
            "team": {
              "id": 80,
              "name": "RCD Espanyol de Barcelona",
              "shortName": "Espanyol",
              "tla": "ESP",
              "crest": "https://crests.football-data.org/80.png"
            },
            "playedGames": 7,
            "form": null,
            "won": 2,
            "draw": 1,
            "lost": 4,
            "points": 7,
            "goalsFor": 10,
            "goalsAgainst": 10,
            "goalDifference": 0
          },
          {
            "position": 16,
            "team": {
              "id": 5335,
              "name": "Real Racing Club de Santander",
              "shortName": "Santander",
              "tla": "SAN",
              "crest": "https://crests.football-data.org/5335.png"
            },
            "playedGames": 7,
            "form": null,
            "won": 2,
            "draw": 1,
            "lost": 4,
            "points": 7,
            "goalsFor": 11,
            "goalsAgainst": 21,
            "goalDifference": -10
          },
          {
            "position": 17,
            "team": {
              "id": 88,
              "name": "Levante UD",
              "shortName": "Levante",
              "tla": "LEV",
              "crest": "https://crests.football-data.org/88.png"
            },
            "playedGames": 6,
            "form": null,
            "won": 1,
            "draw": 2,
            "lost": 3,
            "points": 5,
            "goalsFor": 8,
            "goalsAgainst": 12,
            "goalDifference": -4
          },
          {
            "position": 18,
            "team": {
              "id": 285,
              "name": "Elche CF",
              "shortName": "Elche",
              "tla": "ELC",
              "crest": "https://crests.football-data.org/285.png"
            },
            "playedGames": 7,
            "form": null,
            "won": 1,
            "draw": 2,
            "lost": 4,
            "points": 5,
            "goalsFor": 11,
            "goalsAgainst": 17,
            "goalDifference": -6
          },
          {
            "position": 19,
            "team": {
              "id": 95,
              "name": "Valencia CF",
              "shortName": "Valencia",
              "tla": "VAL",
              "crest": "https://crests.football-data.org/95.png"
            },
            "playedGames": 7,
            "form": null,
            "won": 1,
            "draw": 1,
            "lost": 5,
            "points": 4,
            "goalsFor": 4,
            "goalsAgainst": 13,
            "goalDifference": -9
          },
          {
            "position": 20,
            "team": {
              "id": 84,
              "name": "Málaga CF",
              "shortName": "Málaga",
              "tla": "MAL",
              "crest": "https://crests.football-data.org/84.png"
            },
            "playedGames": 7,
            "form": null,
            "won": 0,
            "draw": 3,
            "lost": 4,
            "points": 3,
            "goalsFor": 3,
            "goalsAgainst": 12,
            "goalDifference": -9
          }
        ]
      }
    ]
  },
  "CL": {
    "filters": {
      "season": "2026"
    },
    "area": {
      "id": 2077,
      "name": "Europe",
      "code": "EUR",
      "flag": "https://crests.football-data.org/EUR.svg"
    },
    "competition": {
      "id": 2001,
      "name": "UEFA Champions League",
      "code": "CL",
      "type": "CUP",
      "emblem": "https://crests.football-data.org/CL.png"
    },
    "season": {
      "id": 2557,
      "startDate": "2026-09-08",
      "endDate": "2027-01-27",
      "currentMatchday": 2,
      "winner": null
    },
    "standings": [
      {
        "stage": "LEAGUE_STAGE",
        "type": "TOTAL",
        "group": "League phase",
        "table": [
          {
            "position": 1,
            "team": {
              "id": 524,
              "name": "Paris Saint-Germain FC",
              "shortName": "PSG",
              "tla": "PSG",
              "crest": "https://crests.football-data.org/524.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 1,
            "draw": 0,
            "lost": 0,
            "points": 3,
            "goalsFor": 6,
            "goalsAgainst": 1,
            "goalDifference": 5
          },
          {
            "position": 2,
            "team": {
              "id": 5,
              "name": "FC Bayern München",
              "shortName": "Bayern",
              "tla": "FCB",
              "crest": "https://crests.football-data.org/5.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 1,
            "draw": 0,
            "lost": 0,
            "points": 3,
            "goalsFor": 5,
            "goalsAgainst": 0,
            "goalDifference": 5
          },
          {
            "position": 3,
            "team": {
              "id": 81,
              "name": "FC Barcelona",
              "shortName": "Barça",
              "tla": "FCB",
              "crest": "https://crests.football-data.org/81.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 1,
            "draw": 0,
            "lost": 0,
            "points": 3,
            "goalsFor": 5,
            "goalsAgainst": 1,
            "goalDifference": 4
          },
          {
            "position": 4,
            "team": {
              "id": 66,
              "name": "Manchester United FC",
              "shortName": "Man United",
              "tla": "MUN",
              "crest": "https://crests.football-data.org/66.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 1,
            "draw": 0,
            "lost": 0,
            "points": 3,
            "goalsFor": 4,
            "goalsAgainst": 0,
            "goalDifference": 4
          },
          {
            "position": 5,
            "team": {
              "id": 7397,
              "name": "Como 1907",
              "shortName": "Como 1907",
              "tla": "COM",
              "crest": "https://crests.football-data.org/7397.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 1,
            "draw": 0,
            "lost": 0,
            "points": 3,
            "goalsFor": 4,
            "goalsAgainst": 1,
            "goalDifference": 3
          },
          {
            "position": 6,
            "team": {
              "id": 498,
              "name": "Sporting Clube de Portugal",
              "shortName": "Sporting CP",
              "tla": "SPO",
              "crest": "https://crests.football-data.org/498.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 1,
            "draw": 0,
            "lost": 0,
            "points": 3,
            "goalsFor": 3,
            "goalsAgainst": 1,
            "goalDifference": 2
          },
          {
            "position": 6,
            "team": {
              "id": 10,
              "name": "VfB Stuttgart",
              "shortName": "Stuttgart",
              "tla": "VFB",
              "crest": "https://crests.football-data.org/10.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 1,
            "draw": 0,
            "lost": 0,
            "points": 3,
            "goalsFor": 3,
            "goalsAgainst": 1,
            "goalDifference": 2
          },
          {
            "position": 8,
            "team": {
              "id": 65,
              "name": "Manchester City FC",
              "shortName": "Man City",
              "tla": "MCI",
              "crest": "https://crests.football-data.org/65.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 1,
            "draw": 0,
            "lost": 0,
            "points": 3,
            "goalsFor": 2,
            "goalsAgainst": 0,
            "goalDifference": 2
          },
          {
            "position": 9,
            "team": {
              "id": 58,
              "name": "Aston Villa FC",
              "shortName": "Aston Villa",
              "tla": "AVL",
              "crest": "https://crests.football-data.org/58.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 1,
            "draw": 0,
            "lost": 0,
            "points": 3,
            "goalsFor": 3,
            "goalsAgainst": 2,
            "goalDifference": 1
          },
          {
            "position": 9,
            "team": {
              "id": 546,
              "name": "Racing Club de Lens",
              "shortName": "RC Lens",
              "tla": "RCL",
              "crest": "https://crests.football-data.org/546.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 1,
            "draw": 0,
            "lost": 0,
            "points": 3,
            "goalsFor": 3,
            "goalsAgainst": 2,
            "goalDifference": 1
          },
          {
            "position": 9,
            "team": {
              "id": 90,
              "name": "Real Betis Balompié",
              "shortName": "Real Betis",
              "tla": "BET",
              "crest": "https://crests.football-data.org/90.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 1,
            "draw": 0,
            "lost": 0,
            "points": 3,
            "goalsFor": 3,
            "goalsAgainst": 2,
            "goalDifference": 1
          },
          {
            "position": 12,
            "team": {
              "id": 4,
              "name": "Borussia Dortmund",
              "shortName": "Dortmund",
              "tla": "BVB",
              "crest": "https://crests.football-data.org/4.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 1,
            "draw": 0,
            "lost": 0,
            "points": 3,
            "goalsFor": 3,
            "goalsAgainst": 2,
            "goalDifference": 1
          },
          {
            "position": 13,
            "team": {
              "id": 64,
              "name": "Liverpool FC",
              "shortName": "Liverpool",
              "tla": "LIV",
              "crest": "https://crests.football-data.org/64.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 1,
            "draw": 0,
            "lost": 0,
            "points": 3,
            "goalsFor": 2,
            "goalsAgainst": 1,
            "goalDifference": 1
          },
          {
            "position": 13,
            "team": {
              "id": 86,
              "name": "Real Madrid CF",
              "shortName": "Real Madrid",
              "tla": "RMA",
              "crest": "https://crests.football-data.org/86.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 1,
            "draw": 0,
            "lost": 0,
            "points": 3,
            "goalsFor": 2,
            "goalsAgainst": 1,
            "goalDifference": 1
          },
          {
            "position": 15,
            "team": {
              "id": 57,
              "name": "Arsenal FC",
              "shortName": "Arsenal",
              "tla": "ARS",
              "crest": "https://crests.football-data.org/57.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 1,
            "draw": 0,
            "lost": 0,
            "points": 3,
            "goalsFor": 1,
            "goalsAgainst": 0,
            "goalDifference": 1
          },
          {
            "position": 16,
            "team": {
              "id": 1899,
              "name": "PAE AEK",
              "shortName": "PAE AEK",
              "tla": "AEK",
              "crest": "https://crests.football-data.org/1899.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 1,
            "draw": 0,
            "lost": 0,
            "points": 3,
            "goalsFor": 1,
            "goalsAgainst": 0,
            "goalDifference": 1
          },
          {
            "position": 17,
            "team": {
              "id": 100,
              "name": "AS Roma",
              "shortName": "Roma",
              "tla": "ROM",
              "crest": "https://crests.football-data.org/100.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 0,
            "draw": 1,
            "lost": 0,
            "points": 1,
            "goalsFor": 1,
            "goalsAgainst": 1,
            "goalDifference": 0
          },
          {
            "position": 17,
            "team": {
              "id": 1887,
              "name": "FK Shakhtar Donetsk",
              "shortName": "Shaktar",
              "tla": "SHD",
              "crest": "https://crests.football-data.org/1887.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 0,
            "draw": 1,
            "lost": 0,
            "points": 1,
            "goalsFor": 1,
            "goalsAgainst": 1,
            "goalDifference": 0
          },
          {
            "position": 19,
            "team": {
              "id": 613,
              "name": "Fenerbahçe SK",
              "shortName": "Fenerbahçe",
              "tla": "FEN",
              "crest": "https://crests.football-data.org/613.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 0,
            "draw": 1,
            "lost": 0,
            "points": 1,
            "goalsFor": 1,
            "goalsAgainst": 1,
            "goalDifference": 0
          },
          {
            "position": 19,
            "team": {
              "id": 674,
              "name": "PSV",
              "shortName": "PSV",
              "tla": "PSV",
              "crest": "https://crests.football-data.org/674.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 0,
            "draw": 1,
            "lost": 0,
            "points": 1,
            "goalsFor": 1,
            "goalsAgainst": 1,
            "goalDifference": 0
          },
          {
            "position": 21,
            "team": {
              "id": 94,
              "name": "Villarreal CF",
              "shortName": "Villarreal",
              "tla": "VIL",
              "crest": "https://crests.football-data.org/94.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 0,
            "draw": 0,
            "lost": 1,
            "points": 0,
            "goalsFor": 2,
            "goalsAgainst": 3,
            "goalDifference": -1
          },
          {
            "position": 22,
            "team": {
              "id": 851,
              "name": "Club Brugge KV",
              "shortName": "Club Brugge",
              "tla": "BRU",
              "crest": "https://crests.football-data.org/851.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 0,
            "draw": 0,
            "lost": 1,
            "points": 0,
            "goalsFor": 2,
            "goalsAgainst": 3,
            "goalDifference": -1
          },
          {
            "position": 22,
            "team": {
              "id": 521,
              "name": "Lille OSC",
              "shortName": "Lille",
              "tla": "LIL",
              "crest": "https://crests.football-data.org/521.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 0,
            "draw": 0,
            "lost": 1,
            "points": 0,
            "goalsFor": 2,
            "goalsAgainst": 3,
            "goalDifference": -1
          },
          {
            "position": 22,
            "team": {
              "id": 930,
              "name": "SK Slavia Praha",
              "shortName": "Slavia Praha",
              "tla": "SLP",
              "crest": "https://crests.football-data.org/930.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 0,
            "draw": 0,
            "lost": 1,
            "points": 0,
            "goalsFor": 2,
            "goalsAgainst": 3,
            "goalDifference": -1
          },
          {
            "position": 25,
            "team": {
              "id": 78,
              "name": "Club Atlético de Madrid",
              "shortName": "Atleti",
              "tla": "ATL",
              "crest": "https://crests.football-data.org/78.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 0,
            "draw": 0,
            "lost": 1,
            "points": 0,
            "goalsFor": 1,
            "goalsAgainst": 2,
            "goalDifference": -1
          },
          {
            "position": 25,
            "team": {
              "id": 108,
              "name": "FC Internazionale Milano",
              "shortName": "Inter",
              "tla": "INT",
              "crest": "https://crests.football-data.org/108.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 0,
            "draw": 0,
            "lost": 1,
            "points": 0,
            "goalsFor": 1,
            "goalsAgainst": 2,
            "goalDifference": -1
          },
          {
            "position": 27,
            "team": {
              "id": 2016,
              "name": "LASK Linz",
              "shortName": "LASK",
              "tla": "LIN",
              "crest": "https://crests.football-data.org/2016.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 0,
            "draw": 0,
            "lost": 1,
            "points": 0,
            "goalsFor": 0,
            "goalsAgainst": 1,
            "goalDifference": -1
          },
          {
            "position": 27,
            "team": {
              "id": 113,
              "name": "SSC Napoli",
              "shortName": "Napoli",
              "tla": "NAP",
              "crest": "https://crests.football-data.org/113.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 0,
            "draw": 0,
            "lost": 1,
            "points": 0,
            "goalsFor": 0,
            "goalsAgainst": 1,
            "goalDifference": -1
          },
          {
            "position": 29,
            "team": {
              "id": 610,
              "name": "Galatasaray SK",
              "shortName": "Galatasaray",
              "tla": "GAL",
              "crest": "https://crests.football-data.org/610.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 0,
            "draw": 0,
            "lost": 1,
            "points": 0,
            "goalsFor": 1,
            "goalsAgainst": 3,
            "goalDifference": -2
          },
          {
            "position": 29,
            "team": {
              "id": 5720,
              "name": "Viking FK",
              "shortName": "Viking",
              "tla": "VIK",
              "crest": "https://crests.football-data.org/5720.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 0,
            "draw": 0,
            "lost": 1,
            "points": 0,
            "goalsFor": 1,
            "goalsAgainst": 3,
            "goalDifference": -2
          },
          {
            "position": 31,
            "team": {
              "id": 503,
              "name": "FC Porto",
              "shortName": "Porto",
              "tla": "FCP",
              "crest": "https://crests.football-data.org/503.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 0,
            "draw": 0,
            "lost": 1,
            "points": 0,
            "goalsFor": 0,
            "goalsAgainst": 2,
            "goalDifference": -2
          },
          {
            "position": 32,
            "team": {
              "id": 721,
              "name": "RB Leipzig",
              "shortName": "RB Leipzig",
              "tla": "RBL",
              "crest": "https://crests.football-data.org/721.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 0,
            "draw": 0,
            "lost": 1,
            "points": 0,
            "goalsFor": 1,
            "goalsAgainst": 4,
            "goalDifference": -3
          },
          {
            "position": 33,
            "team": {
              "id": 675,
              "name": "Feyenoord Rotterdam",
              "shortName": "Feyenoord",
              "tla": "FEY",
              "crest": "https://crests.football-data.org/675.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 0,
            "draw": 0,
            "lost": 1,
            "points": 0,
            "goalsFor": 1,
            "goalsAgainst": 5,
            "goalDifference": -4
          },
          {
            "position": 34,
            "team": {
              "id": 10233,
              "name": "Sabah FK",
              "shortName": "Sabah FK",
              "tla": "SAB",
              "crest": "https://crests.football-data.org/10233.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 0,
            "draw": 0,
            "lost": 1,
            "points": 0,
            "goalsFor": 0,
            "goalsAgainst": 4,
            "goalDifference": -4
          },
          {
            "position": 35,
            "team": {
              "id": 7509,
              "name": "ŠK Slovan Bratislava",
              "shortName": "Sl. Bratislava",
              "tla": "SBA",
              "crest": "https://crests.football-data.org/7509.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 0,
            "draw": 0,
            "lost": 1,
            "points": 0,
            "goalsFor": 1,
            "goalsAgainst": 6,
            "goalDifference": -5
          },
          {
            "position": 36,
            "team": {
              "id": 5721,
              "name": "FK Bodø/Glimt",
              "shortName": "Bodø/Glimt",
              "tla": "FK",
              "crest": "https://crests.football-data.org/5721.png"
            },
            "playedGames": 1,
            "form": null,
            "won": 0,
            "draw": 0,
            "lost": 1,
            "points": 0,
            "goalsFor": 0,
            "goalsAgainst": 5,
            "goalDifference": -5
          }
        ]
      }
    ]
  }
};
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
