import React, { useState } from 'react';
import { Send, Bot, User, Lightbulb, TrendingUp, Target } from 'lucide-react';

interface AIChatProps {
  user: any;
}

export function AIChat({ user }: AIChatProps) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      content: `Hi ${user.name}! I'm your AI entrepreneurship mentor. I'm here to help you validate ideas, develop business strategies, and guide you through your startup journey. What would you like to work on today?`,
      timestamp: new Date(Date.now() - 300000)
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickPrompts = [
    { text: "Help me validate my business idea", icon: Lightbulb },
    { text: "How do I research my target market?", icon: TrendingUp },
    { text: "Create a business model canvas", icon: Target }
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user' as const,
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        sender: 'ai' as const,
        content: `That's a great question! Let me help you with that. Based on your current progress and learning path, I can provide personalized guidance. Here are some key points to consider...

🎯 **Actionable Steps:**
1. Start by clearly defining your problem statement
2. Research your target audience through surveys or interviews  
3. Analyze existing competitors and their solutions
4. Create a minimum viable product (MVP) to test your assumptions

Would you like me to dive deeper into any of these areas? I can also help you create specific templates or worksheets to guide your process.`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleQuickPrompt = (prompt: string) => {
    setInputValue(prompt);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Bot className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">AI Mentor</h2>
              <p className="text-purple-100">Your personal entrepreneurship guide</p>
            </div>
          </div>
        </div>

        {/* Quick Prompts */}
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Quick Start</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {quickPrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => handleQuickPrompt(prompt.text)}
                className="flex items-center space-x-2 p-3 bg-gray-50 hover:bg-purple-50 rounded-lg transition-all duration-200 text-left"
              >
                <prompt.icon className="w-5 h-5 text-purple-600" />
                <span className="text-sm text-gray-700">{prompt.text}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex space-x-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.sender === 'ai' && (
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              )}
              <div
                className={`max-w-lg p-4 rounded-2xl ${
                  message.sender === 'user'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <div className="whitespace-pre-wrap">{message.content}</div>
                <div
                  className={`text-xs mt-2 ${
                    message.sender === 'user' ? 'text-purple-200' : 'text-gray-500'
                  }`}
                >
                  {message.timestamp.toLocaleTimeString()}
                </div>
              </div>
              {message.sender === 'user' && (
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-gray-600" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-6 border-t border-gray-100">
          <div className="flex space-x-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me anything about entrepreneurship..."
              className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}