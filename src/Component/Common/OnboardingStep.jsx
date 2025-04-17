import React from 'react';

const OnboardingStep = ({ title, status = 'Not Started', onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="w-[234px] h-[48px] flex items-center"
    >
      <div className="w-[48px] h-[48px] relative">
        <div className={`w-[40px] h-[40px] absolute top-[4px] left-[4px] rounded-full border-[2px] 
          ${status === 'Completed' ? 'border-green-500 bg-green-500' : 
            status === 'In Progress' ? 'border-blue-500' : 
            'border-gray-300'}`}
        >
          {/* {status === 'Completed' && (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )} */}
        </div>
      </div>
      <div className="w-[178px] h-[42px] flex flex-col gap-[6px]  mt-1">
        <span className="w-[178px] h-[19px] font-inter font-[500] text-[15px] leading-[100%] tracking-[0%] space-y-3 text-nowrap text-start text-[#000000]">{title}</span>
        <span className="w-[178px] h-[17px] text-[14px] leading-[100%] space-y-3 text-start font-[inter] font-[400] text-[#888888]">{status}</span>
      </div>
    </button>
  );
};

export default OnboardingStep; 