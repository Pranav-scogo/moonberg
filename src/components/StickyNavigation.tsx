'use client';

import { useState } from 'react';

const StickyNavigation = () => {
  const [activeTab, setActiveTab] = useState('Iceberg Capabilities');

  const navigationTabs = [
    'Iceberg Capabilities',
    'Platform Architecture',
    'Why IT Teams Love Iceberg?',
    'Built-In Enterprise Reliability'
  ];

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
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ease-in-out whitespace-nowrap relative ${
                  activeTab === tab
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                style={activeTab === tab ? {
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(90deg, #a7f3d0, #6ee7b7, #34d399, #10b981, #059669, #047857) border-box',
                  border: '2px solid transparent',
                  transition: 'all 0.3s ease-in-out'
                } : {
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyNavigation;