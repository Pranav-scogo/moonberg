import { Star, Award, Trophy, CheckCircle } from 'lucide-react';

const SocialProofSection = () => {
  const awards = [
    {
      icon: Trophy,
      title: 'Gartner® Magic Quadrant',
      subtitle: 'Leader in AI-driven ITSM',
      color: 'bg-blue-600'
    },
    {
      icon: Star,
      title: 'G2 Leader',
      subtitle: 'Best ITSM Software',
      color: 'bg-orange-600'
    },
    {
      icon: Award,
      title: 'Forrester TEI',
      subtitle: '356% ROI in 6 months',
      color: 'bg-green-600'
    },
    {
      icon: CheckCircle,
      title: 'TrustRadius',
      subtitle: 'Top Rated ITSM',
      color: 'bg-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-[#FF6900] uppercase tracking-wide mb-4">
            TOP-RATED
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by IT teams worldwide. Recognized for usability, reliability, and customer satisfaction.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {awards.map((award, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 ${award.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <award.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {award.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {award.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Resource Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Guide */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              Guide
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              AI + ITSM: Making IT work smarter, not harder
            </h3>
            <p className="text-gray-600 mb-6">
              Discover how AI is helping IT teams do more than just &apos;keep the lights on&apos;&mdash;it&apos;s powering experiences that help drive strategic value.
            </p>
            <button className="text-blue-600 hover:text-blue-800 font-medium">
              Your comprehensive guide to making IT work smarter, not harder
            </button>
          </div>

          {/* Report */}
          <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="text-sm font-semibold text-orange-600 uppercase tracking-wide mb-2">
              Report
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Iceberg ITSM Benchmark Report
            </h3>
            <p className="text-gray-600 mb-6">
              Compare KPIs with global IT teams, uncover trends, and get practical tips to improve performance.
            </p>
            <button className="text-orange-600 hover:text-orange-800 font-medium">
              Iceberg resource benchmark your success
            </button>
          </div>

          {/* Gartner Report */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-2">
              Report
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Gartner® Insights on Modern ITSM
            </h3>
            <p className="text-gray-600 mb-6">
              See why Gartner® recognizes Iceberg as a leader in AI-driven ITSM solutions.
            </p>
            <button className="text-purple-600 hover:text-purple-800 font-medium">
              Gartner® Magic Quadrant for AI in ITSM
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection; 