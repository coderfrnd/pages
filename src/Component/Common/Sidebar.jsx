import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ text, path, icon: Icon }) => (
  <li>
    <Link to={path} className="flex items-center px-4 py-3 text-gray-700 hover:bg-[#F7F7FD] hover:text-[#4A3AFF] transition-colors">
      {Icon && <Icon className="w-5 h-5 mr-3" />}
      <span>{text}</span>
    </Link>
  </li>
);

const Sidebar = () => {
  const menuItems = [
    { text: 'Platform Setup', path: '/platform-setup' },
    { text: 'AI Agent', path: '/ai-agent' },
    { text: 'Dashboard', path: '/dashboard' },
    { text: 'Campaign', path: '/campaign' },
    { text: 'Promoters', path: '/promoters' },
    { text: 'Leads', path: '/leads' },
    { text: 'Payouts', path: '/payouts' },
  ];

  return (
    <div className="w-[240px] bg-white h-full border-r border-gray-200">
      <div className="relative" style={{ height: '96px' }}>
        <img 
          src="/src/Assets/logo.png" 
          alt="Logo" 
          className="absolute"
          style={{
            width: '64.75px',
            height: '32px',
            top: '39px',
            left: '25.13px'
          }}
        />
      </div>
      <nav className="mt-2">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </ul>
      </nav>
      <div className="absolute bottom-0 w-[240px] border-t border-gray-200">
        <ul className="p-4 space-y-1">
          <MenuItem text="Settings" path="/settings" />
          <MenuItem text="Help" path="/help" />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar; 