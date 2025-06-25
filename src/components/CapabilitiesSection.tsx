import { Bot, ArrowRight, ExternalLink, Settings, Globe, FileText, HandHeart, Shield } from 'lucide-react';

const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: Bot,
      title: 'Automates IT Support',
      description: 'Resolves everyday tech issues autonomously (password resets, software errors, slow systems).',
      color: 'bg-purple-500'
    },
    {
      icon: Settings,
      title: 'Seamless Integration',
      description: 'Works with ServiceNow, Jira, Freshdesk, and more.',
      color: 'bg-blue-500'
    },
    {
      icon: Globe,
      title: 'Multilingual, Multi-team, Multi-Channel Support',
      description: 'Employees get help in their preferred language, any time, via chat, voice, email, or WhatsApp.',
      color: 'bg-green-500'
    },
    {
      icon: FileText,
      title: 'Trained on Your SOPs',
      description: 'AI is customized to your company\'s processes and policies.',
      color: 'bg-red-500'
    },
    {
      icon: HandHeart,
      title: 'Contextual Handover',
      description: 'If AI can\'t resolve an issue, it passes the conversation to a human with full context.',
      color: 'bg-indigo-500'
    },
    {
      icon: Shield,
      title: 'Proactive Monitoring & 24/7 Support',
      description: 'Built-in remote monitoring and remediation enables IT teams to prevent issues before users are affected, with always-on, multilingual AI support.',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section className=" bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Iceberg capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Simplify the complex — powerful IT capabilities with intuitive design and built-in intelligence to help teams move faster and smarter.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-secondary flex items-center justify-center">
              View datasheet
              <ExternalLink className="ml-2 h-4 w-4" />
            </button>
            <button className="btn-primary flex items-center justify-center">
              See all features
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Capabilities Grid with Enhanced Hover Effects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group relative h-64 cursor-pointer"
            >
              {/* Card Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105">
                
                {/* Front Side - Default State */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 p-8 transition-all duration-500 group-hover:opacity-0 group-hover:scale-110">
                  <div className="flex flex-col items-center text-center h-full justify-center relative">
                    {/* Subtle background pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="w-full h-full bg-gradient-to-br from-transparent via-gray-200 to-transparent"></div>
                    </div>
                    
                    {/* Icon with glow effect */}
                    <div className={`relative w-20 h-20 ${capability.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <div className={`absolute inset-0 ${capability.color} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                      <capability.icon className="relative h-10 w-10 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 leading-tight max-w-xs">
                      {capability.title}
                    </h3>
                    
                    {/* Hover indicator */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Hover for details
                    </div>
                  </div>
                </div>

                {/* Back Side - Hover State */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 delay-75">
                  <div className="flex flex-col h-full justify-center text-center relative">
                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className={`absolute top-0 right-0 w-32 h-32 ${capability.color} rounded-full opacity-10 blur-2xl transform translate-x-16 -translate-y-16`}></div>
                      <div className={`absolute bottom-0 left-0 w-24 h-24 ${capability.color.replace('bg-', 'bg-opacity-20 bg-')} rounded-full opacity-20 blur-xl transform -translate-x-12 translate-y-12`}></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className={`w-16 h-16 ${capability.color} rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                        <capability.icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                        {capability.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto">
                        {capability.description}
                      </p>
                      
                      {/* Decorative line */}
                      <div className={`w-12 h-0.5 ${capability.color} mx-auto mt-4 rounded-full`}></div>
                    </div>
                  </div>
                </div>

                {/* Border glow effect */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${capability.color.replace('bg-', 'from-')} to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Section - Device42 Integration */}
        {/* <div className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-12">
              <div className="text-sm font-semibold text-orange-400 uppercase tracking-wide mb-4">
                ENTERPRISE-GRADE ITAM
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Iceberg + Device42: Smarter IT Operations
              </h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Gain complete visibility, reduce downtime, and mitigate risks while automating service operations for seamless IT management
              </p>
              <button className="btn-primary">
                Explore CMDB
              </button>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 lg:p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Package className="h-12 w-12 text-blue-600" />
                </div>
                <div className="text-white font-semibold text-lg">
                  Device42 Integration
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CapabilitiesSection; 