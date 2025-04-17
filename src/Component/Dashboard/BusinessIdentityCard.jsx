import React from 'react';
import BusinessHeading from './BusinessComponent/BusinessHeading';
import BusinessForm from './BusinessComponent/BusinessForm';
import Button from '../Common/Button';

const BusinessIdentityCard = () => {
  return (
    <div className="w-[700px] h-[913px]  rounded-[8px] bg-white p-[30px] absolute top-[25px] left-[401px]">
      <BusinessHeading/>
      <BusinessForm/>
     <span className='cursor-pointer  box-border flex flex-row justify-center items-center p-[10px_35px] gap-[10px] absolute w-[350px] h-[39px] left-[162px] top-[839px] bg-gradient-to-r from-[rgba(48,90,255,0.8)] to-[#B5D2FF] rounded-[8px] text-center'>
         Next
      </span>
    </div>
  );
};

export default BusinessIdentityCard; 