import { useState } from "react";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="w-[30px] h-[30px] flex items-center justify-center">
      <div
        onClick={() => setIsOn(!isOn)}
        className={`relative w-[30px] h-[18px] border-2 border-blue-500 rounded-full cursor-pointer transition-colors duration-300 ${
          isOn ? "bg-blue-500" : "bg-transparent"
        }`}
      >
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full border-2 border-blue-500 bg-white transition-all duration-300 ${
            isOn ? "left-[16px]" : "left-[2px]"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ToggleButton; 