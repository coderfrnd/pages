import React from 'react'
import SideDashboardCard from './SideDashboardCard'
import BusinessIdentityCard from './BusinessIdentityCard'

const DashboardCard = ({ steps, setSteps }) => {
  const handleStepComplete = (currentStepId) => {
    setSteps(steps.map(step => {
      if (step.id === currentStepId) {
        return { ...step, status: "Completed" };
      } else if (step.id === currentStepId + 1) {
        return { ...step, status: "In Progress" };
      }
      return step;
    }));
  };

  const isStep4 = steps.some(step => step.id === 4 && step.status === "In Progress");

  return (
    <div className={`w-[1105px] ${isStep4 ? 'h-[3086px]' : 'h-[963px]'} top-[125px] left-[290px] rounded-[15px] bg-[#ffffff] absolute`}>
      <div className="relative flex">
        <SideDashboardCard steps={steps} />
        <BusinessIdentityCard onStepComplete={handleStepComplete} currentStep={1} />
      </div>
    </div>
  )
}

export default DashboardCard