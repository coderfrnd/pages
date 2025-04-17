import React from 'react';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import DashboardCard from './DashboardCard';

const Dashboard = () => {
  return (
    <div className="flex h-full w-full  bg-[#FAFAFA]">
      <Sidebar />
      <div className="flex-1  flex flex-col overflow-hidden">
        <Header title="Platform Setup" userEmail="kadin.stanton@gmail.com" />
        <div className='border-b-[1px]  top-[95px] absolute left-[246px] border-[#E5E5E5]'></div>
        <DashboardCard/>
      </div>
      <span className='h-[60px] w-[60px] absolute top-[919px] left-[1315px]'>
        <img src="/Assets/assistant.png" alt="" />
      </span>
    </div>
  );
};

export default Dashboard;