import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { LivePage } from './pages/LivePage';
import { MatchesPage } from './pages/MatchesPage';
import { LeaguesPage } from './pages/LeaguesPage';
import { StandingsPage } from './pages/StandingsPage';
import { TeamsPage } from './pages/TeamsPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { ProfilePage } from './pages/ProfilePage';
import { MatchDetailModal } from './components/MatchDetailModal';
import { FavoritesProvider } from './context/FavoritesContext';
import { ThemeProvider } from './context/ThemeContext';
import { Match } from './types';

export const AppContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedLeague, setSelectedLeague] = useState<string>('PL');
  const [selectedTeamId, setSelectedTeamId] = useState<number>(65);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);

  const handleNavigate = (tab: string, param?: any) => {
    if (tab === 'standings' && typeof param === 'string') {
      setSelectedLeague(param);
    }
    if (tab === 'teams' && typeof param === 'number') {
      setSelectedTeamId(param);
    }
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectLeague = (leagueCode: string) => {
    setSelectedLeague(leagueCode);
    setActiveTab('standings');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTeam = (teamId: number) => {
    setSelectedTeamId(teamId);
    setActiveTab('teams');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stadium-950 text-slate-100 flex flex-col selection:bg-pitch-glow selection:text-stadium-950 font-sans">
      <Header
        activeTab={activeTab}
        setActiveTab={(t) => handleNavigate(t)}
        liveCount={3}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {activeTab === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectMatch={(m) => setSelectedMatch(m)}
          />
        )}

        {activeTab === 'live' && (
          <LivePage onSelectMatch={(m) => setSelectedMatch(m)} />
        )}

        {activeTab === 'matches' && (
          <MatchesPage onSelectMatch={(m) => setSelectedMatch(m)} />
        )}

        {activeTab === 'leagues' && (
          <LeaguesPage onSelectLeague={handleSelectLeague} />
        )}

        {activeTab === 'standings' && (
          <StandingsPage
            initialLeagueCode={selectedLeague}
            onSelectTeam={handleSelectTeam}
          />
        )}

        {activeTab === 'teams' && (
          <TeamsPage initialTeamId={selectedTeamId} />
        )}

        {activeTab === 'favorites' && (
          <FavoritesPage
            onSelectMatch={(m) => setSelectedMatch(m)}
            onNavigate={handleNavigate}
          />
        )}

        {activeTab === 'profile' && <ProfilePage />}
      </main>

      <Footer />

      {/* Match Details Modal */}
      {selectedMatch && (
        <MatchDetailModal
          match={selectedMatch}
          onClose={() => setSelectedMatch(null)}
        />
      )}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <AppContent />
      </FavoritesProvider>
    </ThemeProvider>
  );
};

export default App;
