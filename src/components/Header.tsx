'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    {
      name: 'Platform',
      hasDropdown: true,
      items: [
        'Iceberg Overview',
        'IT Service Management',
        'IT Asset Management', 
        'IT Operations Management',
        'Enterprise Service Management',
        'Iceberg AI',
        'Omnichannel Support'
      ]
    },
    {
      name: 'Solutions',
      hasDropdown: true,
      items: [
        'By Industry',
        'By Department',
        'By Use Case',
        'Small Business',
        'Enterprise',
        'MSP Solutions'
      ]
    },
    {
      name: 'Pricing',
      hasDropdown: false
    },
    {
      name: 'Resources',
      hasDropdown: true,
      items: [
        'Blog',
        'Whitepapers',
        'Webinars',
        'Case Studies',
        'Documentation',
        'Help Center',
        'Community',
        'Training & Certification'
      ]
    },
    {
      name: 'About Us',
      hasDropdown: true,
      items: [
        'Company',
        'Leadership',
        'Careers',
        'News & Events',
        'Partners',
        'Contact Us'
      ]
    }
  ];

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50 border-b border-gray-200">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/iceberg-logo.svg"
              alt="Iceberg"
              width={140}
              height={32}
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </button>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {item.items?.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200 hover:bg-gray-50">
              Demo
            </button>
            <button className="btn-primary text-sm">
              Try it free
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 flex items-center justify-between"
                    onClick={() => {
                      if (item.hasDropdown) {
                        setActiveDropdown(activeDropdown === item.name ? null : item.name);
                      }
                    }}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </button>
                  
                  {/* Mobile Dropdown */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="pl-6 space-y-1">
                      {item.items?.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Auth Buttons */}
              <div className="pt-4 space-y-2 border-t border-gray-200 mt-4">
                <button className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200 hover:bg-gray-50">
                  Demo
                </button>
                <button className="w-full btn-primary text-sm">
                  Try it free
                </button>
                <button className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 