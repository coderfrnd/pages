import React from 'react';

const SetupCard = ({ title, status = 'Not Started', onClick }) => {
  const getStatusColor = () => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in progress':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div 
      onClick={onClick}
      className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 cursor-pointer hover:border-[#4A3AFF] transition-colors"
    >
      <div className="flex items-center space-x-4">
        <div className={`h-8 w-8 rounded-full ${status.toLowerCase() === 'completed' ? 'bg-green-500' : 'bg-gray-200'} flex items-center justify-center`}>
          {status.toLowerCase() === 'completed' && (
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
        <span className="text-gray-800 font-medium">{title}</span>
      </div>
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor()}`}>
        {status}
      </span>
    </div>
  );
};

export default SetupCard; 