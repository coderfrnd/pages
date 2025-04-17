import React from 'react';
import BusinessTag from '../../Common/BusinessTag';
import BusinessInput from '../../Common/BusinessInput';
import BusinessSelect from '../../Common/BusinessSelect';
import ChooseImage from './ChooseImage';

const BusinessForm = () => {
  const industryOptions = [
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
    "Retail",
    "Manufacturing",
    "Real Estate",
    "Construction",
    "Hospitality",
    "Transportation",
    "Agriculture",
    "Entertainment",
    "Energy",
    "Other"
  ];

  return (
    <>
      <div className="w-[620px] h-[673px] absolute top-[136px] left-[27px] flex flex-col gap-[25px]">
        <ChooseImage />
        <div className='w-[620px] h-[107px] gap-[20px] flex flex-col relative'>
          <BusinessTag title={'Business Description'} />
          <textarea
            className="w-[620px] h-[80px] absolute top-[27px] left-0 border-[1px] border-[#E2E8F0] rounded-[7px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 pl-[15px]"
            placeholder="Enter business description..."
          />
        </div>
        <section className="flex w-[620px] h-[77px] gap-[20px]">
          <BusinessInput 
            label="Business Name"
            placeholder="Enter business name"
          />
          <BusinessInput 
            label="Business Email"
            placeholder="e.g., robert.fox@myemail.com"
            type="email"
          />
        </section>
        <section className="flex w-[620px] h-[77px] gap-[20px]">
          <BusinessInput 
            label="Business Phone No."
            placeholder="Enter phone no."
          />
          <BusinessSelect 
            label="Industry"
            options={industryOptions}
            placeholder="Select"
          />
        </section>
        <section className="flex w-[620px] h-[77px] gap-[20px]">
          <BusinessInput 
            label="Services"
            placeholder="Enter services.."
          />
          <BusinessInput 
            label="Products"
            placeholder="Enter products..."
            type="text"
          />
        </section>
        <section className="flex w-[620px] h-[77px] gap-[20px]">
          <BusinessSelect 
            label="Company Size"
            placeholder="Select"
          />
          <BusinessSelect 
            label="City"
            placeholder="Select"
          />
        </section>
        <section className="flex w-[620px] h-[77px] gap-[20px]">
          <BusinessSelect 
            label="State"
            placeholder="Select"
          />
          <BusinessInput 
            label="Zip Code"
            placeholder="Enter zip code"
            type="email"
          />
        </section>
        
      </div>
    </>
  );
};

export default BusinessForm;
