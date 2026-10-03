import React, { useState } from 'react';
import {
  Flame,
  Radio,
  Calendar,
  Trophy,
  ListOrdered,
  Users,
  Star,
  User,
  Menu,
  X,
  ShieldCheck,
  Zap,
} from 'lucide-react';

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  liveCount?: number;
}

export const Header: React.FC<Props> = ({ activeTab, setActiveTab, liveCount = 3 }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Bosh sahifa', icon: Flame },
    { id: 'live', label: 'Jonli', icon: Radio, badge: liveCount },
    { id: 'matches', label: 'O‘yinlar', icon: Calendar },
    { id: 'leagues', label: 'Ligalar', icon: Trophy },
    { id: 'standings', label: 'Jadval', icon: ListOrdered },
    { id: 'teams', label: 'Jamoalar', icon: Users },
    { id: 'favorites', label: 'Sevimlilar', icon: Star },
    { id: 'profile', label: 'Profil', icon: User },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-stadium-800 bg-stadium-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pitch-glow via-emerald-600 to-teal-800 flex items-center justify-center shadow-glow-green">
              <Zap className="w-5 h-5 text-stadium-950 fill-stadium-950 transform group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-lg md:text-xl tracking-tight text-white group-hover:text-pitch-glow transition-colors">
                  FUTBOL<span className="text-pitch-glow">LIVE</span>
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-pitch-glow/15 text-pitch-glow border border-pitch-glow/30">
                  10K
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium hidden sm:block">
                Ultra-Fast Single Server Platform
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-stadium-850 text-pitch-glow border border-pitch-glow/30 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-stadium-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-pitch-glow' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className="w-5 h-5 rounded-full bg-emerald-500 text-stadium-950 text-[10px] font-bold flex items-center justify-center animate-pulse-fast">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Status Badge */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-stadium-900 border border-stadium-800 text-xs">
              <span className="w-2 h-2 rounded-full bg-pitch-glow animate-pulse"></span>
              <span className="text-slate-300 font-mono text-[11px]">Redis & Deduplication: ON</span>
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {liveCount > 0 && (
              <button
                onClick={() => handleNavClick('live')}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold border border-emerald-500/40"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{liveCount} Live</span>
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-stadium-900 border border-stadium-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stadium-950 border-b border-stadium-800 px-4 pt-2 pb-4 space-y-1 animate-fade-in">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-stadium-850 text-pitch-glow border border-pitch-glow/20'
                    : 'text-slate-300 hover:bg-stadium-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-slate-400" />
                  <span>{item.label}</span>
                </div>
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-stadium-950 text-xs font-bold">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
