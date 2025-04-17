import React, { useState } from "react";
import OnboardingStep from "../Common/OnboardingStep";

const SideDashboardCard = () => {
  const [steps, setSteps] = useState([
    { id: 1, title: "Set Up Business Profile", status: "Not Started" },
    { id: 2, title: "Sync Your Customer Data", status: "Not Started" },
    { id: 3, title: "Set Up AI Agent Rules", status: "Not Started" },
    { id: 4, title: "Set Up First Campaign", status: "Not Started" },
  ]);

  const handleStepClick = (stepId) => {
    setSteps(
      steps.map((step) => {
        if (step.id === stepId) {
          const newStatus =
            step.status === "Not Started"
              ? "In Progress"
              : step.status === "In Progress"
              ? "Completed"
              : "Not Started";
          return { ...step, status: newStatus };
        }
        return step;
      })
    );
  };

  return (
    <div className="w-[346px] h-[913px] rounded-[8px] bg-[#F7F9FF] relative p-[30px] top-[25px] left-[25px]">
      {/* Header */}
      <div className="w-[286px] border-b-[1px] border-[#CCCCCC]  pb-[30px] flex flex-col gap-3">
        <h2 className="font-poppins font-medium text-[18px] leading-[100%] tracking-[0px] text-[#305AFF]">
          Get Started with ReferralHub
        </h2>
        <p
          className="w-[286px] h-[51px] font-inter font-medium text-[14px] leading-[17px] text-[#666666] self-stretch"
          style={{ fontFeatureSettings: "'ss01' on, 'cv01' on, 'cv11' on" }}
        >
          To get started with better referrals & rewards, complete your account
          setup in a few easy steps.
        </p>
      </div>
      {/* Steps */}
      <div className="w-[253px] h-[327px] absolute top-[204px] left-[30px] flex flex-col gap-[45px]">
        {steps.map((step) => (
          <OnboardingStep
            key={step.id}
            title={step.title}
            status={step.status}
            onClick={() => handleStepClick(step.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default SideDashboardCard;
