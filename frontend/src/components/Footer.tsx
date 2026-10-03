import React from 'react';
import { Server, Database, Cpu, Shield, Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-stadium-800 bg-stadium-950/90 text-slate-400 text-xs py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              ⚽
            </div>
            <div>
              <p className="font-bold text-slate-200">FutbolLive Platform — Single Server 10,000 Concurrent Engine</p>
              <p className="text-[11px] text-slate-500">React + TypeScript · Fastify + Node.js · Redis Cache · PostgreSQL</p>
            </div>
          </div>

          {/* Architecture badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stadium-900 border border-stadium-800 text-[11px] text-slate-300">
              <Server className="w-3 h-3 text-emerald-400" /> Fastify Node.js
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stadium-900 border border-stadium-800 text-[11px] text-slate-300">
              <Zap className="w-3 h-3 text-amber-400" /> Redis Single-Flight
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stadium-900 border border-stadium-800 text-[11px] text-slate-300">
              <Database className="w-3 h-3 text-cyan-400" /> PostgreSQL Pool
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stadium-900 border border-stadium-800 text-[11px] text-slate-300">
              <Shield className="w-3 h-3 text-indigo-400" /> Cloudflare Edge
            </span>
          </div>
        </div>

        <div className="border-t border-stadium-800/60 pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} FutbolLive. Barcha huquqlar himoyalangan. Football-Data.org API orqali ta'minlangan.</p>
          <p className="flex items-center gap-1">
            <Cpu className="w-3 h-3 text-emerald-400" />
            10 000 bir vaqtdagi so‘rovlar uchun optimallashtirilgan
          </p>
        </div>
      </div>
    </footer>
  );
};
