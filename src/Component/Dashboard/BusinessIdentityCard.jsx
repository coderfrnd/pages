import React from 'react';
import BusinessHeading from './BusinessComponent/BusinessHeading';
import BusinessForm from './BusinessComponent/BusinessForm';

const BusinessIdentityCard = () => {
  return (
    <div className="w-[700px] h-[913px]  rounded-[8px] bg-white p-[30px] absolute top-[25px] left-[401px]">
      <BusinessHeading/>
      <BusinessForm/>
    </div>
  );
};

export default BusinessIdentityCard; 