import React from 'react';

interface Props {
  status: string;
  minute?: number | string;
  className?: string;
}

export const StatusBadge: React.FC<Props> = ({ status, minute, className = '' }) => {
  switch (status) {
    case 'IN_PLAY':
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 ${className}`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-fast"></span>
          <span>{minute ? `${minute}'` : 'JONLI'}</span>
        </span>
      );
    case 'PAUSED':
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-400 border border-amber-500/30 ${className}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
          <span>Tanaffus (HT)</span>
        </span>
      );
    case 'FINISHED':
      return (
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-400 border border-slate-700 ${className}`}
        >
          Tugadi (FT)
        </span>
      );
    case 'TIMED':
    case 'SCHEDULED':
      return (
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-950/50 text-cyan-400 border border-cyan-800/50 ${className}`}
        >
          Kutilmoqda
        </span>
      );
    case 'POSTPONED':
      return (
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-950/40 text-red-400 border border-red-800/40 ${className}`}
        >
          Qoldirildi
        </span>
      );
    default:
      return (
        <span
          className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-slate-800 text-slate-400 ${className}`}
        >
          {status}
        </span>
      );
  }
};
