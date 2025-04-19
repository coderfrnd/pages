import React, { useState } from 'react';
import ToggleButton from './ToggleButton';

const SelectInput = ({ label, options }) => {
  return (
    <div className="w-[500px] h-[77px] relative">
      <label className="w-[220px] h-[22px] font-inter font-medium text-[18px] leading-[100%] tracking-[0%] text-[#333333]">
        {label}
      </label>
      <select className="w-[500px] h-[50px] rounded-[7px] border border-[#CCCCCC] absolute top-[27px] left-0 pl-[15px] text-[14px] text-[#B3B3B3] font-inter font-[400] ">
        <option
          value=""
          disabled
          selected
          hidden
          style={{
            position:"relative",
            width: "42px",
            height: "17px",
             top : "44px",
            left: "15px",
          }}
        >
          Select 
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};


const ThirdStep = () => {
  const [autoOffer, setAutoOffer] = useState(false);
  const [userInitiated, setUserInitiated] = useState(false);

  const toneOptions = [
    { value: "", label: "Select" },
    { value: "formal", label: "Formal" },
    { value: "casual", label: "Casual" },
    { value: "friendly", label: "Friendly" },
    { value: "professional", label: "Professional" }
  ];

  const responseOptions = [
    { value: "", label: "Select" },
    { value: "concise", label: "Concise" },
    { value: "detailed", label: "Detailed" },
    { value: "technical", label: "Technical" },
    { value: "simplified", label: "Simplified" }
  ];

  return (
    <>
      <span className="text-nowrap font-medium text-[20px] leading-[100%] tracking-[0%] text-center font-inter w-[174px] h-[24px] absolute top-[93px] left-[250px] text-gray-800">Set Up AI Settings</span>
      <div className="w-[500px] h-[347px] flex flex-col absolute top-[202px] left-[87px] gap-[35px]">
        <SelectInput label="Tone of Communication" options={toneOptions} />
        <SelectInput label="Response Style" options={responseOptions} />
        <div className="w-[500px] h-[44px] flex flex-row justify-between items-center ">
          <div className="w-[432px] h-[44px] gap-[5px] flex flex-col">
            <h3 className="w-[432px] h-[22px] font-inter font-[400] text-[18px] leading-[100%] tracking-[0%] align-middle text-[#333333]">Auto-offer help</h3>
            <p className="w-[432px] h-[17px] font-inter font-[400] text-nowrap text-[14px] leading-[100%] tracking-[0%] align-middle text-gray-500">AI pops up suggestions automatically when user lands on a page.</p>
          </div>
          <ToggleButton />
        </div>
        <div className="w-[500px] h-[44px] flex flex-row justify-between items-center ">
          <div className="w-[432px] h-[44px] gap-[5px] flex flex-col">
            <h3 className="w-[432px] h-[22px] font-inter font-[400] text-[18px] leading-[100%] tracking-[0%] align-middle text-[#333333]">User-initiated only</h3>
            <p className="w-[432px] h-[17px] font-inter font-[400] text-nowrap text-[14px] leading-[100%] tracking-[0%] align-middle text-gray-500">AI only responds when clicked or messaged.</p>
          </div>
          <ToggleButton />
        </div>
      </div>
    </>
  );
};

export default ThirdStep;