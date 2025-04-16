import React from 'react';

const Header = ({ title, userEmail }) => {
  return (
    <header className="bg-white border-b border-gray-200 flex justify-center items-center" style={{ height: '64px' }}>
      <div className='w-[1105px] h-[32px] flex justify-between'>
        <span>Platform Setup</span>
        <div className='w-[215px] h-[32px] gap-[30px] flex items-center'>
          <img 
            src="/src/Assets/notification.png" 
            alt="notification" 
            className="w-6 h-6" 
          />
          <div className='flex items-center gap-2'>
            <img 
              src="/src/Assets/avatar.png" 
              alt="Profile" 
              className='w-8 h-8 rounded-full'
            />
            <span className='text-sm text-[#667085]'>kadin.stanton@gmail.com</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 