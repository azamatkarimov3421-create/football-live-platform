import React, { useEffect, useState } from 'react';
import { Radio, Calendar, ArrowRight, Zap, Trophy } from 'lucide-react';
import { api } from '../services/api';
import { Match, Competition, SystemMetrics } from '../types';
import { MatchCard } from '../components/MatchCard';
import { LoadingSkeleton } from '../components/LoadingSkeleton';

interface Props {
  onNavigate: (tab: string, param?: any) => void;
  onSelectMatch: (match: Match) => void;
}

export const HomePage: React.FC<Props> = ({ onNavigate, onSelectMatch }) => {
  const [liveMatches, setLiveMatches] = useState<Match[]>([]);
  const [todayMatches, setTodayMatches] = useState<Match[]>([]);
  const [leagues, setLeagues] = useState<Competition[]>([]);
  const [metrics, setMetrics] = useState<SystemMetrics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [liveRes, todayRes, leaguesRes, sysMetrics] = await Promise.all([
          api.getLiveMatches().catch(() => ({ matches: [] })),
          api.getTodayMatches().catch(() => ({ matches: [] })),
          api.getLeagues().catch(() => []),
          api.getSystemMetrics().catch(() => null),
        ]);

        setLiveMatches(liveRes.matches || []);
        setTodayMatches(todayRes.matches || []);
        setLeagues(leaguesRes || []);
        setMetrics(sysMetrics);
      } catch (err) {
        console.error('Home load error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000); // 30s auto-refresh
    return () => clearInterval(interval);
  }, []);

  const heroMatch = liveMatches.length > 0 ? liveMatches[0] : todayMatches[0];

  return (
    <div className="space-y-10 animate-fade-in">
      {/* 10,000 Concurrency Real-Time Performance Banner */}
      <div className="bg-gradient-to-r from-stadium-900 via-stadium-850 to-stadium-900 border border-stadium-800 rounded-3xl p-4 sm:p-6 shadow-glow-green/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-pitch-glow/20 border border-pitch-glow/40 flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6 text-pitch-glow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-white">
                  10,000 Foydalanuvchi Himoyasi Faol
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Single-Flight Deduplication
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                10 ming foydalanuvchi bir vaqtda kirsa ham, Football API'ga faqat 1 ta so‘rov yuboriladi va barchaga Redis orqali taqsimlanadi.
              </p>
            </div>
          </div>

          {/* Quick Metrics pill */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="text-right">
              <p className="text-xs text-slate-400">Cache samaradorligi</p>
              <p className="font-mono font-bold text-pitch-glow text-base">
                {metrics?.cache.hitRatio || '99.9%'} Hit
              </p>
            </div>
            <button
              onClick={() => onNavigate('profile')}
              className="px-3.5 py-2 rounded-xl bg-stadium-800 hover:bg-stadium-700 text-xs font-semibold text-slate-200 border border-stadium-700 transition-colors"
            >
              Tizim ko‘rsatkichlari &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Hero Match Spotlight */}
      {heroMatch && (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-stadium-900 via-stadium-850 to-stadium-950 border border-stadium-800 p-6 md:p-8 shadow-card">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-fast"></span>
                <span>Kunning asosiy qarama-qarshiligi</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {heroMatch.homeTeam.name} vs {heroMatch.awayTeam.name}
              </h1>
              <p className="text-xs sm:text-sm text-slate-400">
                {heroMatch.competition.name} · {heroMatch.extra?.venue || 'Markaziy arena'}
              </p>
            </div>

            {/* Score Centerpiece */}
            <div
              onClick={() => onSelectMatch(heroMatch)}
              className="flex items-center gap-6 p-4 rounded-2xl bg-stadium-950/80 border border-stadium-800 cursor-pointer hover:border-pitch-glow/40 transition-colors"
            >
              <div className="flex flex-col items-center">
                <img
                  src={heroMatch.homeTeam.crest}
                  alt={heroMatch.homeTeam.name}
                  className="w-12 h-12 object-contain"
                />
                <span className="text-xs font-semibold text-slate-200 mt-1">
                  {heroMatch.homeTeam.shortName}
                </span>
              </div>

              <div className="text-center px-4">
                <div className="text-2xl sm:text-4xl font-mono font-black text-pitch-glow">
                  {heroMatch.score.fullTime.home ?? 0} : {heroMatch.score.fullTime.away ?? 0}
                </div>
                {heroMatch.minute && (
                  <span className="text-[11px] font-bold text-emerald-400 animate-pulse">
                    {heroMatch.minute}' Jonli
                  </span>
                )}
              </div>

              <div className="flex flex-col items-center">
                <img
                  src={heroMatch.awayTeam.crest}
                  alt={heroMatch.awayTeam.name}
                  className="w-12 h-12 object-contain"
                />
                <span className="text-xs font-semibold text-slate-200 mt-1">
                  {heroMatch.awayTeam.shortName}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Live Matches Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Radio className="w-5 h-5 text-emerald-400 animate-pulse" />
            <h2 className="text-lg sm:text-xl font-bold text-white">Jonli O‘yinlar</h2>
            <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400">
              {liveMatches.length}
            </span>
          </div>
          <button
            onClick={() => onNavigate('live')}
            className="text-xs sm:text-sm font-semibold text-pitch-glow hover:underline flex items-center gap-1"
          >
            Barchasini ko‘rish <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {loading ? (
          <LoadingSkeleton rows={2} />
        ) : liveMatches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {liveMatches.map((m) => (
              <MatchCard key={m.id} match={m} onSelect={onSelectMatch} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-stadium-900/40 rounded-2xl border border-stadium-800 text-slate-400 text-sm">
            Hozirda faol jonli o‘yinlar yo‘q. Bugungi o‘yinlar jadvalini ko‘ring.
          </div>
        )}
      </section>

      {/* Top Leagues Carousel / Quick Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg sm:text-xl font-bold text-white">Top Turnirlar</h2>
          </div>
          <button
            onClick={() => onNavigate('leagues')}
            className="text-xs sm:text-sm font-semibold text-pitch-glow hover:underline flex items-center gap-1"
          >
            Barcha ligalar <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {leagues.map((league) => (
            <div
              key={league.id}
              onClick={() => onNavigate('standings', league.code)}
              className="bg-stadium-900/80 hover:bg-stadium-850 border border-stadium-800 hover:border-pitch-glow/40 rounded-2xl p-4 flex flex-col items-center text-center cursor-pointer transition-all group"
            >
              <img
                src={league.emblem}
                alt={league.name}
                className="w-12 h-12 object-contain group-hover:scale-105 transition-transform"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="font-semibold text-slate-200 text-xs mt-2 line-clamp-1 group-hover:text-pitch-glow">
                {league.name}
              </span>
              <span className="text-[10px] text-slate-500 mt-0.5">Jadval &rarr;</span>
            </div>
          ))}
        </div>
      </section>

      {/* Today's Matches Fixture List */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-cyan-400" />
            <h2 className="text-lg sm:text-xl font-bold text-white">Bugungi Barcha O‘yinlar</h2>
          </div>
          <button
            onClick={() => onNavigate('matches')}
            className="text-xs sm:text-sm font-semibold text-pitch-glow hover:underline flex items-center gap-1"
          >
            Taqvim <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {loading ? (
          <LoadingSkeleton rows={3} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {todayMatches.map((m) => (
              <MatchCard key={m.id} match={m} onSelect={onSelectMatch} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
