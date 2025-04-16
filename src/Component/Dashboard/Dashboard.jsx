import React from 'react';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import SetupCard from '../Common/SetupCard';

const Dashboard = () => {
  const setupSteps = [
    { title: 'Set Up Business Profile', status: 'Not Started' },
    { title: 'Sync Your Customer Data', status: 'Not Started' },
    { title: 'Set Up AI Agent Rules', status: 'Not Started' },
    { title: 'Set Up First Campaign', status: 'Not Started' },
  ];

  return (
    <div className="flex h-screen bg-[#EFF0F6]">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Platform Setup" userEmail="kadin.stanton@gmail.com" />
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Get Started with ReferralHub</h2>
              <p className="text-gray-600">To get started with better referrals & rewards, complete your account setup in just a few easy steps.</p>
            </div>

            <div className="space-y-4">
              {setupSteps.map((step, index) => (
                <SetupCard
                  key={index}
                  title={step.title}
                  status={step.status}
                  onClick={() => console.log(`Clicked ${step.title}`)}
                />
              ))}
            </div>

            <div className="mt-8 bg-white rounded-lg p-6 border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Build Your Business Identity</h2>
              <p className="text-gray-600 mb-6">Help us tailor the referral experience by adding key details about your business</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Logo</label>
                  <button className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                    Choose Image
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Description</label>
                  <textarea 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter business description.."
                    rows="4"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;