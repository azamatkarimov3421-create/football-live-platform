import React, { useEffect, useState } from 'react';
import { Trophy, ChevronRight, Globe } from 'lucide-react';
import { api } from '../services/api';
import { Competition } from '../types';
import { LoadingSkeleton } from '../components/LoadingSkeleton';

interface Props {
  onSelectLeague: (leagueCode: string) => void;
}

export const LeaguesPage: React.FC<Props> = ({ onSelectLeague }) => {
  const [leagues, setLeagues] = useState<Competition[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .getLeagues()
      .then((data) => setLeagues(data || []))
      .catch((err) => console.error('Failed to load leagues:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="p-6 rounded-3xl bg-stadium-900 border border-stadium-800 shadow-card flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
            <Trophy className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-white">Yevropa va Jahon Ligalari</h1>
            <p className="text-xs sm:text-sm text-slate-400">
              Asosiy milliy chempionatlar va xalqaro kuboklar
            </p>
          </div>
        </div>
      </div>

      {/* Grid */}
      {loading ? (
        <LoadingSkeleton rows={4} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {leagues.map((league) => (
            <div
              key={league.id}
              onClick={() => onSelectLeague(league.code)}
              className="group bg-stadium-900/80 hover:bg-stadium-850 border border-stadium-800 hover:border-pitch-glow/40 rounded-3xl p-6 transition-all duration-200 cursor-pointer shadow-card flex flex-col justify-between"
            >
              <div className="flex items-start justify-between">
                <div className="w-16 h-16 rounded-2xl bg-stadium-950/80 border border-stadium-800 p-2.5 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <img
                    src={league.emblem}
                    alt={league.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>

                <span className="px-2.5 py-1 rounded-full bg-stadium-950 border border-stadium-800 text-[11px] font-mono font-bold text-pitch-glow uppercase">
                  {league.code}
                </span>
              </div>

              <div className="mt-6 space-y-1">
                <h3 className="text-lg font-bold text-white group-hover:text-pitch-glow transition-colors">
                  {league.name}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Globe className="w-3.5 h-3.5 text-slate-500" />
                  <span>{league.area?.name || 'Xalqaro'}</span>
                  <span>·</span>
                  <span>{league.type || 'Chempionat'}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stadium-800/60 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-pitch-glow">
                <span>Turnir jadvalini ochish</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
