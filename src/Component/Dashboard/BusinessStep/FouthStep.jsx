import React from 'react';
import BusinessTag from '../../Common/BusinessTag';
import BusinessInput from '../../Common/BusinessInput';

const FouthStep = () => {
  return (
    <>
      <div className="w-[624px] h-[2995px] absolute top-[15px] left-[25px] flex flex-col gap-[28px]">
        <div className='w-[370px] h-[56px] flex flex-col gap-[10px]'>
          <span className='w-[370px] h-[27px] font-["Inter"] font-semibold text-[22px] leading-[100%] tracking-[0%]'>Create New Campaign</span>
          <span className='w-[370px] h-[17px] font-["Inter"] font-normal text-[14px] leading-[100%] tracking-[0%] text-[#888888]'>Create a new referral campaign in just few steps.</span>
        </div>
        <div className='w-[624px] border-b border-[#CCCCCC] opacity-60'></div>
        <div className='w-[624px] h-[2883px] gap-[50px] flex flex-col'>
          <div className='w-[624px] h-[161px] rounded-[15px] gap-[15px] pb-[20px] flex flex-col shadow-[0px_0px_4px_0px_#88888840]'>
            <div className='w-[624px] h-[64px] gap-[10px] p-[20px] flex flex-col bg-[#F9FBFC]'>
              <span className='w-[584px] h-[24px] font-["Inter"] font-medium text-[20px] leading-[100%] tracking-[0%]'>Campaign Name</span>
            </div>
            <div className='w-[584px] h-[62px] flex gap-[15px] ml-[20px] mr-[20px]'>
              <div className='w-[584px] h-[62px] rounded-[6px] border border-[#CCCCCC] gap-[10px] pt-[20px] pr-[25px] pb-[20px] pl-[25px]'>
                <textarea 
                  className='w-[250px] h-[22px] font-["Inter"] text-[#888888] font-normal text-[18px] leading-[100%] tracking-[0%] resize-none border-none outline-none bg-transparent'
                  placeholder="e.g, Summer Referral Special"
                />
              </div>
            </div>
          </div>
          <div className='w-[624px] h-[1227px] rounded-[15px] pb-[20px]'>
          <div className='w-[624px] h-[64px] gap-[10px] p-[20px] flex flex-col bg-[#F9FBFC]'>
              <span className='w-[584px] h-[24px] font-["Inter"] font-medium text-[20px] leading-[100%] tracking-[0%]'>Campaign Name</span>
            </div>
            <div className='w-[624px] h-[1143px] rounded-[5px] gap-[50px] pt-[15px] pr-[20px] pb-[15px] pl-[20px]'>
                <div className='w-[584px] h-[99px] gap-[50px] flex'>
                    <div className='w-[300px] flex flex-col h-[99px] gap-[15px]'>
                        <div className='w-[122px]  h-[22px] items-start'>
                        <span className='w-[122px] h-[22px] text-nowrap font-["Inter"] font-medium text-[18px] leading-[100%] tracking-[0%]'>Reward Type<span className='text-red-500'>*</span></span>
                          </div>
                          <div className='w-[300px] h-[62px] rounded-[6px] gap-[3px] pr-[50px]  pl-[50px] bg-[#305AFF1A] flex flex-col items-center'>
                            <span className='w-[55px] h-[22px] font-["Inter"] font-semibold text-[18px] leading-[100%] tracking-[0%] text-[#305AFF] mt-[11px]'>Points</span>
                            <span className='w-[166px] h-[15px] text-[#305AFF] font-["Inter"] font-normal text-[12px] leading-[100%] tracking-[0%] mb-[11px]'>
                             $1 is equivalent to 10 points</span>
                          </div>
                    </div>
                    <div className='w-[234px] h-[99px] gap-[15px]'>
                    
                    </div>
                </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FouthStep;