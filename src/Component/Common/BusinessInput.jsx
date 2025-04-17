import React from 'react';
import BusinessTag from './BusinessTag';

const BusinessInput = ({ label, placeholder, type = 'text' }) => {
  return (
    <div className="w-[300px] h-[77px] relative rounded-[7px] flex flex-col gap-2">
      <BusinessTag title={label} />
      <input
        type={type}
        className="w-[300px] h-[50px] absolute top-[27px] pl-[15px] rounded-[7px] border-[1px] border-[#CCCCCC] placeholder:font-normal placeholder:text-[14px] placeholder:leading-[100%] placeholder:tracking-[0%] placeholder:align-middle focus:outline-none focus:ring-2 focus:ring-[#305AFF] focus:border-[#305AFF]"
        placeholder={placeholder}
        style={{
          // Only placeholder will inherit these through Tailwind
          fontFamily: 'Inter, sans-serif',  // apply on input but only placeholder will care
        }}
      />
    </div>
  );
};

export default BusinessInput;
