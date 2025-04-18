import React, { useState } from 'react';
import BusinessHeading from './BusinessComponent/BusinessHeading';
import BusinessForm from './BusinessComponent/BusinessForm';
import SecondStep from './BusinessStep/SecondStep';
import NextButton from '../Common/NextButton';

const BusinessIdentityCard = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
  };

  return (
    <div className="w-[700px] h-[913px]  rounded-[8px] bg-white p-[30px] absolute top-[25px] left-[401px]">
      {currentStep === 1 ? (
        <>
          <BusinessHeading/>
          <BusinessForm/>
          <NextButton onClick={handleNext} />
        
        </>
      ) : (
        <>
         <SecondStep />
         <NextButton onClick={handleNext} text="Next" top={632} />
         {/* <NextButton/> */}
        </>
      )}
    </div>
  );
};

export default BusinessIdentityCard; 