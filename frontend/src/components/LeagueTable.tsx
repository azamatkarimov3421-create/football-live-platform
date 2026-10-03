import React from 'react';
import { StandingTableItem } from '../types';

interface Props {
  table: StandingTableItem[];
  onTeamClick?: (teamId: number) => void;
}

export const LeagueTable: React.FC<Props> = ({ table, onTeamClick }) => {
  const renderFormBadge = (char: string, i: number) => {
    let color = 'bg-slate-700 text-slate-300';
    if (char === 'W') color = 'bg-emerald-600 text-white';
    if (char === 'D') color = 'bg-amber-600 text-white';
    if (char === 'L') color = 'bg-rose-600 text-white';

    return (
      <span
        key={i}
        className={`w-5 h-5 rounded-md inline-flex items-center justify-center text-[10px] font-bold ${color}`}
      >
        {char}
      </span>
    );
  };

  return (
    <div className="overflow-x-auto rounded-2xl border border-stadium-800 bg-stadium-900/90 shadow-card">
      <table className="w-full text-left border-collapse text-sm">
        <thead>
          <tr className="border-b border-stadium-800 bg-stadium-950/80 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            <th className="py-3.5 px-3 text-center w-12">#</th>
            <th className="py-3.5 px-3">Jamoa</th>
            <th className="py-3.5 px-2 text-center">O‘</th>
            <th className="py-3.5 px-2 text-center hidden sm:table-cell">G‘</th>
            <th className="py-3.5 px-2 text-center hidden sm:table-cell">D</th>
            <th className="py-3.5 px-2 text-center hidden sm:table-cell">M</th>
            <th className="py-3.5 px-2 text-center hidden md:table-cell">UG</th>
            <th className="py-3.5 px-2 text-center hidden md:table-cell">O‘G</th>
            <th className="py-3.5 px-2 text-center">Farq</th>
            <th className="py-3.5 px-3 text-center font-bold text-slate-200">Ochko</th>
            <th className="py-3.5 px-3 text-center hidden lg:table-cell">Forma</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-stadium-800/60">
          {table.map((row) => {
            const isTop4 = row.position <= 4;
            const isRelegation = row.position >= table.length - 2;

            return (
              <tr
                key={row.team.id}
                onClick={() => onTeamClick && onTeamClick(row.team.id)}
                className="hover:bg-stadium-850/80 transition-colors cursor-pointer group"
              >
                {/* Position with qualification zone indicator */}
                <td className="py-3 px-3 text-center font-mono font-medium relative">
                  {isTop4 && (
                    <span className="absolute left-0 top-1 bottom-1 w-1 bg-emerald-400 rounded-r"></span>
                  )}
                  {isRelegation && (
                    <span className="absolute left-0 top-1 bottom-1 w-1 bg-rose-500 rounded-r"></span>
                  )}
                  <span
                    className={`text-xs ${
                      isTop4
                        ? 'text-emerald-400 font-bold'
                        : isRelegation
                        ? 'text-rose-400 font-bold'
                        : 'text-slate-400'
                    }`}
                  >
                    {row.position}
                  </span>
                </td>

                {/* Team Info */}
                <td className="py-3 px-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={row.team.crest}
                      alt={row.team.name}
                      className="w-6 h-6 object-contain shrink-0"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://crests.football-data.org/PL.png';
                      }}
                    />
                    <div className="truncate">
                      <span className="font-semibold text-slate-100 group-hover:text-emerald-400 transition-colors">
                        {row.team.name}
                      </span>
                      {row.team.shortName && (
                        <span className="hidden sm:inline text-xs text-slate-500 ml-2">
                          ({row.team.shortName})
                        </span>
                      )}
                    </div>
                  </div>
                </td>

                {/* Played */}
                <td className="py-3 px-2 text-center text-slate-300 font-mono text-xs">
                  {row.playedGames}
                </td>

                {/* Won */}
                <td className="py-3 px-2 text-center text-slate-400 font-mono text-xs hidden sm:table-cell">
                  {row.won}
                </td>

                {/* Draw */}
                <td className="py-3 px-2 text-center text-slate-400 font-mono text-xs hidden sm:table-cell">
                  {row.draw}
                </td>

                {/* Lost */}
                <td className="py-3 px-2 text-center text-slate-400 font-mono text-xs hidden sm:table-cell">
                  {row.lost}
                </td>

                {/* Goals For */}
                <td className="py-3 px-2 text-center text-slate-400 font-mono text-xs hidden md:table-cell">
                  {row.goalsFor}
                </td>

                {/* Goals Against */}
                <td className="py-3 px-2 text-center text-slate-400 font-mono text-xs hidden md:table-cell">
                  {row.goalsAgainst}
                </td>

                {/* Goal Difference */}
                <td className="py-3 px-2 text-center font-mono text-xs">
                  <span
                    className={
                      row.goalDifference > 0
                        ? 'text-emerald-400 font-medium'
                        : row.goalDifference < 0
                        ? 'text-rose-400 font-medium'
                        : 'text-slate-400'
                    }
                  >
                    {row.goalDifference > 0 ? `+${row.goalDifference}` : row.goalDifference}
                  </span>
                </td>

                {/* Points */}
                <td className="py-3 px-3 text-center font-bold text-emerald-400 font-mono text-sm bg-stadium-950/40">
                  {row.points}
                </td>

                {/* Form Badges */}
                <td className="py-3 px-3 text-center hidden lg:table-cell">
                  <div className="flex items-center justify-center gap-1">
                    {row.form
                      ? row.form.split(',').map((f, i) => renderFormBadge(f.trim(), i))
                      : null}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Legend */}
      <div className="p-3 bg-stadium-950/90 border-t border-stadium-800 flex flex-wrap items-center gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
          <span>UEFA Chempionlar Ligasi (Top 4)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500"></span>
          <span>Quyi ligaga tushish zonasi</span>
        </div>
        <div className="ml-auto text-[11px] text-slate-500">
          Cache yangilanish muddati: 5 daqiqa (Redis)
        </div>
      </div>
    </div>
  );
};
