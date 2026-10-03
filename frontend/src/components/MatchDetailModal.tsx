import React, { useState } from 'react';
import { X, Star, MapPin, UserCheck } from 'lucide-react';
import { Match } from '../types';
import { StatusBadge } from './StatusBadge';
import { MatchStats } from './MatchStats';
import { useFavorites } from '../context/FavoritesContext';

interface Props {
  match: Match | null;
  onClose: () => void;
}

export const MatchDetailModal: React.FC<Props> = ({ match, onClose }) => {
  const [activeTab, setActiveTab] = useState<'stats' | 'events' | 'lineups'>('stats');
  const { isFavorite, toggleFavorite } = useFavorites();

  if (!match) return null;

  const isFav = isFavorite('match', match.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-stadium-900 border border-stadium-700 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 border-b border-stadium-800 bg-stadium-950/60">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            {match.competition?.emblem && (
              <img
                src={match.competition.emblem}
                alt=""
                className="w-4 h-4 object-contain"
              />
            )}
            <span className="font-semibold text-slate-200">{match.competition?.name}</span>
            {match.matchday && <span>· {match.matchday}-tur</span>}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() =>
                toggleFavorite(
                  'match',
                  match.id,
                  `${match.homeTeam.shortName} vs ${match.awayTeam.shortName}`,
                  match
                )
              }
              className={`p-1.5 rounded-xl border border-stadium-800 ${
                isFav ? 'text-amber-400 bg-amber-500/10' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Star className={`w-4 h-4 ${isFav ? 'fill-amber-400' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl border border-stadium-800 text-slate-400 hover:text-white hover:bg-stadium-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Score Hero Section */}
        <div className="p-6 bg-gradient-to-b from-stadium-950 to-stadium-900 border-b border-stadium-800 text-center">
          <div className="inline-block mb-3">
            <StatusBadge status={match.status} minute={match.minute} />
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            {/* Home */}
            <div className="flex flex-col items-center">
              <img
                src={match.homeTeam.crest}
                alt={match.homeTeam.name}
                className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://crests.football-data.org/PL.png';
                }}
              />
              <h3 className="mt-2 font-bold text-slate-100 text-sm md:text-base">
                {match.homeTeam.name}
              </h3>
            </div>

            {/* Score */}
            <div className="px-6 py-3 bg-stadium-950/80 rounded-2xl border border-stadium-800/80">
              <div className="text-3xl md:text-5xl font-black font-mono tracking-tight text-white flex items-center justify-center gap-2">
                <span>{match.score.fullTime.home ?? 0}</span>
                <span className="text-slate-600">:</span>
                <span>{match.score.fullTime.away ?? 0}</span>
              </div>
              {match.score.halfTime.home !== null && (
                <div className="text-[11px] text-slate-400 mt-1 font-mono">
                  1-bo'lim: ({match.score.halfTime.home} - {match.score.halfTime.away})
                </div>
              )}
            </div>

            {/* Away */}
            <div className="flex flex-col items-center">
              <img
                src={match.awayTeam.crest}
                alt={match.awayTeam.name}
                className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://crests.football-data.org/PL.png';
                }}
              />
              <h3 className="mt-2 font-bold text-slate-100 text-sm md:text-base">
                {match.awayTeam.name}
              </h3>
            </div>
          </div>

          {/* Match Venue / Referee */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            {match.extra?.venue && (
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                {match.extra.venue}
              </span>
            )}
            {match.extra?.referee && (
              <span className="flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
                Bosh hakam: {match.extra.referee}
              </span>
            )}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-stadium-800 bg-stadium-950/40">
          <button
            onClick={() => setActiveTab('stats')}
            className={`flex-1 py-3 text-xs md:text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'stats'
                ? 'border-emerald-400 text-emerald-400 bg-emerald-500/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Statistika
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`flex-1 py-3 text-xs md:text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'events'
                ? 'border-emerald-400 text-emerald-400 bg-emerald-500/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Voqealar (Xronologiya)
          </button>
          <button
            onClick={() => setActiveTab('lineups')}
            className={`flex-1 py-3 text-xs md:text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'lineups'
                ? 'border-emerald-400 text-emerald-400 bg-emerald-500/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Tarkiblar
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {activeTab === 'stats' && (
            <MatchStats
              stats={match.extra?.stats}
              homeName={match.homeTeam.name}
              awayName={match.awayTeam.name}
            />
          )}

          {activeTab === 'events' && (
            <div className="space-y-4">
              {match.extra?.events && match.extra.events.length > 0 ? (
                match.extra.events.map((evt, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 p-3 rounded-xl border ${
                      evt.team === 'home'
                        ? 'border-emerald-500/30 bg-emerald-950/20 mr-12'
                        : 'border-cyan-500/30 bg-cyan-950/20 ml-12 justify-end'
                    }`}
                  >
                    <span className="font-mono font-bold text-xs px-2 py-0.5 rounded bg-stadium-800 text-slate-300">
                      {evt.minute}'
                    </span>
                    <span className="text-sm font-semibold text-slate-100">
                      {evt.type === 'GOAL' && '⚽'}
                      {evt.type === 'YELLOW_CARD' && '🟨'}
                      {evt.type === 'RED_CARD' && '🟥'}
                      {evt.type === 'SUBSTITUTION' && '🔄'} {evt.player}
                    </span>
                    {evt.assist && (
                      <span className="text-xs text-slate-400">(Pass: {evt.assist})</span>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-slate-500 text-sm">
                  Ushbu o‘yin uchun asosiy voqealar ro‘yxati topilmadi.
                </div>
              )}
            </div>
          )}

          {activeTab === 'lineups' && (
            <div className="space-y-4 text-center py-6 text-slate-400 text-sm">
              <p className="font-semibold text-slate-200">Asosiy tarkiblar tasdiqlangan</p>
              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="p-4 bg-stadium-950/60 rounded-xl border border-stadium-800">
                  <p className="font-bold text-emerald-400 mb-2">{match.homeTeam.name}</p>
                  <p className="text-xs text-slate-400">Sxema: 4-3-3</p>
                  <p className="text-xs text-slate-300 mt-2">Bosh murabbiy: Bosh shtab</p>
                </div>
                <div className="p-4 bg-stadium-950/60 rounded-xl border border-stadium-800">
                  <p className="font-bold text-cyan-400 mb-2">{match.awayTeam.name}</p>
                  <p className="text-xs text-slate-400">Sxema: 4-2-3-1</p>
                  <p className="text-xs text-slate-300 mt-2">Bosh murabbiy: Bosh shtab</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
