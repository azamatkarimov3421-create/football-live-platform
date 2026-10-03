import React, { useEffect, useState } from 'react';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { api } from '../services/api';
import { Match, Competition } from '../types';
import { MatchCard } from '../components/MatchCard';
import { LoadingSkeleton } from '../components/LoadingSkeleton';

interface Props {
  onSelectMatch: (match: Match) => void;
}

export const MatchesPage: React.FC<Props> = ({ onSelectMatch }) => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDateMode, setSelectedDateMode] = useState<'yesterday' | 'today' | 'tomorrow' | 'custom'>('today');
  const [customDate, setCustomDate] = useState<string>(() => new Date().toISOString().split('T')[0]);
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [selectedCompetition, setSelectedCompetition] = useState<string>('ALL');
  const [leagues, setLeagues] = useState<Competition[]>([]);

  const getDateString = () => {
    const d = new Date();
    if (selectedDateMode === 'yesterday') {
      d.setDate(d.getDate() - 1);
      return d.toISOString().split('T')[0];
    }
    if (selectedDateMode === 'tomorrow') {
      d.setDate(d.getDate() + 1);
      return d.toISOString().split('T')[0];
    }
    if (selectedDateMode === 'custom') {
      return customDate;
    }
    return d.toISOString().split('T')[0];
  };

  useEffect(() => {
    api.getLeagues().then(setLeagues).catch(() => {});
  }, []);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        setLoading(true);
        const targetDate = getDateString();
        const res = await api.getMatches({
          date: targetDate,
          status: statusFilter === 'ALL' ? undefined : statusFilter,
          competition: selectedCompetition === 'ALL' ? undefined : selectedCompetition,
        });
        setMatches(res.matches || []);
      } catch (err) {
        console.error('Failed to load matches:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, [selectedDateMode, customDate, statusFilter, selectedCompetition]);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header & Date Controls */}
      <div className="p-6 rounded-3xl bg-stadium-900 border border-stadium-800 shadow-card space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
              <CalendarIcon className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-white">O‘yinlar Taqvim</h1>
              <p className="text-xs sm:text-sm text-slate-400">
                Sana va musobaqalar bo‘yicha to‘liq taqvim
              </p>
            </div>
          </div>

          {/* Quick Date Pills */}
          <div className="flex items-center gap-1.5 bg-stadium-950 p-1 rounded-2xl border border-stadium-800 text-xs">
            <button
              onClick={() => setSelectedDateMode('yesterday')}
              className={`px-3 py-1.5 rounded-xl font-medium transition-colors ${
                selectedDateMode === 'yesterday'
                  ? 'bg-stadium-800 text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Kecha
            </button>
            <button
              onClick={() => setSelectedDateMode('today')}
              className={`px-3 py-1.5 rounded-xl font-medium transition-colors ${
                selectedDateMode === 'today'
                  ? 'bg-pitch-glow text-stadium-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Bugun
            </button>
            <button
              onClick={() => setSelectedDateMode('tomorrow')}
              className={`px-3 py-1.5 rounded-xl font-medium transition-colors ${
                selectedDateMode === 'tomorrow'
                  ? 'bg-stadium-800 text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Ertaga
            </button>
          </div>
        </div>

        {/* Secondary Filter Row: Status + League Select */}
        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-stadium-800/80 text-xs">
          {/* Status buttons */}
          <div className="flex items-center gap-1">
            {[
              { id: 'ALL', label: 'Barchasi' },
              { id: 'IN_PLAY', label: 'Jonli' },
              { id: 'FINISHED', label: 'Tugagan' },
              { id: 'TIMED', label: 'Kutilayotgan' },
            ].map((st) => (
              <button
                key={st.id}
                onClick={() => setStatusFilter(st.id)}
                className={`px-3 py-1.5 rounded-xl transition-colors ${
                  statusFilter === st.id
                    ? 'bg-stadium-800 text-pitch-glow font-bold border border-pitch-glow/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>

          {/* League Dropdown Filter */}
          <div className="ml-auto flex items-center gap-2">
            <select
              value={selectedCompetition}
              onChange={(e) => setSelectedCompetition(e.target.value)}
              className="bg-stadium-950 border border-stadium-800 rounded-xl px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-pitch-glow"
            >
              <option value="ALL">Barcha ligalar</option>
              {leagues.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.name}
                </option>
              ))}
            </select>

            <input
              type="date"
              value={getDateString()}
              onChange={(e) => {
                setCustomDate(e.target.value);
                setSelectedDateMode('custom');
              }}
              className="bg-stadium-950 border border-stadium-800 rounded-xl px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-pitch-glow"
            />
          </div>
        </div>
      </div>

      {/* Matches List */}
      {loading ? (
        <LoadingSkeleton rows={4} />
      ) : matches.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {matches.map((m) => (
            <MatchCard key={m.id} match={m} onSelect={onSelectMatch} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-stadium-900/40 rounded-3xl border border-stadium-800 p-8 space-y-3">
          <Clock className="w-10 h-10 text-slate-500 mx-auto" />
          <h3 className="font-bold text-slate-200">Ushbu kunga mos o‘yinlar topilmadi</h3>
          <p className="text-xs text-slate-500">
            Boshqa sanani yoki status filtrini tanlab ko‘ring.
          </p>
        </div>
      )}
    </div>
  );
};
