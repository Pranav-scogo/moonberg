import { ArrowRight, ExternalLink } from 'lucide-react';

const IntegrationsSection = () => {
  const integrations = [
    {
      name: 'Microsoft Teams',
      description: 'Seamless IT support directly in Teams',
      features: ['Instant notifications', 'Bot integration', 'Ticket creation'],
      color: 'bg-blue-600',
      logo: '🔷'
    },
    {
      name: 'Slack',
      description: 'AI-powered support in your workspace',
      features: ['Real-time alerts', 'Interactive workflows', 'Status updates'],
      color: 'bg-purple-600',
      logo: '💬'
    },
    {
      name: 'Device42',
      description: 'Auto-discovery and CMDB sync',
      features: ['Asset tracking', 'Dependency mapping', 'Real-time sync'],
      color: 'bg-green-600',
      logo: '📊'
    },
    {
      name: 'Zoom',
      description: 'Video support and screen sharing',
      features: ['Remote assistance', 'Screen sharing', 'Meeting integration'],
      color: 'bg-blue-500',
      logo: '📹'
    },
    {
      name: 'AWS',
      description: 'Cloud infrastructure monitoring',
      features: ['Resource monitoring', 'Auto-scaling', 'Cost optimization'],
      color: 'bg-orange-500',
      logo: '☁️'
    },
    {
      name: 'Google Workspace',
      description: 'Unified productivity and IT support',
      features: ['SSO integration', 'Calendar sync', 'Drive integration'],
      color: 'bg-red-500',
      logo: '🔴'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-[#FF6900] uppercase tracking-wide mb-4">
            EXTEND. AUTOMATE. SCALE.
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Iceberg integrations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Effortlessly integrate Iceberg with your existing apps. Drive automation, connect teams, and scale IT operations with ease.
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-12 h-12 ${integration.color} rounded-lg flex items-center justify-center text-white text-xl`}>
                  {integration.logo}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#FF6900] transition-colors duration-200">
                    {integration.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {integration.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-4">
                {integration.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-[#FF6900] rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button className="text-[#FF6900] hover:text-[#E55A00] text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform duration-200">
                Learn more
                <ArrowRight className="ml-1 h-3 w-3" />
              </button>
            </div>
          ))}
        </div>

        {/* Customer Story */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className="grid lg:grid-cols-3 gap-0">
            <div className="lg:col-span-2 p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Join 73,000+ companies uncomplicating their IT service & support
              </h3>
              <blockquote className="text-xl text-gray-600 italic mb-6">
                "Iceberg has helped us cut IT costs by 60% annually while improving service quality and speed."
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 font-medium text-sm">AG</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Arul Arogyanathan</div>
                  <div className="text-gray-600 text-sm">CIO</div>
                </div>
              </div>
              <button className="mt-6 text-[#FF6900] hover:text-[#E55A00] font-medium flex items-center">
                Read more
                <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="bg-gradient-to-br from-[#FF6900] to-[#E55A00] p-8 lg:p-12 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-5xl font-bold mb-2">73K+</div>
                <div className="text-lg opacity-90">Companies Trust Us</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="btn-primary text-lg px-8 py-4 flex items-center justify-center mx-auto">
            Explore marketplace
            <ExternalLink className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection; 