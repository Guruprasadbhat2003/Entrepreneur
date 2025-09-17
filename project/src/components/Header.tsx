import React from 'react';
import { 
  Home, 
  MessageCircle, 
  BookOpen, 
  User, 
  Trophy,
  Star,
  Zap
} from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onViewChange: (view: 'dashboard' | 'chat' | 'learning' | 'profile' | 'leaderboard') => void;
  user: any;
}

export function Header({ currentView, onViewChange, user }: HeaderProps) {
  const navItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'chat', icon: MessageCircle, label: 'AI Mentor' },
    { id: 'learning', icon: BookOpen, label: 'Learning Path' },
    { id: 'leaderboard', icon: Trophy, label: 'Leaderboard' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                EntrepreneurAI
              </h1>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id as any)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  currentView === item.id
                    ? 'bg-purple-100 text-purple-700 shadow-sm'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-purple-600'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="hidden md:inline text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* User Stats */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-orange-100 px-3 py-1 rounded-full">
              <Star className="w-4 h-4 text-yellow-600" />
              <span className="text-sm font-semibold text-yellow-700">{user.points}</span>
            </div>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 px-3 py-1 rounded-full">
              <span className="text-xs text-purple-600 font-medium">LVL</span>
              <span className="text-sm font-bold text-purple-700">{user.level}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}