import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Company',
      links: [
        'About',
        'Leadership',
        'Investors',
        'Careers',
        'Customers',
        'Partners',
        'Events',
        'Insights & Trends',
        'Newsroom',
        'Contact'
      ]
    },
    {
      title: 'Support & Success',
      links: [
        'Support',
        'Training & Certification',
        'Services',
        'Student Academy',
        'Community'
      ]
    },
    {
      title: 'Products',
      links: [
        "What's New",
        'Iceberg ITSM',
        'Iceberg AI',
        'IT Asset Management',
        'IT Operations Management',
        'Enterprise Service Management',
        'Omnichannel Support',
        'Integrations',
        'Analytics & Reporting'
      ]
    }
  ];

  const legalLinks = [
    'Legal',
    'Privacy Notice',
    'Site Terms',
    'Cookie Policy',
    'Do Not Share My Personal Information',
    'Security',
    'Accessibility',
    'Unsubscribe',
    'Sitemap'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="text-2xl font-bold text-[#FF6900] mb-6">
                Iceberg
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Iceberg makes it fast and easy for businesses to delight their customers and employees with AI-powered ITSM solutions.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF6900] transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2025 Iceberg Inc. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 