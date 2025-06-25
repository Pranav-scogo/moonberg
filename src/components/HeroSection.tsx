import Image from 'next/image';
import { ArrowRight, Play, Clock, Users, TrendingUp, AlertTriangle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-blue-50 to-purple-50 py-12 lg:py-12 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:pl-4 lg:pr-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center min-h-[500px]">
          {/* Left Column - Text Content */}
          <div className="lg:pr-8 flex flex-col justify-center">
            {/* Brand Label */}
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200/50 shadow-sm">
                <span className="text-sm font-semibold text-freshworks-orange uppercase tracking-wide">
                  Iceberg
                </span>
              </div>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              The First <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Agentic AI</span> Platform Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Enterprise Services</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
              Transform IT/non-IT support, enhance digital employee experience, and provide instant issue resolution - anytime, anywhere, on any device.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-freshworks-orange text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Try it free
              </button>
              <button className="text-freshworks-orange hover:text-purple-700 font-semibold px-8 py-4 rounded-xl border-2 border-purple-200 hover:border-purple-300 transition-all duration-200 flex items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-white">
                Book a demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Enterprise Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Dashboard Interface */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main Dashboard Container */}
            <div className="relative w-full max-w-lg lg:max-w-xl">
              <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/20 relative overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-3xl"></div>
                
                {/* Video Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="relative z-10">
                  {/* Top Row - Metric Cards */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {/* Tickets due today */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-white/50 shadow-sm">
                      <div className="text-xs text-gray-500 mb-2 font-medium">Tickets due today</div>
                      <div className="text-3xl font-bold text-gray-900">14</div>
                    </div>
                    
                    {/* My open tickets */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-white/50 shadow-sm relative">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-xs text-gray-500 font-medium">My open tickets</div>
                        <AlertTriangle className="h-4 w-4 text-red-500" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900">45</div>
                    </div>
                    
                    {/* Tickets on hold */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-white/50 shadow-sm">
                      <div className="text-xs text-gray-500 mb-2 font-medium">Tickets on hold</div>
                      <div className="text-3xl font-bold text-gray-900">4</div>
                    </div>
                  </div>
                  
                  {/* Middle Row - Charts */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {/* Unresolved tickets by status - Donut Chart */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-white/50 shadow-sm">
                      <div className="text-sm text-gray-700 font-semibold mb-4">Unresolved tickets by status</div>
                      <div className="relative w-20 h-20 mx-auto mb-4">
                        <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 64 64">
                          <circle cx="32" cy="32" r="28" stroke="#F3F4F6" strokeWidth="8" fill="none" />
                          <circle cx="32" cy="32" r="28" stroke="#8B5CF6" strokeWidth="8" fill="none" 
                                  strokeDasharray="37 113" strokeLinecap="round" />
                          <circle cx="32" cy="32" r="28" stroke="#06B6D4" strokeWidth="8" fill="none" 
                                  strokeDasharray="28 113" strokeDashoffset="-37" strokeLinecap="round" />
                          <circle cx="32" cy="32" r="28" stroke="#F59E0B" strokeWidth="8" fill="none" 
                                  strokeDasharray="25 113" strokeDashoffset="-65" strokeLinecap="round" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-xl font-bold text-gray-900">19</div>
                            <div className="text-xs text-gray-500">Tickets</div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                            <span className="text-gray-600">Pending</span>
                          </div>
                          <span className="font-semibold text-gray-900">12</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                            <span className="text-gray-600">Closed</span>
                          </div>
                          <span className="font-semibold text-gray-900">3</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <span className="text-gray-600">Open</span>
                          </div>
                          <span className="font-semibold text-gray-900">4</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Tickets by category - Bar Chart */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-white/50 shadow-sm">
                      <div className="text-sm text-gray-700 font-semibold mb-4">Tickets by category</div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-600 w-16 text-right">Hardware</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-3">
                            <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full" style={{width: '70%'}}></div>
                          </div>
                          <span className="text-sm font-semibold text-gray-900 w-6">8</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-600 w-16 text-right">Software</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-3">
                            <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full" style={{width: '55%'}}></div>
                          </div>
                          <span className="text-sm font-semibold text-gray-900 w-6">6</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-600 w-16 text-right">Network</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-3">
                            <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 h-3 rounded-full" style={{width: '60%'}}></div>
                          </div>
                          <span className="text-sm font-semibold text-gray-900 w-6">7</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-600 w-16 text-right">Consumer</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-3">
                            <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full" style={{width: '35%'}}></div>
                          </div>
                          <span className="text-sm font-semibold text-gray-900 w-6">4</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Row */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Leaderboard */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-white/50 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="text-sm text-gray-700 font-semibold">Leaderboard</div>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                      <div className="text-xs text-gray-500 mb-3">This month</div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                          <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                            <span className="text-white text-sm font-bold">AR</span>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-gray-900 truncate">Angela Rivera</div>
                          <div className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full inline-block mt-1">
                            MVP
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Business hours */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-white/50 shadow-sm">
                      <div className="text-sm text-gray-700 font-semibold mb-3">Response Time</div>
                      <div className="text-2xl font-bold text-gray-900 mb-2">24m 5s</div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-green-600 font-semibold">43%</span>
                        <span className="text-xs text-gray-500">improvement</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Priority Panel */}
              <div className="absolute -right-4 top-8 w-36 z-20 hidden lg:block">
                <div className="bg-white/90 backdrop-blur-lg rounded-xl p-4 shadow-xl border border-white/50">
                  <div className="text-sm text-gray-700 font-semibold mb-3">Priority Tickets</div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs text-gray-600">Urgent</div>
                    <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                      <div className="text-lg font-bold text-white">3</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">High</span>
                      <span className="font-semibold text-gray-900">4</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">Medium</span>
                      <span className="font-semibold text-gray-900">12</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 