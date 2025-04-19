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
          {status === 'Completed' && (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="absolute left-[25%] right-[25%] top-[25%] bottom-[25%]" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="white" 
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>
      <div className="w-[178px] h-[42px] flex flex-col gap-[6px] mt-1">
        <span className="w-[178px] h-[19px] font-inter font-[500] text-[15px] leading-[100%] tracking-[0%] space-y-3 text-nowrap text-start text-[#000000]">
          {title}
        </span>
        <span className={`w-[178px] h-[17px] text-[14px] leading-[100%] space-y-3 text-start font-[inter] font-[400] ${status === 'Completed' ? 'text-green-500' : 'text-[#888888]'}`}>
          {status}
        </span>
      </div>
    </button>
  );
};

export default OnboardingStep; 