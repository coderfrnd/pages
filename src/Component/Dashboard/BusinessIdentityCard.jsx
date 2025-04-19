import React, { useState } from 'react';
import BusinessHeading from './BusinessComponent/BusinessHeading';
import BusinessForm from './BusinessComponent/BusinessForm';
import SecondStep from './BusinessStep/SecondStep';
import ThirdStep from './BusinessStep/ThirdStep';
import NextButton from '../Common/NextButton';

const BusinessIdentityCard = ({ onStepComplete, currentStep }) => {
  const [step, setStep] = useState(currentStep);

  const handleNext = () => {
    onStepComplete(step);
    setStep(prev => prev + 1);
  };

  return (
    <div className="w-[674px] h-[788px] rounded-[8px] bg-white p-[30px] absolute top-[25px] left-[401px]">
      {step === 1 ? (
        <>
          <BusinessHeading/>
          <BusinessForm/>
          <NextButton onClick={handleNext} />
        </>
      ) : step === 2 ? (
        <>
          <SecondStep />
          <NextButton onClick={handleNext} text="Next" top={632} />
        </>
      ) : (
        <>
          <ThirdStep />
          <NextButton onClick={handleNext} text="Finish" top={632} />
        </>
      )}
    </div>
  );
};

export default BusinessIdentityCard; 