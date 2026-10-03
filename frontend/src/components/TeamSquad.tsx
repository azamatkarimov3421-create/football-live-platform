import React from 'react';
import { Player } from '../types';

interface Props {
  squad: Player[];
}

export const TeamSquad: React.FC<Props> = ({ squad }) => {
  const groups: { [key: string]: Player[] } = {
    'Darvozabonlar': squad.filter((p) => p.position === 'Goalkeeper'),
    'Himoyachilar': squad.filter((p) => p.position === 'Defence'),
    'Yarim himoyachilar': squad.filter((p) => p.position === 'Midfield'),
    'Hujumchilar': squad.filter((p) => p.position === 'Offence'),
  };

  return (
    <div className="space-y-6">
      {Object.entries(groups).map(([posTitle, players]) => {
        if (players.length === 0) return null;

        return (
          <div key={posTitle} className="space-y-3">
            <h4 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              {posTitle} ({players.length})
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {players.map((player) => (
                <div
                  key={player.id}
                  className="bg-stadium-900/60 border border-stadium-800 rounded-xl p-3 flex items-center justify-between hover:border-stadium-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-stadium-800 flex items-center justify-center font-mono font-bold text-xs text-slate-300">
                      {player.shirtNumber ?? '-'}
                    </span>
                    <div>
                      <p className="font-medium text-slate-200 text-sm">{player.name}</p>
                      <p className="text-xs text-slate-400">{player.nationality || 'Futbolchi'}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
