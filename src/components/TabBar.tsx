import React, { useState } from 'react';

const tabs = ['All Orders', 'Pending', 'Reviewed', 'Arrived', '+'];

const TabBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All Orders');

  return (
    <div className="flex gap-4 border-t px-4 py-2 bg-white">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => {
            setActiveTab(tab);
            console.log(`Tab: ${tab} clicked`);
          }}
          className={`px-3 py-1 rounded flex items-center gap-1 ${
            activeTab === tab ? 'bg-purple-100 font-semibold' : 'hover:bg-gray-100'
          }`}
        >
          {tab === '+' ? <i className="fas fa-plus text-gray-600"></i> : tab}
        </button>
      ))}
    </div>
  );
};

export default TabBar;
