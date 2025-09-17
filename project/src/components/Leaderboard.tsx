import React, { useState } from 'react';
import { Trophy, Medal, Crown, Star, TrendingUp, Users } from 'lucide-react';

interface LeaderboardProps {
  currentUser: any;
}

export function Leaderboard({ currentUser }: LeaderboardProps) {
  const [timeframe, setTimeframe] = useState<'week' | 'month' | 'all'>('week');

  const leaderboardData = [
    {
      id: '1',
      name: 'Swasthik Krishna P',
      points: 3450,
      level: 15,
      badge: 'Business Guru',
      avatar: '👩‍💼',
      trend: '+250',
      completedModules: 18
    },
    {
      id: '2',
      name: 'Saketh K',
      points: 3200,
      level: 14,
      badge: 'Innovation Master',
      avatar: '👨‍💻',
      trend: '+180',
      completedModules: 16
    },
    {
      id: '3',
      name: 'Suprith',
      points: 2950,
      level: 13,
      badge: 'Market Analyst',
      avatar: '👩‍🎓',
      trend: '+220',
      completedModules: 15
    },
    {
      id: '4',
      name: 'Guruprasad Bhat',
      points: 2750,
      level: 12,
      badge: 'Rising Star',
      avatar: '👨‍🎓',
      trend: '+150',
      completedModules: 8,
      isCurrentUser: true
    },
    {
      id: '5',
      name: 'Ramakrishna Bhat PV',
      points: 2600,
      level: 12,
      badge: 'Team Builder',
      avatar: '👩‍🚀',
      trend: '+120',
      completedModules: 12
    },
    {
      id: '6',
      name: 'Shreesha',
      points: 2400,
      level: 11,
      badge: 'Pitch Perfect',
      avatar: '👨‍💼',
      trend: '+90',
      completedModules: 10
    },
    {
      id: '7',
      name: 'Pranav',
      points: 2200,
      level: 10,
      badge: 'Idea Generator',
      avatar: '👩‍💡',
      trend: '+110',
      completedModules: 9
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Medal className="w-6 h-6 text-amber-600" />;
      default:
        return (
          <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-sm font-medium text-gray-600">{rank}</span>
          </div>
        );
    }
  };

  const topThree = leaderboardData.slice(0, 3);
  const remaining = leaderboardData.slice(3);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Leaderboard</h2>
        <p className="text-lg text-gray-600 mb-6">
          See how you stack up against other aspiring entrepreneurs
        </p>
        
        {/* Timeframe Selector */}
        <div className="flex items-center justify-center space-x-1 bg-gray-100 rounded-lg p-1 inline-flex">
          {['week', 'month', 'all'].map((period) => (
            <button
              key={period}
              onClick={() => setTimeframe(period as any)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 capitalize ${
                timeframe === period
                  ? 'bg-white text-purple-600 shadow-sm'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              {period === 'all' ? 'All Time' : `This ${period}`}
            </button>
          ))}
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="relative">
        <div className="flex items-end justify-center space-x-4">
          {/* 2nd Place */}
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-2xl mb-3 mx-auto shadow-lg">
              {topThree[1]?.avatar}
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 min-w-[160px]">
              <div className="flex items-center justify-center mb-2">
                <Medal className="w-5 h-5 text-gray-400 mr-1" />
                <span className="font-bold text-gray-600">2nd</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{topThree[1]?.name}</h3>
              <p className="text-sm text-gray-600 mb-2">Level {topThree[1]?.level}</p>
              <div className="flex items-center justify-center space-x-1">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="font-medium text-gray-900">{topThree[1]?.points}</span>
              </div>
            </div>
          </div>

          {/* 1st Place */}
          <div className="text-center relative -mt-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-3xl mb-3 mx-auto shadow-xl border-4 border-yellow-200">
              {topThree[0]?.avatar}
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-yellow-200 min-w-[180px]">
              <div className="flex items-center justify-center mb-2">
                <Crown className="w-6 h-6 text-yellow-500 mr-1" />
                <span className="font-bold text-yellow-600">Champion</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-1 text-lg">{topThree[0]?.name}</h3>
              <p className="text-sm text-gray-600 mb-2">Level {topThree[0]?.level}</p>
              <div className="flex items-center justify-center space-x-1">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="font-bold text-gray-900 text-lg">{topThree[0]?.points}</span>
              </div>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-2xl mb-3 mx-auto shadow-lg">
              {topThree[2]?.avatar}
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 min-w-[160px]">
              <div className="flex items-center justify-center mb-2">
                <Medal className="w-5 h-5 text-amber-600 mr-1" />
                <span className="font-bold text-amber-600">3rd</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{topThree[2]?.name}</h3>
              <p className="text-sm text-gray-600 mb-2">Level {topThree[2]?.level}</p>
              <div className="flex items-center justify-center space-x-1">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="font-medium text-gray-900">{topThree[2]?.points}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Leaderboard */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900">Rankings</h3>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-4 h-4" />
                <span>This Week</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>{leaderboardData.length} participants</span>
              </div>
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {leaderboardData.map((user, index) => (
            <div
              key={user.id}
              className={`p-4 flex items-center space-x-4 transition-all duration-200 ${
                user.isCurrentUser
                  ? 'bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-500'
                  : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-center w-8">
                {getRankIcon(index + 1)}
              </div>

              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-xl">
                {user.avatar}
              </div>

              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h4 className={`font-semibold ${
                    user.isCurrentUser ? 'text-purple-900' : 'text-gray-900'
                  }`}>
                    {user.name}
                  </h4>
                  {user.isCurrentUser && (
                    <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full font-medium">
                      You
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>Level {user.level}</span>
                  <span>•</span>
                  <span>{user.badge}</span>
                  <span>•</span>
                  <span>{user.completedModules} modules</span>
                </div>
              </div>

              <div className="text-right">
                <div className="flex items-center space-x-2 mb-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="font-bold text-gray-900">{user.points.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-green-600">
                  <TrendingUp className="w-3 h-3" />
                  <span>{user.trend}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievement Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
          <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
          <h3 className="font-semibold text-gray-900 mb-2">Your Rank</h3>
          <div className="text-3xl font-bold text-purple-600 mb-1">#4</div>
          <p className="text-sm text-gray-600">Out of {leaderboardData.length} participants</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
          <Star className="w-12 h-12 text-blue-500 mx-auto mb-3" />
          <h3 className="font-semibold text-gray-900 mb-2">Points This Week</h3>
          <div className="text-3xl font-bold text-blue-600 mb-1">+150</div>
          <p className="text-sm text-gray-600">Keep up the great work!</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
          <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-3" />
          <h3 className="font-semibold text-gray-900 mb-2">Points to Next</h3>
          <div className="text-3xl font-bold text-green-600 mb-1">450</div>
          <p className="text-sm text-gray-600">To reach 3rd place</p>
        </div>
      </div>
    </div>
  );
}