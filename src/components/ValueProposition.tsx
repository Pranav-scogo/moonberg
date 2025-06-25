import { Shield, Zap, TrendingUp, Users } from 'lucide-react';

const ValueProposition = () => {
  const features = [
    {
      icon: Shield,
      title: 'Enterprise capability, not complexity',
      description: 'Give your IT teams a platform they\'ll actually love—one that handles all their service desk, asset tracking, and infrastructure management needs with built-in AI. Easy to implement and manage, without the complexity of traditional enterprise tools.'
    },
    {
      icon: Zap,
      title: 'Less time waiting, faster time to value',
      description: 'Get up and running quickly with intuitive workflows that your team can master in minutes, not months. Our AI-powered automation handles routine tasks so your team can focus on strategic initiatives.'
    },
    {
      icon: TrendingUp,
      title: 'AI that supplements, not substitutes',
      description: 'Iceberg AI works alongside your team to enhance productivity, provide intelligent insights, and automate repetitive tasks while keeping humans in control of critical decisions.'
    },
    {
      icon: Users,
      title: 'Innovation, without hidden costs',
      description: 'Transparent pricing with no surprise fees. Scale your IT operations with confidence knowing exactly what you\'re paying for, with all the features you need included.'
    }
  ];

  return (
    <section id="value-proposition" className=" bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything IT needs. Nothing it doesn't.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From employee onboarding to outage resolution, Iceberg gives your teams the tools to move faster, work smarter, and delight employees — all in one AI-powered platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FF6900] rounded-lg flex items-center justify-center group-hover:bg-[#E55A00] transition-colors duration-200">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-[#FF6900] to-[#E55A00] rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              AI-powered IT that moves the needle
            </h3>
            <p className="text-xl text-orange-100">
              Enterprise-grade impact across cost, speed, and employee experience.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">356%</div>
              <div className="text-orange-100 text-sm">ROI in under 6 months by boosting productivity, cutting legacy tools, and improving IT efficiency.</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">97%</div>
              <div className="text-orange-100 text-sm">Average employee satisfaction score</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">53%</div>
              <div className="text-orange-100 text-sm">Ticket deflection with AI-powered self service</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">35%</div>
              <div className="text-orange-100 text-sm">Decrease in ART with AI assistance</div>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-orange-100 text-xs">
              * Based on findings from the Iceberg Benchmark Report and the Forrester Total Economic Impact™ (TEI) Study.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition; 