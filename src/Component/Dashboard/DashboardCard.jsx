import React, { useState } from 'react'
import SideDashboardCard from './SideDashboardCard'
import BusinessIdentityCard from './BusinessIdentityCard'

const DashboardCard = () => {
  const [steps, setSteps] = useState([
    { id: 1, title: "Set Up Business Profile", status: "In Progress" },
    { id: 2, title: "Sync Your Customer Data", status: "Not Started" },
    { id: 3, title: "Set Up AI Agent Rules", status: "Not Started" },
    { id: 4, title: "Set Up First Campaign", status: "Not Started" },
  ]);

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

  return (
    <div className='w-[1105px] h-[963px] top-[125px] left-[290px] rounded-[15px] bg-[#ffffff] absolute'>
      <div className="relative flex">
        <SideDashboardCard steps={steps} />
        <BusinessIdentityCard onStepComplete={handleStepComplete} currentStep={1} />
      </div>
    </div>
  )
}

export default DashboardCard