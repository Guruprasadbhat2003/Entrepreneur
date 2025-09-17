import React from 'react';
import { 
  User, 
  Award, 
  Star, 
  TrendingUp, 
  Calendar,
  Target,
  Brain,
  Users,
  Lightbulb
} from 'lucide-react';

interface ProfileProps {
  user: any;
}

export function Profile({ user }: ProfileProps) {
  const achievements = [
    { 
      name: "First Idea", 
      description: "Generated your first business idea", 
      date: "March 15, 2024",
      icon: Lightbulb,
      rarity: "common"
    },
    { 
      name: "Market Researcher", 
      description: "Completed comprehensive market analysis", 
      date: "March 10, 2024",
      icon: TrendingUp,
      rarity: "uncommon"
    },
    { 
      name: "Pitch Perfect", 
      description: "Delivered your first business pitch", 
      date: "March 5, 2024",
      icon: Users,
      rarity: "rare"
    },
    { 
      name: "Team Builder", 
      description: "Learned team building fundamentals", 
      date: "February 28, 2024",
      icon: Users,
      rarity: "uncommon"
    }
  ];

  const stats = [
    { label: "Total Points", value: user.points, icon: Star, color: "text-yellow-600" },
    { label: "Current Level", value: user.level, icon: Target, color: "text-purple-600" },
    { label: "Modules Completed", value: `${user.completedModules}/${user.totalModules}`, icon: Brain, color: "text-blue-600" },
    { label: "Current Streak", value: `${user.streak} days`, icon: Calendar, color: "text-green-600" }
  ];

  const levelProgress = ((user.points % 250) / 250) * 100;
  const pointsToNext = 250 - (user.points % 250);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'from-gray-400 to-gray-500';
      case 'uncommon': return 'from-green-400 to-green-500';
      case 'rare': return 'from-blue-400 to-blue-500';
      case 'epic': return 'from-purple-400 to-purple-500';
      case 'legendary': return 'from-yellow-400 to-yellow-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Profile Header */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center">
              <User className="w-12 h-12 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white mb-2">{user.name}</h1>
              <p className="text-purple-100 text-lg mb-4">Novice Entrepreneur • Level {user.level}</p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{user.points}</div>
                  <div className="text-purple-200 text-sm">Total Points</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{user.badges.length}</div>
                  <div className="text-purple-200 text-sm">Badges Earned</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{user.streak}</div>
                  <div className="text-purple-200 text-sm">Day Streak</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Level Progress */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-900">Level Progress</h3>
            <span className="text-sm text-gray-600">{pointsToNext} points to Level {user.level + 1}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${levelProgress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <div className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center bg-gray-100`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="flex items-center space-x-3 mb-6">
          <Award className="w-6 h-6 text-yellow-500" />
          <h2 className="text-2xl font-bold text-gray-900">Achievements</h2>
          <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full font-medium">
            {achievements.length} earned
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${getRarityColor(achievement.rarity)} flex items-center justify-center shadow-lg`}>
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">{achievement.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{achievement.description}</p>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-500">{achievement.date}</span>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium capitalize ${
                    achievement.rarity === 'common' ? 'bg-gray-100 text-gray-700' :
                    achievement.rarity === 'uncommon' ? 'bg-green-100 text-green-700' :
                    achievement.rarity === 'rare' ? 'bg-blue-100 text-blue-700' :
                    achievement.rarity === 'epic' ? 'bg-purple-100 text-purple-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {achievement.rarity}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Progress */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Progress</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Module Completion</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Introduction to Entrepreneurship</span>
                <span className="text-green-600 font-medium">100%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full w-full"></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Idea Generation & Validation</span>
                <span className="text-green-600 font-medium">100%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full w-full"></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Market Research & Analysis</span>
                <span className="text-blue-600 font-medium">65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full w-2/3"></div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Completed "Target Audience Analysis"</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Started "Competitive Analysis"</p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Earned "Market Researcher" badge</p>
                  <p className="text-xs text-gray-500">3 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}