import React, { useEffect, useState } from 'react';
import { ListOrdered, Clock } from 'lucide-react';
import { api } from '../services/api';
import { StandingsResponse, Competition } from '../types';
import { LeagueTable } from '../components/LeagueTable';
import { LoadingSkeleton } from '../components/LoadingSkeleton';

interface Props {
  initialLeagueCode?: string;
  onSelectTeam: (teamId: number) => void;
}

export const StandingsPage: React.FC<Props> = ({ initialLeagueCode = 'PL', onSelectTeam }) => {
  const [activeLeague, setActiveLeague] = useState<string>(initialLeagueCode);
  const [standingsData, setStandingsData] = useState<StandingsResponse | null>(null);
  const [leagues, setLeagues] = useState<Competition[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getLeagues().then(setLeagues).catch(() => {});
  }, []);

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        setLoading(true);
        const data = await api.getStandings(activeLeague);
        setStandingsData(data);
      } catch (err) {
        console.error('Failed to load standings:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStandings();
  }, [activeLeague]);

  const currentTable = standingsData?.standings?.[0]?.table || [];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="p-6 rounded-3xl bg-stadium-900 border border-stadium-800 shadow-card flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
            <ListOrdered className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-white">Turnir Jadvali</h1>
            <p className="text-xs sm:text-sm text-slate-400">
              Ochkolar, g‘alabalar va so‘nggi o‘yinlar formasi (5 daqiqa Redis cache)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-stadium-950 border border-stadium-800 text-xs text-slate-400">
          <Clock className="w-3.5 h-3.5 text-pitch-glow" />
          <span>Cache TTL: 5 daqiqa (300s)</span>
        </div>
      </div>

      {/* League Selection Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {leagues.map((league) => (
          <button
            key={league.code}
            onClick={() => setActiveLeague(league.code)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeLeague === league.code
                ? 'bg-pitch-glow text-stadium-950 font-bold shadow-glow-green/20'
                : 'bg-stadium-900 text-slate-300 hover:bg-stadium-850 border border-stadium-800'
            }`}
          >
            {league.emblem && (
              <img
                src={league.emblem}
                alt=""
                className="w-4 h-4 object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            )}
            <span>{league.name}</span>
          </button>
        ))}
      </div>

      {/* Standings Table */}
      {loading ? (
        <LoadingSkeleton rows={10} />
      ) : currentTable.length > 0 ? (
        <LeagueTable table={currentTable} onTeamClick={onSelectTeam} />
      ) : (
        <div className="text-center py-16 bg-stadium-900/40 rounded-3xl border border-stadium-800 p-8 space-y-3">
          <h3 className="font-bold text-slate-200">Ushbu liga uchun jadval ma’lumotlari topilmadi</h3>
          <p className="text-xs text-slate-500">
            Iltimos, boshqa ligani tanlang.
          </p>
        </div>
      )}
    </div>
  );
};
