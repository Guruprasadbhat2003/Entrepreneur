import React, { useState } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { AIChat } from './components/AIChat';
import { LearningPath } from './components/LearningPath';
import { Profile } from './components/Profile';
import { Leaderboard } from './components/Leaderboard';

function App() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'chat' | 'learning' | 'profile' | 'leaderboard'>('dashboard');
  const [user] = useState({
    id: '1',
    name: 'Guruprasad Vishnu Bhat',
    level: 12,
    points: 2750,
    badges: ['First Idea', 'Market Researcher', 'Pitch Perfect', 'Team Builder'],
    streak: 7,
    completedModules: 8,
    totalModules: 24
  });

  const renderCurrentView = () => {
    switch (currentView) {
      case 'chat':
        return <AIChat user={user} />;
      case 'learning':
        return <LearningPath user={user} />;
      case 'profile':
        return <Profile user={user} />;
      case 'leaderboard':
        return <Leaderboard currentUser={user} />;
      default:
        return <Dashboard user={user} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Header currentView={currentView} onViewChange={setCurrentView} user={user} />
      <main className="container mx-auto px-4 py-8">
        {renderCurrentView()}
      </main>
    </div>
  );
}

export default App;