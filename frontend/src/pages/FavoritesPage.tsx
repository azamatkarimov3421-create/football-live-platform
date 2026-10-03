import React from 'react';
import { Star, Trash2, Users, Calendar } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import { MatchCard } from '../components/MatchCard';
import { Match } from '../types';

interface Props {
  onSelectMatch: (match: Match) => void;
  onNavigate: (tab: string, param?: any) => void;
}

export const FavoritesPage: React.FC<Props> = ({ onSelectMatch, onNavigate }) => {
  const { favorites, toggleFavorite } = useFavorites();

  const favoriteMatches = favorites.filter((f) => f.item_type === 'match');
  const favoriteTeams = favorites.filter((f) => f.item_type === 'team');

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="p-6 rounded-3xl bg-stadium-900 border border-stadium-800 shadow-card flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-white">Sevimlilar</h1>
            <p className="text-xs sm:text-sm text-slate-400">
              Siz saqlab qo‘ygan sevimli o‘yinlar, klublar va musobaqalar
            </p>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full bg-stadium-950 border border-stadium-800 text-xs font-bold text-amber-400 font-mono">
          {favorites.length} ta saqlangan
        </span>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-20 bg-stadium-900/40 rounded-3xl border border-stadium-800 p-8 space-y-4">
          <div className="w-16 h-16 rounded-full bg-stadium-800/80 flex items-center justify-center mx-auto text-slate-500">
            <Star className="w-8 h-8 text-slate-600" />
          </div>
          <h3 className="font-bold text-slate-200 text-lg">Hozircha sevimlilar ro‘yxati bo‘sh</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            O‘yinlar kartasidagi yulduzcha tugmasini yoki jamoalar sahifasida "Sevimlilarga qo‘shish" tugmasini bosing.
          </p>
          <button
            onClick={() => onNavigate('matches')}
            className="px-5 py-2.5 rounded-2xl bg-pitch-glow text-stadium-950 font-bold text-xs hover:opacity-90 transition-opacity"
          >
            O‘yinlarni ko‘rish &rarr;
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Favorite Matches */}
          {favoriteMatches.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>Saqlangan O‘yinlar ({favoriteMatches.length})</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {favoriteMatches.map((fav) => {
                  if (fav.metadata?.id) {
                    return (
                      <MatchCard
                        key={fav.item_id}
                        match={fav.metadata}
                        onSelect={onSelectMatch}
                      />
                    );
                  }
                  return (
                    <div
                      key={fav.item_id}
                      className="p-4 rounded-2xl bg-stadium-900 border border-stadium-800 flex items-center justify-between"
                    >
                      <span className="font-semibold text-sm text-slate-200">{fav.item_name}</span>
                      <button
                        onClick={() => toggleFavorite('match', fav.item_id, fav.item_name)}
                        className="text-slate-500 hover:text-rose-400 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Favorite Teams */}
          {favoriteTeams.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <Users className="w-4 h-4 text-indigo-400" />
                <span>Sevimli Jamoalar ({favoriteTeams.length})</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {favoriteTeams.map((fav) => (
                  <div
                    key={fav.item_id}
                    onClick={() => onNavigate('teams', Number(fav.item_id))}
                    className="p-4 rounded-2xl bg-stadium-900 border border-stadium-800 hover:border-pitch-glow/40 flex items-center justify-between cursor-pointer group transition-all"
                  >
                    <div className="flex items-center gap-3">
                      {fav.metadata?.crest && (
                        <img
                          src={fav.metadata.crest}
                          alt=""
                          className="w-8 h-8 object-contain"
                        />
                      )}
                      <div>
                        <p className="font-semibold text-slate-200 text-sm group-hover:text-pitch-glow">
                          {fav.item_name}
                        </p>
                        <p className="text-[10px] text-slate-500">Klub sahifasi &rarr;</p>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite('team', fav.item_id, fav.item_name);
                      }}
                      className="p-1.5 text-slate-500 hover:text-rose-400 rounded-lg hover:bg-stadium-800"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
