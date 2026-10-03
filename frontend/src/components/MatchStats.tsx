import React from 'react';
import { MatchStats as IMatchStats } from '../types';

interface Props {
  stats?: IMatchStats;
  homeName: string;
  awayName: string;
}

export const MatchStats: React.FC<Props> = ({ stats, homeName, awayName }) => {
  if (!stats) {
    return (
      <div className="text-center py-8 text-slate-500 text-sm">
        Ushbu o‘yin uchun kengaytirilgan statistika hali kiritilmagan.
      </div>
    );
  }

  const statItems = [
    { label: "To'pga egalik", home: stats.possession.home, away: stats.possession.away, isPercent: true },
    { label: "Jami zarbalar", home: stats.shotsTotal.home, away: stats.shotsTotal.away },
    { label: "Aniq zarbalar", home: stats.shotsOnTarget.home, away: stats.shotsOnTarget.away },
    { label: "Burchak to'plari", home: stats.corners.home, away: stats.corners.away },
    { label: "Qoidabuzarliklar", home: stats.fouls.home, away: stats.fouls.away },
    { label: "Sariq kartochkalar", home: stats.yellowCards.home, away: stats.yellowCards.away },
    { label: "Qizil kartochkalar", home: stats.redCards.home, away: stats.redCards.away },
    { label: "Darvozabon seyflari", home: stats.saves.home, away: stats.saves.away },
  ];

  return (
    <div className="space-y-4 py-2">
      <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
        <span className="text-left truncate max-w-[40%] text-emerald-400">{homeName}</span>
        <span className="text-center text-slate-500">Statistika</span>
        <span className="text-right truncate max-w-[40%] text-cyan-400">{awayName}</span>
      </div>

      {statItems.map((item, idx) => {
        const total = (item.home || 0) + (item.away || 0) || 1;
        const homePct = item.isPercent ? item.home : Math.round((item.home / total) * 100);
        const awayPct = item.isPercent ? item.away : 100 - homePct;

        return (
          <div key={idx} className="space-y-1.5">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-slate-200 font-mono font-semibold">
                {item.home}
                {item.isPercent ? '%' : ''}
              </span>
              <span className="text-slate-400 text-xs">{item.label}</span>
              <span className="text-slate-200 font-mono font-semibold">
                {item.away}
                {item.isPercent ? '%' : ''}
              </span>
            </div>

            <div className="h-2 w-full bg-stadium-800 rounded-full flex overflow-hidden">
              <div
                className="bg-emerald-500 h-full transition-all duration-500"
                style={{ width: `${homePct}%` }}
              ></div>
              <div
                className="bg-cyan-500 h-full transition-all duration-500"
                style={{ width: `${awayPct}%` }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
