import React from 'react';
import BusinessTag from './BusinessTag';
import dropdownIcon from '/Assets/dropdown.png';

const BusinessSelect = ({ label, options = [], placeholder = "Select" }) => {
  return (
    <div className="w-[300px] h-[77px] relative rounded-[7px] flex flex-col gap-2">
      <BusinessTag title={label} />
      <select
        className="w-[300px] h-[50px] absolute top-[27px] pl-[15px] rounded-[7px] border-[1px] border-[#CCCCCC] placeholder:font-normal placeholder:text-[14px] placeholder:leading-[100%] placeholder:tracking-[0%] placeholder:align-middle appearance-none bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#305AFF] focus:border-[#305AFF]"
        style={{
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <option value="" disabled selected hidden>{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </select>
      <div className="absolute right-3 top-[42px] pointer-events-none">
        <img src={dropdownIcon} alt="dropdown" className="w-3 h-3" />
      </div>
    </div>
  );
};

export default BusinessSelect; 