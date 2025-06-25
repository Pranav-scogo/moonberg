import { ArrowRight, Play, Phone } from 'lucide-react';

const GetStartedSection = () => {
  const options = [
    {
      icon: ArrowRight,
      type: 'Trial',
      title: 'Start free trial',
      description: 'Explore the platform hands-on for 14 days—no credit card required. No strings attached.',
      buttonText: 'Try it free',
      buttonStyle: 'btn-primary',
      featured: true
    },
    {
      icon: Phone,
      type: 'Contact Sales',
      title: 'Contact sales',
      description: 'Connect with our product experts to get a tailored demo, pricing insights, and answers to your IT challenges.',
      buttonText: 'Book a demo',
      buttonStyle: 'btn-secondary',
      featured: false
    },
    {
      icon: Play,
      type: 'Product Tour',
      title: 'Watch product tour',
      description: 'Watch a short 6 min tour of the product to understand how Iceberg streamlines IT operations with AI and automation.',
      buttonText: 'Take the tour',
      buttonStyle: 'btn-secondary',
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get started with Iceberg
          </h2>
        </div>

        {/* Options Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 text-center transition-all duration-300 hover:-translate-y-1 ${
                option.featured 
                  ? 'border-2 border-[#FF6900] shadow-lg' 
                  : 'border border-gray-200 hover:shadow-lg'
              }`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                option.featured 
                  ? 'bg-[#FF6900] text-white' 
                  : 'bg-gray-100 text-gray-600'
              }`}>
                <option.icon className="h-8 w-8" />
              </div>

              {/* Type Badge */}
              <div className={`text-sm font-semibold uppercase tracking-wide mb-2 ${
                option.featured 
                  ? 'text-[#FF6900]' 
                  : 'text-gray-500'
              }`}>
                {option.type}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {option.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-8 leading-relaxed">
                {option.description}
              </p>

              {/* CTA Button */}
              <button className={`${option.buttonStyle} w-full flex items-center justify-center`}>
                {option.buttonText}
                <option.icon className="ml-2 h-5 w-5" />
              </button>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-2">
            Contact Iceberg
          </p>
          <a 
            href="mailto:sales@iceberg.com" 
            className="text-[#FF6900] hover:text-[#E55A00] font-medium"
          >
            Contact Us or sales@iceberg.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection; 