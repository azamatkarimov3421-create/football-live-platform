import React from 'react';
import { Star } from 'lucide-react';
import { Match } from '../types';
import { StatusBadge } from './StatusBadge';
import { useFavorites } from '../context/FavoritesContext';

interface Props {
  match: Match;
  onSelect?: (match: Match) => void;
}

export const MatchCard: React.FC<Props> = ({ match, onSelect }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isFav = isFavorite('match', match.id);

  const formatMatchTime = (isoString: string) => {
    try {
      const date = new Date(isoString);
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch {
      return '';
    }
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite('match', match.id, `${match.homeTeam.shortName} vs ${match.awayTeam.shortName}`, match);
  };

  const isLive = match.status === 'IN_PLAY' || match.status === 'PAUSED';
  const isFinished = match.status === 'FINISHED';

  return (
    <div
      onClick={() => onSelect && onSelect(match)}
      className={`group relative bg-stadium-900/80 hover:bg-stadium-850 border rounded-2xl p-4 transition-all duration-200 cursor-pointer shadow-card ${
        isLive
          ? 'border-emerald-500/40 hover:border-emerald-500/70 shadow-glow-green/10'
          : 'border-stadium-800 hover:border-stadium-700'
      }`}
    >
      {/* Top Header: Competition & Favorite */}
      <div className="flex items-center justify-between pb-3 border-b border-stadium-800/80 mb-3 text-xs">
        <div className="flex items-center gap-2 text-slate-400 truncate max-w-[80%]">
          {match.competition?.emblem ? (
            <img
              src={match.competition.emblem}
              alt={match.competition.name}
              className="w-4 h-4 object-contain"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          ) : null}
          <span className="font-medium text-slate-300 truncate">
            {match.competition?.name || 'Football'}
          </span>
          {match.matchday && (
            <span className="text-slate-500">· {match.matchday}-tur</span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <StatusBadge status={match.status} minute={match.minute} />
          <button
            onClick={handleFavoriteClick}
            className={`p-1 rounded-lg transition-colors ${
              isFav
                ? 'text-amber-400 hover:text-amber-300'
                : 'text-slate-500 hover:text-slate-300'
            }`}
            title={isFav ? 'Sevimlilardan o‘chirish' : 'Sevimlilarga qo‘shish'}
          >
            <Star className={`w-4 h-4 ${isFav ? 'fill-amber-400' : ''}`} />
          </button>
        </div>
      </div>

      {/* Main Match Grid */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        {/* Home Team */}
        <div className="flex items-center gap-3 min-w-0">
          <img
            src={match.homeTeam.crest}
            alt={match.homeTeam.name}
            className="w-8 h-8 md:w-10 md:h-10 object-contain shrink-0"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://crests.football-data.org/PL.png';
            }}
          />
          <div className="truncate">
            <p className="font-semibold text-slate-100 text-sm md:text-base truncate group-hover:text-emerald-400 transition-colors">
              {match.homeTeam.shortName || match.homeTeam.name}
            </p>
            <span className="text-xs text-slate-400">Mezbon</span>
          </div>
        </div>

        {/* Scoreboard / Time */}
        <div className="text-center px-3 py-1.5 bg-stadium-950/80 rounded-xl border border-stadium-800/80 min-w-[76px]">
          {isLive || isFinished ? (
            <div className="flex items-center justify-center gap-1.5">
              <span
                className={`text-lg md:text-xl font-bold font-mono ${
                  isLive ? 'text-emerald-400' : 'text-slate-100'
                }`}
              >
                {match.score.fullTime.home ?? 0}
              </span>
              <span className="text-slate-500 font-bold">:</span>
              <span
                className={`text-lg md:text-xl font-bold font-mono ${
                  isLive ? 'text-emerald-400' : 'text-slate-100'
                }`}
              >
                {match.score.fullTime.away ?? 0}
              </span>
            </div>
          ) : (
            <div className="text-xs font-semibold text-cyan-400 font-mono">
              {formatMatchTime(match.utcDate)}
            </div>
          )}

          {isLive && match.minute && (
            <div className="text-[10px] text-emerald-400 font-semibold tracking-wider uppercase mt-0.5 animate-pulse">
              {match.minute}'
            </div>
          )}
          {isFinished && (
            <div className="text-[10px] text-slate-500 font-medium uppercase mt-0.5">
              Yakunlandi
            </div>
          )}
        </div>

        {/* Away Team */}
        <div className="flex items-center justify-end gap-3 min-w-0 text-right">
          <div className="truncate">
            <p className="font-semibold text-slate-100 text-sm md:text-base truncate group-hover:text-emerald-400 transition-colors">
              {match.awayTeam.shortName || match.awayTeam.name}
            </p>
            <span className="text-xs text-slate-400">Mehmon</span>
          </div>
          <img
            src={match.awayTeam.crest}
            alt={match.awayTeam.name}
            className="w-8 h-8 md:w-10 md:h-10 object-contain shrink-0"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://crests.football-data.org/PL.png';
            }}
          />
        </div>
      </div>

      {/* Footer Info / Venue */}
      {match.extra?.venue && (
        <div className="mt-3 pt-2 text-[11px] text-slate-500 flex items-center justify-between border-t border-stadium-800/40">
          <span className="truncate">🏟️ {match.extra.venue}</span>
          <span className="text-emerald-400 group-hover:underline text-[10px] uppercase font-semibold">
            Tafsilotlar &rarr;
          </span>
        </div>
      )}
    </div>
  );
};
