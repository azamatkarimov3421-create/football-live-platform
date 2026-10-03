import React, { useEffect, useState } from 'react';
import { Users, Star, MapPin, Shield, Calendar } from 'lucide-react';
import { api } from '../services/api';
import { TeamDetail } from '../types';
import { TeamSquad } from '../components/TeamSquad';
import { useFavorites } from '../context/FavoritesContext';
import { LoadingSkeleton } from '../components/LoadingSkeleton';

interface Props {
  initialTeamId?: number;
}

export const TeamsPage: React.FC<Props> = ({ initialTeamId = 65 }) => {
  const [teamId, setTeamId] = useState<number>(initialTeamId);
  const [team, setTeam] = useState<TeamDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const { isFavorite, toggleFavorite } = useFavorites();

  const popularTeams = [
    { id: 65, name: 'Manchester City', crest: 'https://crests.football-data.org/65.png' },
    { id: 86, name: 'Real Madrid', crest: 'https://crests.football-data.org/86.png' },
    { id: 81, name: 'Barcelona', crest: 'https://crests.football-data.org/81.png' },
    { id: 57, name: 'Arsenal', crest: 'https://crests.football-data.org/57.png' },
    { id: 64, name: 'Liverpool', crest: 'https://crests.football-data.org/64.png' },
    { id: 5, name: 'Bayern München', crest: 'https://crests.football-data.org/5.png' },
    { id: 108, name: 'Inter Milan', crest: 'https://crests.football-data.org/108.png' },
    { id: 524, name: 'PSG', crest: 'https://crests.football-data.org/524.png' },
  ];

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        setLoading(true);
        const data = await api.getTeam(teamId);
        setTeam(data);
      } catch (err) {
        console.error('Failed to load team:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, [teamId]);

  const isFav = team ? isFavorite('team', team.id) : false;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header & Quick Selector */}
      <div className="p-6 rounded-3xl bg-stadium-900 border border-stadium-800 shadow-card space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
              <Users className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-white">Jamoalar Profili</h1>
              <p className="text-xs sm:text-sm text-slate-400">
                Tarkib, murabbiy, stadion va jamoa statistikasi
              </p>
            </div>
          </div>
        </div>

        {/* Quick Team Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {popularTeams.map((t) => (
            <button
              key={t.id}
              onClick={() => setTeamId(t.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all ${
                teamId === t.id
                  ? 'bg-pitch-glow text-stadium-950 font-bold shadow-glow-green/20'
                  : 'bg-stadium-950 text-slate-300 hover:bg-stadium-800 border border-stadium-800'
              }`}
            >
              <img
                src={t.crest}
                alt=""
                className="w-4 h-4 object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span>{t.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Team Details Hero */}
      {loading ? (
        <LoadingSkeleton rows={4} />
      ) : team ? (
        <div className="space-y-6">
          <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-stadium-900 via-stadium-850 to-stadium-950 border border-stadium-800 shadow-card relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
              <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                <div className="w-24 h-24 rounded-3xl bg-stadium-950/90 border border-stadium-800 p-4 flex items-center justify-center shadow-lg">
                  <img
                    src={team.crest}
                    alt={team.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://crests.football-data.org/PL.png';
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {team.name}
                    </h2>
                    <span className="px-2 py-0.5 rounded-md bg-stadium-800 text-xs font-mono font-bold text-slate-300">
                      {team.tla}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-400">
                    {team.venue && (
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                        {team.venue}
                      </span>
                    )}
                    {team.founded && (
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        Tashkil etilgan: {team.founded}
                      </span>
                    )}
                    {team.coach && (
                      <span className="flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5 text-indigo-400" />
                        Murabbiy: {team.coach.name} ({team.coach.nationality})
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <button
                onClick={() => toggleFavorite('team', team.id, team.name, team)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all border ${
                  isFav
                    ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                    : 'bg-stadium-800 text-slate-200 border-stadium-700 hover:bg-stadium-700'
                }`}
              >
                <Star className={`w-4 h-4 ${isFav ? 'fill-amber-400' : ''}`} />
                <span>{isFav ? 'Sevimlilarda saqlangan' : 'Sevimlilarga qo‘shish'}</span>
              </button>
            </div>
          </div>

          {/* Squad Roster */}
          <div className="p-6 rounded-3xl bg-stadium-900 border border-stadium-800 shadow-card space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span>Jamoa Tarkibi</span>
              <span className="text-xs text-slate-400 font-normal">
                ({team.squad.length} nafar futbolchi)
              </span>
            </h3>
            <TeamSquad squad={team.squad} />
          </div>
        </div>
      ) : null}
    </div>
  );
};
