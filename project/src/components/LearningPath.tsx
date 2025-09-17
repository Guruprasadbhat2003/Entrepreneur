import React, { useState } from 'react';
import { 
  CheckCircle, 
  Circle, 
  Lock, 
  Play, 
  Clock,
  Award,
  ArrowRight,
  BookOpen,
  Video,
  FileText,
  Users
} from 'lucide-react';

interface LearningPathProps {
  user: any;
}

export function LearningPath({ user }: LearningPathProps) {
  const [selectedModule, setSelectedModule] = useState(null);

  const learningPath = [
    {
      id: 1,
      title: "Introduction to Entrepreneurship",
      description: "Understanding the entrepreneurial mindset and key concepts",
      status: "completed",
      duration: "45 min",
      points: 100,
      lessons: [
        { title: "What is Entrepreneurship?", type: "video", duration: "10 min", completed: true },
        { title: "Entrepreneurial Mindset", type: "reading", duration: "15 min", completed: true },
        { title: "Types of Businesses", type: "interactive", duration: "20 min", completed: true }
      ]
    },
    {
      id: 2,
      title: "Idea Generation & Validation",
      description: "Learn to identify problems and validate business ideas",
      status: "completed",
      duration: "60 min",
      points: 250,
      lessons: [
        { title: "Problem Identification", type: "video", duration: "15 min", completed: true },
        { title: "Brainstorming Techniques", type: "interactive", duration: "25 min", completed: true },
        { title: "Idea Validation Methods", type: "reading", duration: "20 min", completed: true }
      ]
    },
    {
      id: 3,
      title: "Market Research & Analysis",
      description: "Understanding your target market and competition",
      status: "in-progress",
      duration: "75 min",
      points: 300,
      progress: 65,
      lessons: [
        { title: "Target Audience Analysis", type: "video", duration: "20 min", completed: true },
        { title: "Competitive Analysis", type: "interactive", duration: "30 min", completed: true },
        { title: "Market Size Estimation", type: "reading", duration: "25 min", completed: false }
      ]
    },
    {
      id: 4,
      title: "Business Model Design",
      description: "Create sustainable business models using proven frameworks",
      status: "available",
      duration: "90 min",
      points: 400,
      lessons: [
        { title: "Business Model Canvas", type: "interactive", duration: "45 min", completed: false },
        { title: "Revenue Streams", type: "video", duration: "25 min", completed: false },
        { title: "Cost Structure", type: "reading", duration: "20 min", completed: false }
      ]
    },
    {
      id: 5,
      title: "Financial Planning",
      description: "Understanding startup finances and funding options",
      status: "locked",
      duration: "85 min",
      points: 350,
      lessons: [
        { title: "Financial Projections", type: "interactive", duration: "40 min", completed: false },
        { title: "Funding Sources", type: "video", duration: "25 min", completed: false },
        { title: "Investment Basics", type: "reading", duration: "20 min", completed: false }
      ]
    },
    {
      id: 6,
      title: "Team Building & Leadership",
      description: "Building and managing effective startup teams",
      status: "locked",
      duration: "70 min",
      points: 280,
      lessons: [
        { title: "Co-founder Selection", type: "video", duration: "20 min", completed: false },
        { title: "Team Roles & Responsibilities", type: "interactive", duration: "30 min", completed: false },
        { title: "Leadership Skills", type: "reading", duration: "20 min", completed: false }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'in-progress':
        return <Play className="w-6 h-6 text-blue-500" />;
      case 'available':
        return <Circle className="w-6 h-6 text-gray-400" />;
      default:
        return <Lock className="w-6 h-6 text-gray-300" />;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="w-4 h-4" />;
      case 'reading':
        return <BookOpen className="w-4 h-4" />;
      case 'interactive':
        return <Users className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Learning Journey</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Master entrepreneurship through our structured learning path. Complete modules to unlock advanced concepts and earn rewards.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Learning Path */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {learningPath.map((module, index) => (
              <div
                key={module.id}
                className={`relative bg-white rounded-xl p-6 shadow-sm border transition-all duration-200 cursor-pointer ${
                  selectedModule === module.id
                    ? 'border-purple-200 shadow-md'
                    : 'border-gray-100 hover:shadow-md'
                }`}
                onClick={() => setSelectedModule(selectedModule === module.id ? null : module.id)}
              >
                {/* Connection Line */}
                {index < learningPath.length - 1 && (
                  <div className="absolute left-6 -bottom-6 w-0.5 h-6 bg-gradient-to-b from-purple-200 to-transparent"></div>
                )}

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {getStatusIcon(module.status)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {module.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{module.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Award className="w-4 h-4 text-yellow-500" />
                          <span>{module.points}pts</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{module.description}</p>

                    {module.status === 'in-progress' && module.progress && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                          <span>Progress</span>
                          <span>{module.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${module.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">
                          {module.lessons.length} lessons
                        </span>
                        {module.status === 'completed' && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                            Completed
                          </span>
                        )}
                        {module.status === 'in-progress' && (
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                            In Progress
                          </span>
                        )}
                        {module.status === 'locked' && (
                          <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full font-medium">
                            Locked
                          </span>
                        )}
                      </div>
                      
                      <button
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          module.status === 'locked'
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : module.status === 'completed'
                            ? 'bg-green-100 text-green-700 hover:bg-green-200'
                            : 'bg-purple-600 text-white hover:bg-purple-700'
                        }`}
                        disabled={module.status === 'locked'}
                      >
                        {module.status === 'completed' ? (
                          <>Review <ArrowRight className="w-4 h-4" /></>
                        ) : module.status === 'in-progress' ? (
                          <>Continue <ArrowRight className="w-4 h-4" /></>
                        ) : module.status === 'available' ? (
                          <>Start <ArrowRight className="w-4 h-4" /></>
                        ) : (
                          <>Locked <Lock className="w-4 h-4" /></>
                        )}
                      </button>
                    </div>

                    {/* Expanded Lessons */}
                    {selectedModule === module.id && (
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <h4 className="font-medium text-gray-900 mb-4">Lessons</h4>
                        <div className="space-y-3">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <div
                              key={lessonIndex}
                              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                            >
                              <div className="flex items-center space-x-3">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                  lesson.completed ? 'bg-green-100' : 'bg-gray-200'
                                }`}>
                                  {lesson.completed ? (
                                    <CheckCircle className="w-4 h-4 text-green-600" />
                                  ) : (
                                    getTypeIcon(lesson.type)
                                  )}
                                </div>
                                <div>
                                  <p className="font-medium text-gray-900">{lesson.title}</p>
                                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                                    <span className="capitalize">{lesson.type}</span>
                                    <span>•</span>
                                    <span>{lesson.duration}</span>
                                  </div>
                                </div>
                              </div>
                              {lesson.completed && (
                                <span className="text-green-600 text-sm font-medium">✓ Complete</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Progress Summary */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Your Progress</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Overall Progress</span>
                  <span className="text-sm font-medium text-gray-900">
                    {Math.round((user.completedModules / user.totalModules) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full"
                    style={{ width: `${(user.completedModules / user.totalModules) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{user.completedModules}</div>
                  <div className="text-sm text-gray-600">Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{user.totalModules - user.completedModules}</div>
                  <div className="text-sm text-gray-600">Remaining</div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Achievement */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
            <div className="flex items-center space-x-2 mb-3">
              <Award className="w-5 h-5 text-yellow-600" />
              <h3 className="font-semibold text-gray-900">Next Achievement</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-medium text-gray-900 mb-1">Business Model Master</h4>
              <p className="text-sm text-gray-600 mb-3">Complete the Business Model Design module</p>
              <div className="w-full bg-yellow-200 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full w-0"></div>
              </div>
              <p className="text-xs text-yellow-700 mt-1">0/1 modules completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}