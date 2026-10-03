import React from 'react';

export const LoadingSkeleton: React.FC<{ rows?: number }> = ({ rows = 4 }) => {
  return (
    <div className="space-y-4 animate-pulse">
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className="bg-stadium-900/60 border border-stadium-800 rounded-xl p-5 flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-stadium-800 rounded-full"></div>
            <div className="space-y-2">
              <div className="w-32 h-4 bg-stadium-800 rounded"></div>
              <div className="w-24 h-3 bg-stadium-800/60 rounded"></div>
            </div>
          </div>
          <div className="w-16 h-8 bg-stadium-800 rounded-lg"></div>
          <div className="flex items-center gap-4">
            <div className="space-y-2 text-right">
              <div className="w-32 h-4 bg-stadium-800 rounded"></div>
              <div className="w-20 h-3 bg-stadium-800/60 rounded"></div>
            </div>
            <div className="w-10 h-10 bg-stadium-800 rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
