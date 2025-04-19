import React, { useState } from 'react';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import DashboardCard from './DashboardCard';

const Dashboard = () => {
  const [steps, setSteps] = useState([
    { id: 1, title: "Set Up Business Profile", status: "In Progress" },
    { id: 2, title: "Sync Your Customer Data", status: "Not Started" },
    { id: 3, title: "Set Up AI Agent Rules", status: "Not Started" },
    { id: 4, title: "Set Up First Campaign", status: "Not Started" },
  ]);

  const isStep4 = steps.some(step => step.id === 4 && step.status === "In Progress");

  return (
    <div className="flex h-full w-full  bg-[#FAFAFA]">
      <Sidebar isStep4={isStep4} />
      <div className="flex-1  flex flex-col overflow-hidden">
        <Header title="Platform Setup" userEmail="kadin.stanton@gmail.com" />
        <div className='border-b-[1px] w-[1194px]  top-[95px] fixed left-[246px] border-[#E5E5E5]'></div>
        <DashboardCard steps={steps} setSteps={setSteps} />
      </div>
      <span className='h-[60px] w-[60px] absolute top-[919px] left-[1315px]'>
        <img src="/Assets/assistant.png" alt="" />
      </span>
    </div>
  );
};

export default Dashboard;