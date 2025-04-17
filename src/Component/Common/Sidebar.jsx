import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ text, path, icon }) => (
  <li>
    <NavLink 
      to={path} 
      className={`flex items-center w-[230px] h-[46px] rounded-tr-[10px] rounded-br-[10px] py-[11px] pl-[15px] gap-[8px] text-gray-700 hover:bg-[#F7F7FD] hover:text-[#4A3AFF] ${path === '/platform-setup' ? 'bg-[rgba(48,90,255,0.1)] text-[#4A3AFF]' : ''}`}
    >
      <span className='w-[24px] h-[24px] flex items-center justify-center'>
        <img 
          src={icon} 
          alt={text} 
          className="w-[20px] h-[20px] object-contain"
          onError={(e) => {
            console.error(`Failed to load icon for ${text}`);
            e.target.style.display = 'none';
          }}
        />
      </span>
      <span className='w-[100px] h-[17px] font-[inter] font-[500] text-[14px] text-[#305AFF]' >{text}</span>
    </NavLink>
  </li>
);

const Sidebar = () => {
  const menuItems = [
    { text: 'Platform Setup', path: '/platform-setup', icon: '/Assets/SidebarIcons/details.png' },
    { text: 'AI Agent', path: '/ai-agent', icon: '/Assets/SidebarIcons/aiAgent.png' },
    { text: 'Dashboard', path: '/dashboard', icon: '/Assets/SidebarIcons/dashboard.png' },
    { text: 'Campaign', path: '/campaign', icon: '/Assets/SidebarIcons/campaign.png' },
    { text: 'Promoters', path: '/promoters', icon: '/Assets/SidebarIcons/pramoters.png' },
    { text: 'Leads', path: '/leads', icon: '/Assets/SidebarIcons/leads.png' },
    { text: 'Payouts', path: '/payouts', icon: '/Assets/SidebarIcons/payout.png' },
  ];

  return (
    <div className="w-[245px] h-[1123px] bg-white   border-[#EFF0F6] rounded-[20px]">
      <div className="relative" style={{ height: '96px' }}>
        <img 
          src="/Assets/logo.png" 
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
      <div className='w-[246px] h-[367px] fixed top-[123px] gap-[15px]'>
        <nav className="w-[230px] h-[352px]">
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </ul>
        </nav>
      </div>
      <div className="absolute top-[976px] h-[102px] w-[230px] border-t border-gray-200">
        <ul className="p-4 space-y-1">
          <MenuItem text="Settings" path="/settings" icon="/Assets/SidebarIcons/setting.png" />
          <MenuItem text="Help" path="/help" icon="/Assets/SidebarIcons/help.png" />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar; 