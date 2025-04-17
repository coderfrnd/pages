import React from 'react';

const Header = ({ title, userEmail }) => {
  return (
    <header className="flex items-center fixed top-[35px] left-[296px]">
      <div className='w-[1105px] mx-auto flex justify-between items-center relative'>
        <span className="text-[16px] font-medium text-[#101828]">
          Platform Setup
        </span>
        <div className='flex items-center gap-4'>
          <img 
            src="/Assets/notification.png" 
            alt="notification" 
            className="w-6 h-6" 
          />
          <div className='flex items-center gap-2'>
            <img 
              src="/Assets/avatar.png" 
              alt="Profile" 
              className='w-8 h-8 rounded-full'
            />
            <span className='text-sm text-[#667085]'>kadinstanton@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="w-[350px] h-[39px] absolute top-[839px] left-[162px] rounded-[8px] p-[10px_35px_10px_35px] gap-[10px]">
      </div>
    </header>
  );
};

export default Header; 