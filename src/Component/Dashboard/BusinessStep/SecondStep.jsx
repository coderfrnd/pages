import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Orcomponent from '../../Common/Orcomponent';
import NextButton from '../../Common/NextButton';

const SecondStep = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Handle the dropped files here
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv']
    }
  });

  return (
    <>
      <div className="w-[529px] h-[24px] absolute top-[93px] left-[73px]">
        <h2 className="w-[529px] h-[24px] font-['Inter'] font-[500] text-[20px] leading-[100%] tracking-[0%] text-center text-[#333333]">
          Import Customer Data: Sync with Zapier or Upload CSV
        </h2>
      </div>
      <div className="w-[647px] h-[355px] absolute top-[207px] left-[14px] flex flex-col items-center gap-[20px]">
      <button className="w-[400px] h-[39px] py-[10px] gap-[10px] px-[35px] rounded-[7px] border border-[#305AFF] bg-white text-[#305AFF] font-['Inter'] font-medium text-[16px]">
        Connect with Zapier
      </button>

     <Orcomponent/>
      <div {...getRootProps()} className="w-[647px] h-[252px] border-2 border-dashed border-[#CCCCCC] rounded-[7px] flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-[#305AFF] transition-colors p-6">
        <input {...getInputProps()} />
        <div className="w-[70px] h-[70px] absolute top-[128px] left-[288px]">
          <img src="/Assets/upload-cloud.svg" alt="Upload" className="w-full h-full" />
        </div>
        <p className="w-[184px] h-[19px] absolute top-[218px] left-[231px] text-[#666666] font-['Inter'] font-[500] text-[16px] leading-[100%] tracking-[0%] text-center text-nowrap">
          {isDragActive ? "Drop the files here..." : "Drag and drop files here"}
        </p>
        <p className="w-[16px] h-[19px] absolute top-[252px] left-[315px] text-[#666666] font-['Inter'] font-[500] text-[16px] leading-[100%] tracking-[0%] text-center">or</p>
        <button className="w-[400px] h-[40px] absolute top-[286px] left-[124px] rounded-[7px] border border-[#305AFF] text-[#305AFF] font-['Inter'] text-[14px] hover:underline">
          Click to Upload CSV File
        </button>
      </div>
      </div>
     
      </>
  
  );
};

export default SecondStep;