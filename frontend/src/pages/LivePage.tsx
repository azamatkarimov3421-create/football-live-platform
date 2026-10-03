import React, { useEffect, useState } from 'react';
import { Radio, RefreshCw, ShieldCheck } from 'lucide-react';
import { api } from '../services/api';
import { Match } from '../types';
import { MatchCard } from '../components/MatchCard';
import { LoadingSkeleton } from '../components/LoadingSkeleton';

interface Props {
  onSelectMatch: (match: Match) => void;
}

export const LivePage: React.FC<Props> = ({ onSelectMatch }) => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLeague, setSelectedLeague] = useState<string>('ALL');
  const [countdown, setCountdown] = useState(30);
  const [dataSource, setDataSource] = useState<string>('cache');

  const fetchLive = async () => {
    try {
      const res = await api.getLiveMatches();
      setMatches(res.matches || []);
      setDataSource(res.source || 'cache');
      setCountdown(30);
    } catch (err) {
      console.error('Failed to load live matches:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLive();

    // 1-second countdown interval
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          fetchLive();
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const leaguesList = Array.from(
    new Set(matches.map((m) => m.competition.name))
  );

  const filteredMatches =
    selectedLeague === 'ALL'
      ? matches
      : matches.filter((m) => m.competition.name === selectedLeague);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-stadium-900 border border-stadium-800 shadow-card">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
              <Radio className="w-5 h-5 text-emerald-400 animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                Jonli O‘yinlar Markazi
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-400">
                Real vaqt rejimidagi hisoblar va daqiqama-daqiqa o‘zgarishlar
              </p>
            </div>
          </div>
        </div>

        {/* 30s Cache Countdown & Stampede Protection Pill */}
        <div className="flex items-center gap-3 bg-stadium-950 p-2.5 px-4 rounded-2xl border border-stadium-800 text-xs">
          <div className="flex items-center gap-2">
            <RefreshCw
              className={`w-3.5 h-3.5 text-pitch-glow ${
                countdown <= 2 ? 'animate-spin' : ''
              }`}
            />
            <span className="text-slate-400">Avto-yangilanish:</span>
            <span className="font-mono font-bold text-pitch-glow w-6 text-center">
              {countdown}s
            </span>
          </div>

          <div className="h-4 w-[1px] bg-stadium-800"></div>

          <div className="flex items-center gap-1.5 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden md:inline">Redis TTL:</span>
            <span className="font-mono text-emerald-400 font-bold uppercase text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10">
              {dataSource}
            </span>
          </div>
        </div>
      </div>

      {/* League Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setSelectedLeague('ALL')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
            selectedLeague === 'ALL'
              ? 'bg-pitch-glow text-stadium-950 font-bold shadow-glow-green/20'
              : 'bg-stadium-900 text-slate-300 hover:bg-stadium-850 border border-stadium-800'
          }`}
        >
          Barcha ligalar ({matches.length})
        </button>

        {leaguesList.map((league) => (
          <button
            key={league}
            onClick={() => setSelectedLeague(league)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedLeague === league
                ? 'bg-pitch-glow text-stadium-950 font-bold shadow-glow-green/20'
                : 'bg-stadium-900 text-slate-300 hover:bg-stadium-850 border border-stadium-800'
            }`}
          >
            {league}
          </button>
        ))}
      </div>

      {/* Match Cards Grid */}
      {loading ? (
        <LoadingSkeleton rows={4} />
      ) : filteredMatches.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredMatches.map((m) => (
            <MatchCard key={m.id} match={m} onSelect={onSelectMatch} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-stadium-900/40 rounded-3xl border border-stadium-800 p-8 space-y-3">
          <div className="w-12 h-12 rounded-full bg-stadium-800 flex items-center justify-center mx-auto text-slate-400">
            ⚽
          </div>
          <h3 className="font-bold text-slate-200">Hozirda tanlangan ligada jonli o‘yin mavjud emas</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Barcha ligalar filtrini tanlang yoki bugungi o‘yinlar jadvalini ko‘ring.
          </p>
        </div>
      )}
    </div>
  );
};
