import React from 'react';

const NextButton = ({ onClick, text = "Next", top = 839 }) => {
  return (
    <span 
      onClick={onClick}
      className={`cursor-pointer box-border flex flex-row justify-center items-center p-[10px_35px] gap-[10px] absolute w-[350px] h-[39px] left-[162px] top-[${top}px] bg-gradient-to-r from-[rgba(48,90,255,0.8)] to-[#B5D2FF] rounded-[8px] text-center text-white`}>
      {text}
    </span>
  );
};

export default NextButton; 