'use client';

import { useState } from 'react';
import { useSmoothScroll } from '@/contexts/ScrollContext';

const StickyNavigation = () => {
  const [activeTab, setActiveTab] = useState('Iceberg Capabilities');
  const lenis = useSmoothScroll(); // Access smooth scroll instance

  const navigationTabs = [
    { name: 'Iceberg Capabilities', selector: '#capabilities' },
    { name: 'Platform Architecture', selector: '#architecture' }, 
    { name: 'Why IT Teams Love Iceberg?', selector: '#why-teams-love' },
    { name: 'Built-In Enterprise Reliability', selector: '#enterprise-reliability' }
  ];

  const handleTabClick = (tab: typeof navigationTabs[0]) => {
    setActiveTab(tab.name);
    
    // Use Lenis smooth scroll to navigate to section
    if (lenis) {
      const element = document.querySelector(tab.selector) as HTMLElement;
      if (element) {
        lenis.scrollTo(element, {
          offset: -100, // Offset for sticky header
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      }
    }
  };

  return (
    <div className="sticky top-16 z-40 bg-white pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-center">
          <div className="bg-white rounded-full p-2 inline-flex border-2 border-transparent" 
               style={{
                 background: 'linear-gradient(white, white) padding-box, linear-gradient(90deg, #a7f3d0, #6ee7b7, #34d399, #10b981, #059669, #047857) border-box'
               }}>
            {navigationTabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => handleTabClick(tab)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ease-in-out whitespace-nowrap relative ${
                  activeTab === tab.name
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                style={activeTab === tab.name ? {
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(90deg, #a7f3d0, #6ee7b7, #34d399, #10b981, #059669, #047857) border-box',
                  border: '2px solid transparent',
                  transition: 'all 0.3s ease-in-out'
                } : {
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyNavigation;