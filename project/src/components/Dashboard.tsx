import React from 'react';
import { TrendingUp, Target, Brain, Users, Lightbulb, Award, Clock, Siren as Fire } from 'lucide-react';

interface DashboardProps {
  user: any;
}

export function Dashboard({ user }: DashboardProps) {
  const modules = [
    {
      id: 1,
      title: "Idea Generation",
      description: "Learn to identify problems and generate innovative solutions",
      progress: 100,
      points: 250,
      icon: Lightbulb,
      status: 'completed'
    },
    {
      id: 2,
      title: "Market Research",
      description: "Understand your target audience and validate your ideas",
      progress: 75,
      points: 200,
      icon: TrendingUp,
      status: 'in-progress'
    },
    {
      id: 3,
      title: "Business Model Canvas",
      description: "Create a comprehensive business model for your startup",
      progress: 30,
      points: 300,
      icon: Target,
      status: 'in-progress'
    },
    {
      id: 4,
      title: "Team Building",
      description: "Learn how to build and manage effective startup teams",
      progress: 0,
      points: 180,
      icon: Users,
      status: 'locked'
    }
  ];

  const recentAchievements = [
    { name: "First Idea", description: "Generated your first business idea", date: "2 days ago" },
    { name: "Market Researcher", description: "Completed market analysis", date: "1 week ago" },
    { name: "Pitch Perfect", description: "Delivered your first pitch", date: "2 weeks ago" }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Welcome back, {user.name}! 🚀</h2>
            <p className="text-purple-100 text-lg">Ready to continue your entrepreneurial journey?</p>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2 mb-2">
              <Fire className="w-6 h-6 text-orange-300" />
              <span className="text-2xl font-bold">{user.streak}</span>
              <span className="text-purple-200">day streak</span>
            </div>
            <div className="text-purple-200">Keep it up!</div>
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-2xl font-bold text-gray-900">{user.level}</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Current Level</h3>
          <p className="text-gray-600 text-sm">Novice Entrepreneur</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-2xl font-bold text-gray-900">{user.completedModules}/{user.totalModules}</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Modules Completed</h3>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${(user.completedModules / user.totalModules) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-2xl font-bold text-gray-900">{user.badges.length}</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Badges Earned</h3>
          <p className="text-gray-600 text-sm">Keep learning to earn more!</p>
        </div>
      </div>

      {/* Learning Modules */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Continue Learning</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module) => (
            <div key={module.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  module.status === 'completed' ? 'bg-green-100' :
                  module.status === 'in-progress' ? 'bg-blue-100' : 'bg-gray-100'
                }`}>
                  <module.icon className={`w-6 h-6 ${
                    module.status === 'completed' ? 'text-green-600' :
                    module.status === 'in-progress' ? 'text-blue-600' : 'text-gray-400'
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{module.title}</h4>
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-medium text-gray-700">{module.points}pts</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{module.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex-1 mr-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${
                            module.status === 'completed' ? 'bg-green-500' :
                            module.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-300'
                          }`}
                          style={{ width: `${module.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500 mt-1">{module.progress}% complete</span>
                    </div>
                    <button 
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        module.status === 'completed' ? 'bg-green-100 text-green-700' :
                        module.status === 'in-progress' ? 'bg-blue-600 text-white hover:bg-blue-700' :
                        'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                      disabled={module.status === 'locked'}
                    >
                      {module.status === 'completed' ? 'Review' :
                       module.status === 'in-progress' ? 'Continue' : 'Locked'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Achievements */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Achievements</h3>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="space-y-4">
            {recentAchievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{achievement.name}</h4>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </div>
                <div className="flex items-center space-x-1 text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{achievement.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}